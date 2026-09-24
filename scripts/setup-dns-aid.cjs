/**
 * Automated DNS for AI Discovery (DNS-AID) Publisher & Validator
 * Specifications:
 * - draft-mozleywilliams-dnsop-dnsaid (IETF Standards Track)
 * - RFC 9460 (SVCB and HTTPS DNS Resource Records)
 * - isitagentready.com DNS-AID scanner
 * 
 * Usage:
 *   node scripts/setup-dns-aid.cjs <CLOUDFLARE_API_TOKEN>
 *   node scripts/setup-dns-aid.cjs --verify
 *   node scripts/setup-dns-aid.cjs --scan
 */

const https = require("https");
const path = require("path");
const fs = require("fs");

const ZONE_ID = "6b44c951c566b426fb1442be561882c3"; // realresult.in Zone ID
const DOMAIN = "realresult.in";

const RECORDS_TO_CREATE = [
  // 1. A2A Agent Endpoint (SVCB)
  {
    type: "SVCB",
    name: `_a2a._agents.${DOMAIN}`,
    content: `1 ${DOMAIN}. alpn="a2a" port=443 mandatory=alpn,port`,
    data: {
      priority: 1,
      target: `${DOMAIN}.`,
      value: 'alpn="a2a" port=443 mandatory=alpn,port',
    },
    ttl: 3600,
    comment: "DNS-AID: A2A Agent discovery endpoint (draft-mozleywilliams-dnsop-dnsaid)",
  },
  // 2. A2A Agent Endpoint (HTTPS)
  {
    type: "HTTPS",
    name: `_a2a._agents.${DOMAIN}`,
    content: `1 ${DOMAIN}. alpn="a2a" port=443 mandatory=alpn,port`,
    data: {
      priority: 1,
      target: `${DOMAIN}.`,
      value: 'alpn="a2a" port=443 mandatory=alpn,port',
    },
    ttl: 3600,
    comment: "DNS-AID: A2A Agent HTTPS discovery endpoint",
  },
  // 3. MCP Server Endpoint (SVCB)
  {
    type: "SVCB",
    name: `_mcp._agents.${DOMAIN}`,
    content: `1 ${DOMAIN}. alpn="mcp" port=443 mandatory=alpn,port`,
    data: {
      priority: 1,
      target: `${DOMAIN}.`,
      value: 'alpn="mcp" port=443 mandatory=alpn,port',
    },
    ttl: 3600,
    comment: "DNS-AID: Model Context Protocol (MCP) server endpoint",
  },
  // 4. MCP Server Endpoint (HTTPS)
  {
    type: "HTTPS",
    name: `_mcp._agents.${DOMAIN}`,
    content: `1 ${DOMAIN}. alpn="mcp" port=443 mandatory=alpn,port`,
    data: {
      priority: 1,
      target: `${DOMAIN}.`,
      value: 'alpn="mcp" port=443 mandatory=alpn,port',
    },
    ttl: 3600,
    comment: "DNS-AID: Model Context Protocol (MCP) HTTPS endpoint",
  },
  // 5. Index Discovery Entrypoint (SVCB)
  {
    type: "SVCB",
    name: `_index._agents.${DOMAIN}`,
    content: `1 ${DOMAIN}. alpn="h2,h3" port=443 mandatory=alpn,port`,
    data: {
      priority: 1,
      target: `${DOMAIN}.`,
      value: 'alpn="h2,h3" port=443 mandatory=alpn,port',
    },
    ttl: 3600,
    comment: "DNS-AID: Main agent index entrypoint",
  },
  // 6. Index Discovery Entrypoint (HTTPS)
  {
    type: "HTTPS",
    name: `_index._agents.${DOMAIN}`,
    content: `1 ${DOMAIN}. alpn="h2,h3" port=443 mandatory=alpn,port`,
    data: {
      priority: 1,
      target: `${DOMAIN}.`,
      value: 'alpn="h2,h3" port=443 mandatory=alpn,port',
    },
    ttl: 3600,
    comment: "DNS-AID: Main agent index HTTPS entrypoint",
  },
  // 7. Index Discovery TXT Metadata
  {
    type: "TXT",
    name: `_index._agents.${DOMAIN}`,
    content: `v=aid1; a2a=1; mcp=1; card=https://${DOMAIN}/.well-known/agent-card.json; mcp-card=https://${DOMAIN}/.well-known/mcp/server-card.json; catalog=https://${DOMAIN}/.well-known/api-catalog`,
    ttl: 3600,
    comment: "DNS-AID: Agent capabilities index metadata",
  },
];

function cfRequest(token, path, method = "GET", body = null) {
  return new Promise((resolve, reject) => {
    const data = body ? JSON.stringify(body) : null;
    const req = https.request(
      `https://api.cloudflare.com/client/v4${path}`,
      {
        method,
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
          ...(data ? { "Content-Length": Buffer.byteLength(data) } : {}),
        },
      },
      (res) => {
        let resData = "";
        res.on("data", (chunk) => (resData += chunk));
        res.on("end", () => {
          try {
            resolve({ status: res.statusCode, body: JSON.parse(resData) });
          } catch (e) {
            resolve({ status: res.statusCode, raw: resData });
          }
        });
      }
    );

    req.on("error", reject);
    if (data) req.write(data);
    req.end();
  });
}

function queryDoH(resolver, name, type) {
  return new Promise((resolve) => {
    const url = resolver === "google"
      ? `https://dns.google/resolve?name=${encodeURIComponent(name)}&type=${encodeURIComponent(type)}&do=1`
      : `https://cloudflare-dns.com/dns-query?name=${encodeURIComponent(name)}&type=${encodeURIComponent(type)}&do=1`;

    https.get(
      url,
      { headers: { Accept: "application/dns-json" } },
      (res) => {
        let data = "";
        res.on("data", (c) => (data += c));
        res.on("end", () => {
          try {
            resolve(JSON.parse(data));
          } catch {
            resolve(null);
          }
        });
      }
    ).on("error", () => resolve(null));
  });
}

async function verifyDnsAid() {
  console.log(`\n=======================================================================`);
  console.log(` 🔍 VERIFYING DNS FOR AI DISCOVERY (DNS-AID) VIA DOH FOR ${DOMAIN}`);
  console.log(`=======================================================================\n`);

  const queries = [
    { name: `_index._agents.${DOMAIN}`, type: "SVCB" },
    { name: `_index._agents.${DOMAIN}`, type: "HTTPS" },
    { name: `_a2a._agents.${DOMAIN}`, type: "SVCB" },
    { name: `_a2a._agents.${DOMAIN}`, type: "HTTPS" },
    { name: `_mcp._agents.${DOMAIN}`, type: "SVCB" },
    { name: `_mcp._agents.${DOMAIN}`, type: "HTTPS" },
    { name: `_index._agents.${DOMAIN}`, type: "TXT" },
  ];

  let resolvedCount = 0;

  console.log(`[Cloudflare DoH: 1.1.1.1]`);
  for (const q of queries) {
    const res = await queryDoH("cloudflare", q.name, q.type);
    const answers = res?.Answer || [];
    const status = res?.Status === 0 ? "NOERROR" : res?.Status === 3 ? "NXDOMAIN" : `CODE_${res?.Status}`;
    const symbol = answers.length > 0 ? "✓" : "✗";
    console.log(`  ${symbol} ${q.type.padEnd(6)} ${q.name.padEnd(35)} => ${answers.length} answer(s) [${status}]`);
  }

  console.log(`\n[Google DoH: 8.8.8.8]`);
  for (const q of queries) {
    const res = await queryDoH("google", q.name, q.type);
    const answers = res?.Answer || [];
    const status = res?.Status === 0 ? "NOERROR" : res?.Status === 3 ? "NXDOMAIN" : `CODE_${res?.Status}`;
    const symbol = answers.length > 0 ? "✓" : "✗";
    if (answers.length > 0) resolvedCount++;
    console.log(`  ${symbol} ${q.type.padEnd(6)} ${q.name.padEnd(35)} => ${answers.length} answer(s) [${status}]`);
  }

  // Check DNSSEC
  console.log(`\n[DNSSEC Authentication Status]`);
  const dsRes = await queryDoH("cloudflare", DOMAIN, "DS");
  const isDnssec = dsRes?.AD === true || (dsRes?.Answer && dsRes.Answer.length > 0);
  console.log(`  ${isDnssec ? "✓ PASS" : "✗ NOT SIGNED"}: DNSSEC DS delegation for ${DOMAIN} (AD flag: ${dsRes?.AD})`);

  console.log(`\nSummary: ${resolvedCount}/${queries.length} DNS-AID records resolved.`);
  if (resolvedCount === queries.length && isDnssec) {
    console.log(`🎉 ALL DNS-AID RECORDS AND DNSSEC ARE ACTIVE AND VERIFIED!`);
  } else {
    console.log(`⚠️ Some records are still pending publication or DNSSEC delegation.`);
  }
}

async function scanIsItAgentReady() {
  console.log(`\n[Scanner] Requesting live audit from isitagentready.com for https://${DOMAIN}...`);
  try {
    const res = await new Promise((resolve, reject) => {
      const postData = JSON.stringify({ url: `https://${DOMAIN}` });
      const req = https.request(
        "https://isitagentready.com/api/scan",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Content-Length": Buffer.byteLength(postData),
          },
        },
        (r) => {
          let data = "";
          r.on("data", (c) => (data += c));
          r.on("end", () => {
            try {
              resolve(JSON.parse(data));
            } catch (e) {
              resolve({ raw: data });
            }
          });
        }
      );
      req.on("error", reject);
      req.write(postData);
      req.end();
    });

    const dnsAid = res?.checks?.discoverability?.dnsAid;
    console.log(`Status:`, dnsAid?.status);
    console.log(`Message:`, dnsAid?.message);
    console.log(`Details:`, JSON.stringify(dnsAid?.details, null, 2));
  } catch (err) {
    console.error("Scan error:", err.message);
  }
}

async function main() {
  const arg = process.argv[2];

  if (arg === "--verify" || arg === "-v") {
    await verifyDnsAid();
    return;
  }

  if (arg === "--scan" || arg === "-s") {
    await scanIsItAgentReady();
    return;
  }

  const token =
    arg ||
    process.env.CLOUDFLARE_API_TOKEN ||
    process.env.CF_API_TOKEN;

  if (!token) {
    console.log(`
=======================================================================
 🚀 DNS for AI Discovery (DNS-AID) Setup for ${DOMAIN}
 Specifications: draft-mozleywilliams-dnsop-dnsaid & RFC 9460
=======================================================================

No Cloudflare API Token provided. Choose one of the following methods:

METHOD 1: Automated Publication via API Token (Recommended)
-----------------------------------------------------------------------
Create a Cloudflare API Token at:
  https://dash.cloudflare.com/profile/api-tokens
  Permissions: Zone -> DNS -> Edit
  Zone Resources: Include -> Specific zone -> ${DOMAIN}

Then run:
  node scripts/setup-dns-aid.cjs <YOUR_API_TOKEN>


METHOD 2: 1-Click BIND Zone File Import
-----------------------------------------------------------------------
1. Open Cloudflare Dashboard for ${DOMAIN}:
   https://dash.cloudflare.com/68de8c2096d7fa589eb2dcacb521d93e/${DOMAIN}/dns/records
2. Click "Import and Export" -> "Import"
3. Select the pre-generated zone file:
   [scripts/dns-aid.zone]


METHOD 3: Manual Entry in Cloudflare Dashboard
-----------------------------------------------------------------------
Add the following 7 records under DNS -> Records:

1. Type: SVCB
   Name: _a2a._agents
   Target: ${DOMAIN}.
   Priority: 1
   Value: alpn="a2a" port=443 mandatory=alpn,port

2. Type: HTTPS
   Name: _a2a._agents
   Target: ${DOMAIN}.
   Priority: 1
   Value: alpn="a2a" port=443 mandatory=alpn,port

3. Type: SVCB
   Name: _mcp._agents
   Target: ${DOMAIN}.
   Priority: 1
   Value: alpn="mcp" port=443 mandatory=alpn,port

4. Type: HTTPS
   Name: _mcp._agents
   Target: ${DOMAIN}.
   Priority: 1
   Value: alpn="mcp" port=443 mandatory=alpn,port

5. Type: SVCB
   Name: _index._agents
   Target: ${DOMAIN}.
   Priority: 1
   Value: alpn="h2,h3" port=443 mandatory=alpn,port

6. Type: HTTPS
   Name: _index._agents
   Target: ${DOMAIN}.
   Priority: 1
   Value: alpn="h2,h3" port=443 mandatory=alpn,port

7. Type: TXT
   Name: _index._agents
   Content: v=aid1; a2a=1; mcp=1; card=https://${DOMAIN}/.well-known/agent-card.json; mcp-card=https://${DOMAIN}/.well-known/mcp/server-card.json; catalog=https://${DOMAIN}/.well-known/api-catalog


DNSSEC SIGNING REQUIREMENT:
-----------------------------------------------------------------------
1. In Cloudflare Dashboard -> DNS -> Settings -> Enable DNSSEC.
2. Cloudflare will display DS Record details (Key Tag, Algorithm 13, Digest Type 2, Digest).
3. Add this DS Record at your domain registrar for ${DOMAIN}.


VERIFICATION:
-----------------------------------------------------------------------
Once published, verify live resolution anytime with:
  node scripts/setup-dns-aid.cjs --verify
  node scripts/setup-dns-aid.cjs --scan
=======================================================================
`);
    return;
  }

  console.log(`[DNS-AID] Connecting to Cloudflare API for zone ${ZONE_ID} (${DOMAIN})...`);

  // Fetch existing records
  const existingRes = await cfRequest(token, `/zones/${ZONE_ID}/dns_records?per_page=100`);
  if (!existingRes.body || !existingRes.body.success) {
    console.error("[DNS-AID] Failed to list existing DNS records:", existingRes.body);
    process.exit(1);
  }

  const existingRecords = existingRes.body.result || [];
  console.log(`[DNS-AID] Found ${existingRecords.length} existing DNS records in zone.`);

  for (const record of RECORDS_TO_CREATE) {
    const match = existingRecords.find(
      (r) => r.type === record.type && r.name === record.name
    );

    const payload = record.data
      ? {
          type: record.type,
          name: record.name,
          data: record.data,
          ttl: record.ttl,
          comment: record.comment,
        }
      : {
          type: record.type,
          name: record.name,
          content: record.content,
          ttl: record.ttl,
          comment: record.comment,
        };

    if (match) {
      console.log(`[DNS-AID] Updating existing ${record.type} record for ${record.name}...`);
      let updateRes = await cfRequest(
        token,
        `/zones/${ZONE_ID}/dns_records/${match.id}`,
        "PUT",
        payload
      );
      if (!updateRes.body?.success && record.content) {
        // Fallback to content string if data format failed
        updateRes = await cfRequest(
          token,
          `/zones/${ZONE_ID}/dns_records/${match.id}`,
          "PUT",
          {
            type: record.type,
            name: record.name,
            content: record.content,
            ttl: record.ttl,
            comment: record.comment,
          }
        );
      }
      if (updateRes.body?.success) {
        console.log(`[DNS-AID] ✓ Updated ${record.type} ${record.name}`);
      } else {
        console.warn(`[DNS-AID] ✗ Update failed:`, updateRes.body?.errors || updateRes.body);
      }
    } else {
      console.log(`[DNS-AID] Creating ${record.type} record for ${record.name}...`);
      let createRes = await cfRequest(
        token,
        `/zones/${ZONE_ID}/dns_records`,
        "POST",
        payload
      );
      if (!createRes.body?.success && record.content) {
        // Fallback to content string if data format failed
        createRes = await cfRequest(
          token,
          `/zones/${ZONE_ID}/dns_records`,
          "POST",
          {
            type: record.type,
            name: record.name,
            content: record.content,
            ttl: record.ttl,
            comment: record.comment,
          }
        );
      }
      if (createRes.body?.success) {
        console.log(`[DNS-AID] ✓ Created ${record.type} ${record.name}`);
      } else {
        console.warn(`[DNS-AID] ✗ Creation failed:`, createRes.body?.errors || createRes.body);
      }
    }
  }

  // Enable DNSSEC
  console.log(`\n[DNS-AID] Enabling DNSSEC on ${DOMAIN}...`);
  const dnssecRes = await cfRequest(token, `/zones/${ZONE_ID}/dnssec`, "PATCH", {
    status: "active",
  });
  if (dnssecRes.body?.success) {
    console.log(`[DNS-AID] ✓ DNSSEC active:`, dnssecRes.body.result?.status);
    if (dnssecRes.body.result?.ds) {
      console.log(`[DNS-AID] DS Record to add at domain registrar:`, dnssecRes.body.result.ds);
    }
  } else {
    console.log(`[DNS-AID] DNSSEC response:`, dnssecRes.body?.errors || dnssecRes.body?.messages);
  }

  // Run verification
  await verifyDnsAid();
}

main().catch(console.error);

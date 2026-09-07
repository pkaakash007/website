/**
 * Automated DNS for AI Discovery (DNS-AID) Publisher & Validator
 * Specifications:
 * - draft-mozleywilliams-dnsop-dnsaid (IETF Standards Track)
 * - RFC 9460 (SVCB and HTTPS DNS Resource Records)
 * - isitagentready.com DNS-AID scanner
 * 
 * Usage:
 *   node scripts/setup-dns-aid.cjs <CLOUDFLARE_API_TOKEN>
 * Or set environment variable:
 *   CLOUDFLARE_API_TOKEN=... node scripts/setup-dns-aid.cjs
 */

const https = require("https");

const ZONE_ID = "6b44c951c566b426fb1442be561882c3"; // realresult.in Zone ID
const DOMAIN = "realresult.in";

const RECORDS_TO_CREATE = [
  // 1. A2A Agent Endpoint (SVCB)
  {
    type: "SVCB",
    name: `_a2a._agents.${DOMAIN}`,
    content: `1 ${DOMAIN}. alpn="a2a" port=443 mandatory=alpn,port`,
    ttl: 3600,
    comment: "DNS-AID: A2A Agent discovery endpoint (draft-mozleywilliams-dnsop-dnsaid)",
  },
  // 2. A2A Agent Endpoint (HTTPS)
  {
    type: "HTTPS",
    name: `_a2a._agents.${DOMAIN}`,
    content: `1 ${DOMAIN}. alpn="a2a" port=443 mandatory=alpn,port`,
    ttl: 3600,
    comment: "DNS-AID: A2A Agent HTTPS discovery endpoint",
  },
  // 3. MCP Server Endpoint (SVCB)
  {
    type: "SVCB",
    name: `_mcp._agents.${DOMAIN}`,
    content: `1 ${DOMAIN}. alpn="mcp" port=443 mandatory=alpn,port`,
    ttl: 3600,
    comment: "DNS-AID: Model Context Protocol (MCP) server endpoint",
  },
  // 4. MCP Server Endpoint (HTTPS)
  {
    type: "HTTPS",
    name: `_mcp._agents.${DOMAIN}`,
    content: `1 ${DOMAIN}. alpn="mcp" port=443 mandatory=alpn,port`,
    ttl: 3600,
    comment: "DNS-AID: Model Context Protocol (MCP) HTTPS endpoint",
  },
  // 5. Index Discovery Entrypoint (SVCB)
  {
    type: "SVCB",
    name: `_index._agents.${DOMAIN}`,
    content: `1 ${DOMAIN}. alpn="h2,h3" port=443 mandatory=alpn,port`,
    ttl: 3600,
    comment: "DNS-AID: Main agent index entrypoint",
  },
  // 6. Index Discovery Entrypoint (HTTPS)
  {
    type: "HTTPS",
    name: `_index._agents.${DOMAIN}`,
    content: `1 ${DOMAIN}. alpn="h2,h3" port=443 mandatory=alpn,port`,
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

function queryDoH(name, type) {
  return new Promise((resolve) => {
    https.get(
      `https://cloudflare-dns.com/dns-query?name=${encodeURIComponent(name)}&type=${encodeURIComponent(type)}&do=1`,
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

async function main() {
  const token =
    process.argv[2] ||
    process.env.CLOUDFLARE_API_TOKEN ||
    process.env.CF_API_TOKEN;

  if (!token) {
    console.log(`
=======================================================================
 DNS for AI Discovery (DNS-AID) Setup for ${DOMAIN}
=======================================================================

No Cloudflare API Token provided.

You can either:
1. Run this script with a Cloudflare API Token (Scope: Zone.DNS:Edit):
     node scripts/setup-dns-aid.cjs <YOUR_CLOUDFLARE_API_TOKEN>

2. Or manually add the records in the Cloudflare Dashboard:
   URL: https://dash.cloudflare.com/68de8c2096d7fa589eb2dcacb521d93e/${DOMAIN}/dns/records

   Records to add:
   --------------------------------------------------------------------
   Type:   SVCB
   Name:   _a2a._agents
   Target: ${DOMAIN}.
   Priority: 1
   Value:  alpn="a2a" port=443 mandatory=alpn,port

   Type:   HTTPS
   Name:   _a2a._agents
   Target: ${DOMAIN}.
   Priority: 1
   Value:  alpn="a2a" port=443 mandatory=alpn,port

   Type:   SVCB
   Name:   _mcp._agents
   Target: ${DOMAIN}.
   Priority: 1
   Value:  alpn="mcp" port=443 mandatory=alpn,port

   Type:   HTTPS
   Name:   _mcp._agents
   Target: ${DOMAIN}.
   Priority: 1
   Value:  alpn="mcp" port=443 mandatory=alpn,port

   Type:   SVCB
   Name:   _index._agents
   Target: ${DOMAIN}.
   Priority: 1
   Value:  alpn="h2,h3" port=443 mandatory=alpn,port

   Type:   HTTPS
   Name:   _index._agents
   Target: ${DOMAIN}.
   Priority: 1
   Value:  alpn="h2,h3" port=443 mandatory=alpn,port

   Type:   TXT
   Name:   _index._agents
   Content: v=aid1; a2a=1; mcp=1; card=https://${DOMAIN}/.well-known/agent-card.json; mcp-card=https://${DOMAIN}/.well-known/mcp/server-card.json

   --------------------------------------------------------------------
   DNSSEC:
   In Cloudflare Dashboard -> DNS -> Settings -> Enable DNSSEC
=======================================================================
`);
    process.exit(1);
  }

  console.log(`[DNS-AID] Verifying token for zone ${ZONE_ID} (${DOMAIN})...`);

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

    if (match) {
      console.log(`[DNS-AID] Updating existing ${record.type} record for ${record.name}...`);
      const updateRes = await cfRequest(
        token,
        `/zones/${ZONE_ID}/dns_records/${match.id}`,
        "PUT",
        record
      );
      if (updateRes.body.success) {
        console.log(`[DNS-AID] ✓ Updated ${record.type} ${record.name}`);
      } else {
        console.warn(`[DNS-AID] ✗ Update failed:`, updateRes.body.errors);
      }
    } else {
      console.log(`[DNS-AID] Creating ${record.type} record for ${record.name}...`);
      const createRes = await cfRequest(
        token,
        `/zones/${ZONE_ID}/dns_records`,
        "POST",
        record
      );
      if (createRes.body.success) {
        console.log(`[DNS-AID] ✓ Created ${record.type} ${record.name}`);
      } else {
        console.warn(`[DNS-AID] ✗ Creation failed:`, createRes.body.errors);
      }
    }
  }

  // Enable DNSSEC
  console.log(`[DNS-AID] Enabling DNSSEC on ${DOMAIN}...`);
  const dnssecRes = await cfRequest(token, `/zones/${ZONE_ID}/dnssec`, "PATCH", {
    status: "active",
  });
  if (dnssecRes.body.success) {
    console.log(`[DNS-AID] ✓ DNSSEC status:`, dnssecRes.body.result.status);
  } else {
    console.log(`[DNS-AID] DNSSEC notice:`, dnssecRes.body.errors || dnssecRes.body.messages);
  }

  // Verify resolution via DoH
  console.log(`\n[DNS-AID] Verifying resolution via Cloudflare 1.1.1.1 DoH...`);
  const queries = [
    { name: `_index._agents.${DOMAIN}`, type: "SVCB" },
    { name: `_index._agents.${DOMAIN}`, type: "HTTPS" },
    { name: `_a2a._agents.${DOMAIN}`, type: "SVCB" },
    { name: `_a2a._agents.${DOMAIN}`, type: "HTTPS" },
    { name: `_mcp._agents.${DOMAIN}`, type: "SVCB" },
    { name: `_mcp._agents.${DOMAIN}`, type: "HTTPS" },
    { name: `_index._agents.${DOMAIN}`, type: "TXT" },
  ];

  for (const q of queries) {
    const ans = await queryDoH(q.name, q.type);
    const answers = ans?.Answer || [];
    console.log(`- ${q.type} ${q.name} => ${answers.length} answer(s) (Status: ${ans?.Status})`);
  }

  console.log(`\n[DNS-AID] Setup complete!`);
}

main().catch(console.error);

import { spawn } from "child_process";

const chromePath = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";
const targetUrl = process.argv[2] || "https://realresult.in/services";

console.log(`Starting headless Chrome for: ${targetUrl}`);

const chrome = spawn(chromePath, [
  "--headless=new",
  "--remote-debugging-port=9222",
  "--disable-gpu",
  "--no-sandbox",
  "--disable-extensions",
  "about:blank",
]);

async function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function run() {
  await sleep(1500);

  let versionRes;
  try {
    versionRes = await fetch("http://127.0.0.1:9222/json/version").then((r) => r.json());
  } catch (err) {
    console.error("Could not connect to Chrome debugging port:", err);
    chrome.kill();
    return;
  }

  const listRes = await fetch("http://127.0.0.1:9222/json/list").then((r) => r.json());
  const page = listRes.find((p) => p.type === "page") || listRes[0];
  if (!page) {
    console.error("No page target found");
    chrome.kill();
    return;
  }

  const ws = new WebSocket(page.webSocketDebuggerUrl);

  let id = 1;
  const pending = new Map();

  function send(method, params = {}) {
    return new Promise((resolve, reject) => {
      const msgId = id++;
      pending.set(msgId, { resolve, reject });
      ws.send(JSON.stringify({ id: msgId, method, params }));
    });
  }

  ws.onmessage = (event) => {
    const data = JSON.parse(event.data);
    if (data.id && pending.has(data.id)) {
      pending.get(data.id).resolve(data.result);
      pending.delete(data.id);
    }

    if (data.method === "Runtime.consoleAPICalled") {
      console.log(`[CONSOLE ${data.params.type.toUpperCase()}]`, data.params.args.map((a) => a.value || a.description || JSON.stringify(a)).join(" "));
    }

    if (data.method === "Runtime.exceptionThrown") {
      console.error("[UNCAUGHT EXCEPTION]", data.params.exceptionDetails.text, data.params.exceptionDetails.exception?.description || "");
    }

    if (data.method === "Network.responseReceived") {
      const { response } = data.params;
      if (response.status >= 400) {
        console.warn(`[HTTP ${response.status}] ${response.url}`);
      }
    }
  };

  await new Promise((resolve) => {
    ws.onopen = resolve;
  });

  await send("Page.enable");
  await send("Runtime.enable");
  await send("Network.enable");

  console.log(`Navigating to ${targetUrl}...`);
  await send("Page.navigate", { url: targetUrl });

  // Wait 4 seconds for all React bundles, Suspense, and hydration to settle
  await sleep(4000);

  // Evaluate DOM state
  const evalResult = await send("Runtime.evaluate", {
    expression: `(() => {
      try {
        const main = document.querySelector('main');
        const h1 = document.querySelector('h1');
        return JSON.stringify({
          h1: h1 ? h1.innerText : 'NO H1',
          mainTextSnippet: main ? main.innerText.slice(0, 300) : 'NO MAIN',
          cardsCount: document.querySelectorAll('button, a').length
        });
      } catch (e) {
        return JSON.stringify({ error: e.message, stack: e.stack });
      }
    })()`,
    returnByValue: true,
  });

  console.log("\n=== PAGE STATE INSPECTION ===");
  console.log(evalResult?.result?.value);

  ws.close();
  chrome.kill();
}

run().catch((e) => {
  console.error("Run error:", e);
  chrome.kill();
});

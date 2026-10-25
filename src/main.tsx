import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "@/styles/index.css";
import { registerWebMcpTools } from "./utils/webmcp";

// Handle chunk load errors when new builds are deployed to Cloudflare
window.addEventListener("vite:preloadError", () => {
  window.location.reload();
});

// Register WebMCP browser tools for AI agents after first paint and idle settle
if (typeof window !== "undefined") {
  if ("requestIdleCallback" in window) {
    (window as any).requestIdleCallback(() => registerWebMcpTools(), { timeout: 4000 });
  } else {
    setTimeout(registerWebMcpTools, 2000);
  }
}

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("Failed to find the root element to mount React application.");
}

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

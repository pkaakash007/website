import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "@/styles/index.css";
import { registerWebMcpTools } from "./utils/webmcp";

// Register WebMCP browser tools for AI agent interaction
registerWebMcpTools();

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("Failed to find the root element to mount React application.");
}

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

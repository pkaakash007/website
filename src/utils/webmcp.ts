/**
 * WebMCP (Web Model Context Protocol) Tools Registration
 * Standard: https://webmachinelearning.github.io/webmcp/
 * Chrome EPP: https://developer.chrome.com/blog/webmcp-epp
 * 
 * Exposes site tools and capabilities directly to browser-based AI agents
 * via `navigator.modelContext.registerTool()`.
 */

export interface WebMcpTool {
  name: string;
  title?: string;
  description: string;
  inputSchema: {
    type: string;
    properties?: Record<string, any>;
    required?: string[];
  };
  execute: (args: any) => Promise<any> | any;
  annotations?: {
    readOnlyHint?: boolean;
    [key: string]: any;
  };
}

export const REALRESULT_WEBMCP_TOOLS: WebMcpTool[] = [
  {
    name: "search_realresult",
    title: "Search Real Result Services & Solutions",
    description:
      "Full-text search across Real Result marketing, AI Generative Engine Optimization (GEO), technical SEO, custom enterprise software, and regional Tamil Nadu B2B solutions.",
    inputSchema: {
      type: "object",
      properties: {
        query: {
          type: "string",
          description: "Search keywords (e.g. 'GEO', 'poultry erp', 'logistics lr', 'technical seo', 'namakkal')",
        },
        limit: {
          type: "integer",
          description: "Maximum results to return (1-10, default 5)",
          default: 5,
        },
      },
      required: ["query"],
    },
    annotations: { readOnlyHint: true },
    execute: async (args: { query: string; limit?: number }) => {
      const q = (args.query || "").toLowerCase();
      const limit = args.limit || 5;

      const database = [
        {
          title: "Generative Engine Optimization (GEO)",
          category: "AI Marketing",
          url: "https://realresult.in/digital-marketing",
          description:
            "Optimize digital brand authority, entity knowledge graphs, and citation frequency across AI answer engines (ChatGPT Search, Perplexity AI, Google Gemini, Claude).",
          keywords: ["geo", "ai", "chatgpt", "perplexity", "gemini", "citations", "entity"],
        },
        {
          title: "Technical SEO & Schema Optimization",
          category: "SEO",
          url: "https://realresult.in/digital-marketing",
          description:
            "Programmatic LocalBusiness schema markup, core web vitals, RFC 8288 link headers, and robots.txt AI rules.",
          keywords: ["seo", "schema", "localbusiness", "core web vitals", "sitemap"],
        },
        {
          title: "Poultry Farm Management ERP",
          category: "Enterprise Software",
          url: "https://realresult.in/software-development",
          description:
            "Custom cloud ERP for commercial layer, broiler, and breeder operations. Features FCR calculation, flock mortality tracking, feed inventory, and egg sales dispatch.",
          keywords: ["poultry", "erp", "farm", "fcr", "feed", "egg", "broiler", "layer", "namakkal"],
        },
        {
          title: "Fleet Logistics & Lorry Receipt (LR) Portal",
          category: "Enterprise Software",
          url: "https://realresult.in/software-development",
          description:
            "Digital dispatch portal for transport operators. Real-time digital LR generation, GST e-way bill linking, trip expense reconciliation, and driver settlements.",
          keywords: ["logistics", "lr", "lorry receipt", "transport", "fleet", "truck", "dispatch", "erode"],
        },
        {
          title: "Namakkal Regional Business Credentials",
          category: "Regional Intelligence",
          url: "https://realresult.in/locations/namakkal",
          description:
            "Poultry farming, truck body building, egg wholesale trading, and enterprise cloud software solutions for Namakkal District.",
          keywords: ["namakkal", "poultry", "lorry", "location", "office"],
        },
        {
          title: "Erode Headquarters & Industrial Hub",
          category: "Regional Intelligence",
          url: "https://realresult.in/locations/erode",
          description:
            "Textile export marketing, turmeric wholesale commercialization, and digital infrastructure for Erode District.",
          keywords: ["erode", "textiles", "turmeric", "headquarters", "office"],
        },
        {
          title: "Direct Google 5-Star Review Portal",
          category: "Customer Feedback",
          url: "https://realresult.in/review",
          description:
            "Direct link to leave a verified 5-star customer review on Google Maps for Real Result Marketing.",
          keywords: ["review", "feedback", "rating", "google", "maps"],
        },
      ];

      const matches = database.filter(
        (item) =>
          item.title.toLowerCase().includes(q) ||
          item.description.toLowerCase().includes(q) ||
          item.keywords.some((k) => k.includes(q))
      );

      return {
        query: args.query,
        count: Math.min(matches.length, limit),
        results: matches.slice(0, limit),
      };
    },
  },
  {
    name: "get_regional_office",
    title: "Get Regional Office Details",
    description:
      "Fetch verified corporate address, phone number, Google Place ID, and primary industries for Real Result Tamil Nadu regional branches (Namakkal, Erode, Coimbatore, Chennai).",
    inputSchema: {
      type: "object",
      properties: {
        location: {
          type: "string",
          description: "Target location name",
          enum: ["namakkal", "erode", "coimbatore", "chennai"],
        },
      },
      required: ["location"],
    },
    annotations: { readOnlyHint: true },
    execute: async (args: { location: string }) => {
      const loc = (args.location || "").toLowerCase().trim();
      const offices: Record<string, any> = {
        namakkal: {
          city: "Namakkal",
          district: "Namakkal District, Tamil Nadu",
          phone: "+91 98420 12345",
          email: "namakkal@realresult.in",
          googlePlaceId: "ChIJCeVk0hrVqzsRp7foI1ppMUo",
          reviewUrl: "https://realresult.in/review",
          primarySectors: [
            "Poultry & Hatchery Farm Management ERPs",
            "Commercial Truck Body Building & Fleet Logistics",
            "Agro-Commodity Export Marketing",
          ],
        },
        erode: {
          city: "Erode",
          district: "Erode District, Tamil Nadu (Corporate HQ)",
          phone: "+91 98420 12345",
          email: "hello@realresult.in",
          googlePlaceId: "ChIJCeVk0hrVqzsRp7foI1ppMUo",
          reviewUrl: "https://realresult.in/review",
          primarySectors: [
            "Textile & Garment Digital Growth",
            "Turmeric & Agro Trading B2B Commerce",
            "Enterprise Cloud & Software Engineering",
          ],
        },
        coimbatore: {
          city: "Coimbatore",
          district: "Coimbatore District, Tamil Nadu",
          phone: "+91 98420 12345",
          email: "coimbatore@realresult.in",
          reviewUrl: "https://realresult.in/review",
          primarySectors: [
            "Precision Industrial Manufacturing",
            "Pumps, Motors & Foundry Technical SEO",
            "SaaS & Enterprise Automation",
          ],
        },
        chennai: {
          city: "Chennai",
          district: "Chennai Metropolitan, Tamil Nadu",
          phone: "+91 98420 12345",
          email: "chennai@realresult.in",
          reviewUrl: "https://realresult.in/review",
          primarySectors: [
            "Global B2B Technology & AI Operations",
            "Automotive Supply Chain Portals",
            "Generative Engine Optimization (GEO)",
          ],
        },
      };

      return offices[loc] || { error: `Location '${args.location}' not found. Available: namakkal, erode, coimbatore, chennai.` };
    },
  },
  {
    name: "get_agent_discovery_endpoints",
    title: "Get AI Agent Discovery Endpoints",
    description:
      "Retrieve all machine-readable discovery specifications, protocols, and endpoints published by Real Result for autonomous AI agents.",
    inputSchema: {
      type: "object",
      properties: {},
    },
    annotations: { readOnlyHint: true },
    execute: async () => {
      return {
        organization: "Real Result Marketing & Technology Solutions",
        domain: "https://realresult.in",
        protocols: {
          apiCatalog: {
            url: "https://realresult.in/.well-known/api-catalog",
            standard: "RFC 9727",
            mimeType: "application/linkset+json",
          },
          openApi: {
            url: "https://realresult.in/api/openapi.json",
            standard: "OpenAPI 3.1.0",
            mimeType: "application/vnd.oai.openapi+json",
          },
          agentCard: {
            url: "https://realresult.in/.well-known/agent-card.json",
            standard: "A2A Protocol Specification v1.0.0",
            mimeType: "application/json",
          },
          agentSkills: {
            url: "https://realresult.in/.well-known/agent-skills/index.json",
            standard: "Agent Skills Discovery RFC v0.2.0",
            mimeType: "application/json",
          },
          mcpServerCard: {
            url: "https://realresult.in/.well-known/mcp/server-card.json",
            standard: "Model Context Protocol SEP-1649",
            mimeType: "application/json",
          },
          webBotAuth: {
            url: "https://realresult.in/.well-known/http-message-signatures-directory",
            standard: "IETF WebBotAuth WG / RFC 9421",
            mimeType: "application/http-message-signatures-directory+json",
          },
          authMd: {
            url: "https://realresult.in/auth.md",
            standard: "Auth.md Agent Registration Discovery (RFC 9728 / RFC 8414)",
            mimeType: "text/markdown",
          },
          x402: {
            endpoint: "https://realresult.in/api",
            standard: "x402 HTTP Micropayment Protocol (Coinbase / Base)",
            currency: "USDC",
          },
          ap2: {
            standard: "Agent Payments Protocol (AP2) v0.1.0",
            uri: "https://github.com/google-agentic-commerce/AP2/tree/v0.1.0",
            role: "merchant",
            required: true,
          },
          acp: {
            url: "https://realresult.in/.well-known/acp.json",
            standard: "Agentic Commerce Protocol (ACP)",
            transports: ["rest", "mcp"],
            services: ["checkout", "carts", "orders", "delegate_payment"],
          },
          mpp: {
            url: "https://realresult.in/openapi.json",
            standard: "Machine Payment Protocol (MPP)",
            methods: ["tempo", "stripe", "lightning", "card"],
            intents: ["charge", "session"],
          },
          llmsTxt: {
            url: "https://realresult.in/llms.txt",
            mimeType: "text/plain",
          },
        },
      };
    },
  },
];

let globalAbortController: AbortController | null = null;

/**
 * Registers all WebMCP tools on navigator.modelContext with AbortController signal
 */
export function registerWebMcpTools(): boolean {
  if (typeof navigator === "undefined") return false;

  const nav = navigator as any;
  if (!nav.modelContext) {
    return false;
  }

  // Abort previous registrations if any
  if (globalAbortController) {
    globalAbortController.abort();
  }

  globalAbortController = new AbortController();
  const { signal } = globalAbortController;

  const mc = nav.modelContext;

  const win = typeof window !== "undefined" ? (window as any) : null;
  if (win) {
    win.__registered_webmcp_tools = win.__registered_webmcp_tools || new Set();
  }

  for (const tool of REALRESULT_WEBMCP_TOOLS) {
    if (win && win.__registered_webmcp_tools.has(tool.name)) {
      continue;
    }

    try {
      if (typeof mc.registerTool === "function") {
        mc.registerTool(
          {
            name: tool.name,
            title: tool.title || tool.name,
            description: tool.description,
            inputSchema: tool.inputSchema,
            execute: tool.execute,
            annotations: tool.annotations || { readOnlyHint: true },
          },
          { signal }
        );
        if (win) win.__registered_webmcp_tools.add(tool.name);
      } else if (typeof mc.provideContext === "function") {
        // Fallback for earlier draft implementations
        mc.provideContext({
          tools: [
            {
              name: tool.name,
              description: tool.description,
              inputSchema: tool.inputSchema,
              execute: tool.execute,
            },
          ],
        });
        if (win) win.__registered_webmcp_tools.add(tool.name);
      }
    } catch (err) {
      console.warn(`[WebMCP] Failed to register tool ${tool.name}:`, err);
    }
  }

  // Store controller on window for debugging & inspection
  if (typeof window !== "undefined") {
    (window as any).__webmcp_abort_controller = globalAbortController;
  }

  return true;
}

/**
 * Unregisters all WebMCP tools by aborting the signal
 */
export function unregisterWebMcpTools(): void {
  if (globalAbortController) {
    globalAbortController.abort();
    globalAbortController = null;
  }
}

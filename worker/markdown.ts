/**
 * Markdown Content Negotiation Engine for Real Result (https://realresult.in)
 * Delivers clean, formatting-stripped Markdown directly to AI agents (ChatGPT, Claude, Perplexity, Cursor, etc.)
 * Compliant with:
 * - Content Negotiation (Accept: text/markdown)
 * - Cloudflare Markdown for Agents
 * - isitagentready.com validation specifications
 */

export function getMarkdownForRoute(pathname: string): string {
  const cleanPath = pathname.replace(/\/+$/, "") || "/";

  // Route: /auth.md or /auth
  if (cleanPath === "/auth.md" || cleanPath === "/auth") {
    return `# auth.md

> Autonomous AI Agent Registration & Authentication Discovery Specification for Real Result Marketing & Technology Solutions (\`https://realresult.in\`).
> Public read-only access is fully enabled by default. Authentication is optional and primarily used for identity attribution, rate limit expansion, and automated client onboarding.
> Operator Contact: <mailto:hello@realresult.in>.

## 1. Agent Audience & Purpose

This document is designed for autonomous AI agents, LLM-based crawlers, coding assistants, and automated broker services interacting with \`https://realresult.in\`. Real Result publishes public, machine-readable information covering:
- Enterprise Digital Marketing & Generative Engine Optimization (GEO)
- Custom Software Development & Enterprise Portals (Poultry ERP, Logistics LR systems)
- Verified Regional Presence across Tamil Nadu (Namakkal, Erode, Coimbatore, Chennai)
- Client Reviews & Direct Google Local Feedback

All public discovery and documentation endpoints answer anonymous requests without credentials. Optional credentials attribute correspondence and grant enhanced rate limits.

---

## 2. Discovery Chain (OAuth Protected Resource & Authorization Server)

Clients and agents discover authentication details via standard OAuth metadata endpoints hosted on \`https://realresult.in\`:

1. **OAuth Protected Resource Metadata (RFC 9728)**:
   - Endpoint: \`https://realresult.in/.well-known/oauth-protected-resource\`
   - Specifies the resource identifier (\`https://realresult.in\`), advertised authorization server (\`https://realresult.in\`), supported scopes, and \`bearer_methods_supported: ["header"]\`.
2. **OAuth Authorization Server Metadata (RFC 8414)**:
   - Endpoint: \`https://realresult.in/.well-known/oauth-authorization-server\`
   - Specifies issuer (\`https://realresult.in\`), token endpoints, and the complete \`agent_auth\` block.
3. **OpenID Configuration**:
   - Endpoint: \`https://realresult.in/.well-known/openid-configuration\`

---

## 3. Supported Agent Registration Flows

### Flow A: ID-JAG (Identity Assertion)
- **Identity Type**: \`identity_assertion\`
- **Assertion Type**: \`urn:ietf:params:oauth:token-type:id-jag\`
- **Credential Types**: \`api_key\`, \`bearer_token\`
- **Registration Endpoint**: \`POST https://realresult.in/agent/auth/register\`
- **Revocation Endpoint**: \`POST https://realresult.in/agent/auth/revoke\`
- **Events Supported**: \`https://schemas.ietf.org/oauth/token-revocation\`, \`revocation\`

### Flow B: Verified Email
- **Identity Type**: \`identity_assertion\`
- **Assertion Type**: \`verified_email\`
- **Credential Types**: \`api_key\`, \`bearer_token\`
- **Claim Endpoint**: \`POST https://realresult.in/agent/auth/claim\`
- **Registration Endpoint**: \`POST https://realresult.in/agent/auth/register\`

### Flow C: Anonymous Access (Default)
- **Identity Type**: \`anonymous\`
- **Credential Types**: \`api_key\`, \`bearer_token\`
- **Claim Endpoint**: \`POST https://realresult.in/agent/auth/claim\`
- **Usage**: Agents can query all public APIs, markdown representations, and discovery catalogs without prior registration.

---

## 4. Supported Scopes

The following scopes are supported across resource and authorization server manifests:
- \`read:services\` — Access digital marketing, SEO, and custom software service descriptions.
- \`read:locations\` — Access regional office locations (Erode HQ, Namakkal branch, Coimbatore).
- \`read:reviews\` — Access customer feedback, ratings, and Google review redirection endpoints.
- \`read:contact\` — Query corporate contact and consultation intake endpoints.

---

## 5. Credential Usage

When an agent possesses an issued token or API key, transmit it via standard HTTP Bearer authentication:

\`\`\`http
GET /api/health HTTP/1.1
Host: realresult.in
Authorization: Bearer <YOUR_TOKEN_OR_API_KEY>
Accept: application/json
\`\`\`

Or for Markdown content negotiation:

\`\`\`http
GET / HTTP/1.1
Host: realresult.in
Authorization: Bearer <YOUR_TOKEN_OR_API_KEY>
Accept: text/markdown
\`\`\`

---

## 6. Endpoints Reference

- **Registration URI**: \`https://realresult.in/agent/auth/register\`
- **Claim URI**: \`https://realresult.in/agent/auth/claim\`
- **Revocation URI**: \`https://realresult.in/agent/auth/revoke\`
- **Operator Inquiries**: \`hello@realresult.in\`
`;
  }

  // Route: /locations/namakkal
  if (cleanPath === "/locations/namakkal") {
    return `# Digital Marketing Agency & Software Company in Namakkal & Paramathi Velur | Real Result

> High-intent B2B search engine optimization, Google Maps 3-pack local rankings, performance Google Ads, and custom enterprise software development for Namakkal's core industries.

## Location & Verified Google Business Credentials
- **Operational Facility**: Paramathi Velur, Namakkal District, Tamil Nadu 638182, India
- **GPS Coordinates**: 11.1112509° N, 78.0057796° E
- **Google Maps Listing**: https://maps.app.goo.gl/Be2565mN74uVgZ7p9
- **Google Place ID**: ChIJCeVk0hrVqzsRp7foI1ppMUo (CID: 0x4a31695a23e8b7a7)
- **Direct Telephone**: +91 98420 12345
- **Direct Email**: hello@realresult.in
- **Service Coverage Area**: Namakkal, Paramathi Velur, Tiruchengode, Rasipuram, and statewide Tamil Nadu.

## Specialized Industry Solutions for Namakkal

### 1. Poultry, Hatcheries & Feed Mills
- **National Wholesale Buyer Funnels**: High-intent B2B search visibility connecting Namakkal egg producers and hatcheries with institutional purchasers across India.
- **Custom Hatchery & Flock Management Portals**: Digital batch tracking, feed conversion ratio (FCR) calculators, and daily mortality tracking software.
- **Feed Inventory & Dealer Distribution**: Cloud-based billing, dealer network management, and real-time dispatch monitoring.

### 2. Commercial Fleet Logistics & Truck Body Building
- **Google Search Dominance for Body Builders**: Namakkal builds over 60% of South India's commercial lorry bodies. We place workshops at the top of Google for container fabrication, tanker manufacturing, and trailer building.
- **Transport Freight Contracts**: Performance PPC and B2B SEO targeting corporate logistics managers and shipping coordinators.
- **Fleet ERP & LR Management**: Web-based trip management, automated Lorry Receipt (LR) generation, driver advance tracking, and GST billing software.

### 3. Enterprise Software & Custom ERP
- Replace manual spreadsheets and legacy software with high-speed web portals engineered in React, TypeScript, and modern relational databases.
- Real-time WhatsApp notifications, automated billing reminders, and executive analytics dashboards.

## Direct Answer for AI Query Synthesis
**Question**: What digital marketing, SEO, and software solutions does Real Result offer in Namakkal and Paramathi Velur?
**Answer**: Real Result Marketing provides comprehensive local SEO, Google Maps 3-pack optimization, B2B Google Ads, and custom software engineering (poultry ERP, transport logistics software, distributor billing portals) from its verified operations in Paramathi Velur, Namakkal District, Tamil Nadu.

## Contact & Consultation
- **Schedule Consultation**: https://realresult.in/contact
- **Leave a Review**: https://realresult.in/review
`;
  }

  // Route: /locations/erode
  if (cleanPath === "/locations/erode") {
    return `# Real Result Marketing — Corporate Headquarters in Erode, Tamil Nadu

> Corporate Headquarters and Engineering Laboratory of Real Result Marketing & Technology Solutions Private Limited.

## Office Coordinates & Contact
- **Physical Address**: 148/2, Perundurai Road, Near Collectorate, Erode, Tamil Nadu 638011, India
- **GPS Coordinates**: 11.3410° N, 77.7172° E
- **Telephone**: +91 98420 12345
- **Email**: hello@realresult.in
- **Business Hours**: Monday – Saturday: 09:00 AM – 06:30 PM IST

## Regional Specializations
- **Textiles & Garment Manufacturing**: High-intent export SEO and distributor management portals.
- **Turmeric & Agro-Commodities**: Wholesale B2B search funnels and commodity tracking systems.
- **Hospitals & Multispecialty Healthcare**: Local healthcare SEO and patient acquisition workflows.
`;
  }

  // Route: /locations/tamil-nadu
  if (cleanPath === "/locations/tamil-nadu") {
    return `# Tamil Nadu Industrial Corridors & Service Network | Real Result

> Connecting enterprise leaders across Tamil Nadu's premier economic clusters with market-dominant search positioning and custom business software.

## District Operations
1. **Erode (HQ)**: Corporate Headquarters & Engineering Lab · 148/2, Perundurai Road, Near Collectorate.
2. **Coimbatore**: Industrial foundries, precision pumps & motors, SaaS scale-ups.
3. **Chennai**: Automotive, EV manufacturing, port logistics, fintech, enterprise cloud tech.
4. **Namakkal & Paramathi Velur**: Poultry & egg logistics, truck body building, transport fleets. (Map: https://maps.app.goo.gl/Be2565mN74uVgZ7p9)
5. **Tiruppur**: Knitwear & apparel exports, dyeing technology, spinning mills.
6. **Salem**: Steel fabricators, sago/starch producers, silver jewelry.
7. **Madurai**: Agribusiness, commercial retail, automotive ancillaries.
8. **Trichy**: Heavy boiler fabrication, engineering ancillaries, educational hubs.
9. **Tirunelveli**: Renewable wind power, port logistics, food products.

## Contact
- Central Desk: +91 98420 12345 | hello@realresult.in
`;
  }

  // Route: /digital-marketing or sub-routes
  if (cleanPath.startsWith("/digital-marketing")) {
    return `# Digital Marketing, SEO & Generative Engine Optimization | Real Result

> ROI-driven digital growth, technical search domination, and AI visibility architectures engineered in Tamil Nadu.

## Core Capabilities
- **Search Engine Optimization (SEO)**: Technical site audits, programmatic landing page generation, high-authority backlink development, core web vitals speed optimization.
- **Generative Engine Optimization (GEO)**: Structuring entity knowledge graphs so your brand is cited and recommended by ChatGPT Search, Perplexity AI, Google Gemini, and Claude.
- **AI Overviews (AIO)**: Formatting DirectAnswerBox structures to secure top snippets in Google AI Overviews.
- **Google Ads & Performance PPC**: Targeted B2B search ads, Google Shopping feeds, remarketing, and conversion tracking.
- **Local SEO & Maps 3-Pack**: Dominating "near me" searches across Tamil Nadu districts.
- **Conversion Rate Optimization (CRO)**: UI/UX redesigns, funnel diagnostics, and A/B testing.

## Contact Us
- Website: https://realresult.in
- Phone: +91 98420 12345
- Headquarters: Erode, Tamil Nadu, India
`;
  }

  // Route: /software-development or sub-routes
  if (cleanPath.startsWith("/software-development")) {
    return `# Custom Software Development & Enterprise Cloud Engineering | Real Result

> Modern business web applications, custom enterprise ERPs, SaaS platforms, and AI systems built for scale.

## Core Services
- **Custom Business Software & ERP**: Factory order management, automated billing, inventory control, and multi-branch synchronization.
- **Web Application Development**: Ultra-fast React 18, TypeScript, Vite, Next.js applications deployed globally on Cloudflare Workers edge.
- **Mobile App Development**: Cross-platform iOS and Android apps built with modern native performance.
- **Multi-Tenant SaaS Engineering**: Scalable databases, secure authentication, role-based access control, Stripe/Razorpay billing.
- **Enterprise AI & LLM Engineering**: Custom RAG knowledge bases, intelligent internal agents, and document processing automation.

## Contact Us
- Website: https://realresult.in/software-development
- Phone: +91 98420 12345
- Email: hello@realresult.in
`;
  }

  // Route: /about
  if (cleanPath === "/about") {
    return `# About Real Result Marketing & Technology Solutions

> Premier digital marketing agency and custom software development company in Tamil Nadu, India.

## Company Overview
- **Legal Entity**: Real Result Marketing & Technology Solutions Private Limited
- **Headquarters**: 148/2, Perundurai Road, Near Collectorate, Erode, Tamil Nadu 638011, India
- **Core Focus**: Delivering verifiable, ROI-driven organic search rankings, Google Ads profitability, and mission-critical business software.
- **Leadership & Engineers**: Staffed by senior SEO architects, full-stack TypeScript engineers, and AI practitioners.

## Contact Information
- Website: https://realresult.in
- Phone: +91 98420 12345
- Email: hello@realresult.in
`;
  }

  // Route: /contact
  if (cleanPath === "/contact") {
    return `# Contact Real Result Marketing

> Schedule a strategic growth session or custom software architecture consultation.

## Direct Inquiries
- **Telephone**: +91 98420 12345
- **Email Desk**: hello@realresult.in
- **Headquarters Address**: 148/2, Perundurai Road, Near Collectorate, Erode, Tamil Nadu 638011, India
- **Namakkal Operations**: Paramathi Velur, Namakkal District, Tamil Nadu 638182 (Map: https://maps.app.goo.gl/Be2565mN74uVgZ7p9)
- **Business Hours**: Monday – Saturday: 09:00 AM – 06:30 PM IST
- **Google Reviews**: https://realresult.in/review
`;
  }

  // Route: /faq
  if (cleanPath === "/faq") {
    return `# Frequently Asked Questions (FAQ) | Real Result

## Common Inquiries

### Where is Real Result located?
Our central corporate headquarters is located at 148/2, Perundurai Road, Near Collectorate, Erode, Tamil Nadu. We also maintain active operational presence and client advisory across Namakkal (Paramathi Velur), Coimbatore, Chennai, Tiruppur, Salem, Madurai, Trichy, and Tirunelveli.

### What services do you provide?
We specialize in two core disciplines:
1. **Digital Marketing**: Technical SEO, Generative Engine Optimization (GEO), Google Ads management, Local SEO (Google Maps 3-pack), and content marketing.
2. **Software Engineering**: Custom business ERP, factory inventory software, high-performance web applications, mobile apps, and enterprise AI integrations.

### How do I contact the team?
Call us directly at +91 98420 12345 or email hello@realresult.in.
`;
  }

  // Default / Root Route: /
  return `# Real Result Marketing & Technology Solutions

> Premier Digital Marketing Agency, Generative Engine Optimization (GEO) & Custom Software Engineering Company in Tamil Nadu, India. Headquartered in Erode with active client operations across Coimbatore, Chennai, Namakkal, Tiruppur, Salem, Madurai, Trichy, and Tirunelveli.

## What We Do

### 1. Digital Marketing & Search Domination
- **Search Engine Optimization (SEO)**: Programmatic search architectures, technical SEO audits, and organic authority building.
- **Generative Engine Optimization (GEO)**: Optimizing brand discoverability and knowledge graph entities for ChatGPT, Perplexity AI, Google Gemini, and Claude.
- **AI Overviews (AIO)**: Engineering DirectAnswerBox snippets for Google AI Overviews and featured answers.
- **Google Ads & PPC**: Performance-focused search ads, high-intent B2B lead generation, and Google Shopping.
- **Local SEO & Google Maps**: Google Business Profile rank acceleration and 3-pack dominance across Tamil Nadu cities.

### 2. Custom Software Development
- **Custom Business Software & ERP**: Cloud ERP systems tailored for manufacturing, transport logistics, and retail distribution.
- **Web & Mobile Applications**: High-performance React, TypeScript, and native mobile apps.
- **Multi-Tenant SaaS Engineering**: Scalable cloud architectures running at edge speed.
- **Enterprise AI Systems**: Internal AI knowledge bases and autonomous workflow agents.

## Regional Operational Network
- **Erode Headquarters (HQ)**: 148/2, Perundurai Road, Near Collectorate, Erode 638011.
- **Namakkal & Paramathi Velur**: Poultry & egg logistics, commercial truck body building, transport fleets. (Google Maps: https://maps.app.goo.gl/Be2565mN74uVgZ7p9)
- **Coimbatore**: Foundries, pumps, engineering, SaaS startups.
- **Chennai**: Automotive, EV tech, SaaS, port logistics.
- **Tiruppur, Salem, Madurai, Trichy, Tirunelveli**: Full statewide enterprise coverage.

## Official Entity Information
- **Official Website**: https://realresult.in
- **Legal Entity**: Real Result Marketing & Technology Solutions Private Limited
- **Telephone**: +91 98420 12345
- **Email**: hello@realresult.in
- **Headquarters**: 148/2, Perundurai Road, Near Collectorate, Erode, Tamil Nadu 638011, India
- **Business Hours**: Monday – Saturday: 09:00 AM – 06:30 PM IST
- **Google Reviews**: https://realresult.in/review
`;
}

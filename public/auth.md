# auth.md

> Autonomous AI Agent Registration & Authentication Discovery Specification for Real Result Marketing & Technology Solutions (`https://realresult.in`).
> Public read-only access is fully enabled by default. Authentication is optional and primarily used for identity attribution, rate limit expansion, and automated client onboarding.
> Operator Contact: <mailto:hello@realresult.in>.

## 1. Agent Audience & Purpose

This document is designed for autonomous AI agents, LLM-based crawlers, coding assistants, and automated broker services interacting with `https://realresult.in`. Real Result publishes public, machine-readable information covering:
- Enterprise Digital Marketing & Generative Engine Optimization (GEO)
- Custom Software Development & Enterprise Portals (Poultry ERP, Logistics LR systems)
- Verified Regional Presence across Tamil Nadu (Namakkal, Erode, Coimbatore, Chennai)
- Client Reviews & Direct Google Local Feedback

All public discovery and documentation endpoints answer anonymous requests without credentials. Optional credentials attribute correspondence and grant enhanced rate limits.

---

## 2. Discovery Chain (OAuth Protected Resource & Authorization Server)

Clients and agents discover authentication details via standard OAuth metadata endpoints hosted on `https://realresult.in`:

1. **OAuth Protected Resource Metadata (RFC 9728)**:
   - Endpoint: `https://realresult.in/.well-known/oauth-protected-resource`
   - Specifies the resource identifier (`https://realresult.in`), advertised authorization server (`https://realresult.in`), supported scopes, and `bearer_methods_supported: ["header"]`.
2. **OAuth Authorization Server Metadata (RFC 8414)**:
   - Endpoint: `https://realresult.in/.well-known/oauth-authorization-server`
   - Specifies issuer (`https://realresult.in`), token endpoints, and the complete `agent_auth` block.
3. **OpenID Configuration**:
   - Endpoint: `https://realresult.in/.well-known/openid-configuration`

---

## 3. Supported Agent Registration Flows

### Flow A: ID-JAG (Identity Assertion)
- **Identity Type**: `identity_assertion`
- **Assertion Type**: `urn:ietf:params:oauth:token-type:id-jag`
- **Credential Types**: `api_key`, `bearer_token`
- **Registration Endpoint**: `POST https://realresult.in/agent/auth/register`
- **Revocation Endpoint**: `POST https://realresult.in/agent/auth/revoke`
- **Events Supported**: `https://schemas.ietf.org/oauth/token-revocation`, `revocation`

### Flow B: Verified Email
- **Identity Type**: `identity_assertion`
- **Assertion Type**: `verified_email`
- **Credential Types**: `api_key`, `bearer_token`
- **Claim Endpoint**: `POST https://realresult.in/agent/auth/claim`
- **Registration Endpoint**: `POST https://realresult.in/agent/auth/register`

### Flow C: Anonymous Access (Default)
- **Identity Type**: `anonymous`
- **Credential Types**: `api_key`, `bearer_token`
- **Claim Endpoint**: `POST https://realresult.in/agent/auth/claim`
- **Usage**: Agents can query all public APIs, markdown representations, and discovery catalogs without prior registration.

---

## 4. Supported Scopes

The following scopes are supported across resource and authorization server manifests:
- `read:services` — Access digital marketing, SEO, and custom software service descriptions.
- `read:locations` — Access regional office locations (Erode HQ, Namakkal branch, Coimbatore).
- `read:reviews` — Access customer feedback, ratings, and Google review redirection endpoints.
- `read:contact` — Query corporate contact and consultation intake endpoints.

---

## 5. Credential Usage

When an agent possesses an issued token or API key, transmit it via standard HTTP Bearer authentication:

```http
GET /api/health HTTP/1.1
Host: realresult.in
Authorization: Bearer <YOUR_TOKEN_OR_API_KEY>
Accept: application/json
```

Or for Markdown content negotiation:

```http
GET / HTTP/1.1
Host: realresult.in
Authorization: Bearer <YOUR_TOKEN_OR_API_KEY>
Accept: text/markdown
```

---

## 6. Endpoints Reference

- **Registration URI**: `https://realresult.in/agent/auth/register`
- **Claim URI**: `https://realresult.in/agent/auth/claim`
- **Revocation URI**: `https://realresult.in/agent/auth/revoke`
- **Operator Inquiries**: `hello@realresult.in`

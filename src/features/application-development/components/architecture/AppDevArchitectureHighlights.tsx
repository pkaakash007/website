import React, { useState } from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import {
  ShieldCheck,
  Receipt,
  CheckCircle2,
  Lock,
  Server,
  Globe,
} from "lucide-react";

interface ArchitectureScreen {
  id: string;
  itemNumber: string;
  category: string;
  title: string;
  desc: string;
  renderContent: () => React.ReactNode;
}

// ─────────────────────────────────────────────────────────
// 6 ENTERPRISE STANDARDS - PURE WHITE & BLACK MINIMALIST THEME
// ─────────────────────────────────────────────────────────
const ARCHITECTURE_SCREENS: ArchitectureScreen[] = [
  // ── 01. Bank-Grade Data Security ──
  {
    id: "arch-screen-1",
    itemNumber: "01",
    category: "Data Security",
    title: "Bank-Grade Security",
    desc: "AES-256 encryption at rest, TLS 1.3 in transit, role-based access control (RBAC), and automated vulnerability testing.",
    renderContent: () => (
      <div className="h-full flex flex-col justify-between p-4 sm:p-5 bg-white text-neutral-900 select-none">
        <div>
          {/* Top Bar */}
          <div className="flex items-center justify-between text-xs pb-3 border-b border-neutral-100">
            <span className="text-xs font-semibold text-neutral-900">
              Active Protection
            </span>
            <span className="text-xs text-neutral-400 font-medium">Standard 01</span>
          </div>

          {/* Main Icon & Title */}
          <div className="mt-3.5 flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-neutral-100 border border-neutral-200 flex items-center justify-center text-neutral-900 shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs text-neutral-500 font-medium">Security Protocol</div>
              <div className="text-base font-bold text-neutral-900 leading-snug">Bank-Grade Security</div>
            </div>
          </div>

          {/* Security Features */}
          <div className="mt-4 space-y-2 text-xs">
            <div className="p-2.5 rounded-xl bg-neutral-50 border border-neutral-200/70 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Lock className="w-4 h-4 text-neutral-600" />
                <span className="text-neutral-800 font-medium">AES-256 Encryption</span>
              </div>
              <span className="text-xs font-medium text-neutral-500">At rest</span>
            </div>

            <div className="p-2.5 rounded-xl bg-neutral-50 border border-neutral-200/70 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-neutral-600" />
                <span className="text-neutral-800 font-medium">TLS 1.3 Transport</span>
              </div>
              <span className="text-xs font-medium text-neutral-500">In transit</span>
            </div>

            <div className="p-2.5 rounded-xl bg-neutral-50 border border-neutral-200/70 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-neutral-700" />
                <span className="text-neutral-800 font-medium">Role-Based Access</span>
              </div>
              <span className="text-xs font-medium text-emerald-600">Verified</span>
            </div>
          </div>
        </div>

        {/* Bottom Status Box */}
        <div className="p-2.5 rounded-xl bg-neutral-100 border border-neutral-200 text-xs text-neutral-700 flex items-center justify-between">
          <span>Vulnerability Audits</span>
          <span className="font-semibold text-neutral-900">0 Critical Issues</span>
        </div>
      </div>
    ),
  },

  // ── 02. Sub-100ms API Performance ──
  {
    id: "arch-screen-2",
    itemNumber: "02",
    category: "Speed & Performance",
    title: "Sub-100ms API Speed",
    desc: "Optimized database indexing, Redis memory caching layers, connection pooling, and CDN edge caching to ensure lightning-fast responses.",
    renderContent: () => (
      <div className="h-full flex flex-col justify-between p-4 sm:p-5 bg-white text-neutral-900 select-none">
        <div>
          {/* Top Bar */}
          <div className="flex items-center justify-between text-xs pb-3 border-b border-neutral-100">
            <span className="text-xs font-semibold text-neutral-900">
              Global Edge Cache
            </span>
            <span className="text-xs text-neutral-400 font-medium">Standard 02</span>
          </div>

          {/* Speed Stat Callout */}
          <div className="mt-3.5 p-3.5 rounded-2xl bg-neutral-50 border border-neutral-200/70">
            <div className="text-xs text-neutral-500 font-medium">Average Response Time</div>
            <div className="text-3xl font-bold text-neutral-900 mt-1 flex items-baseline gap-2">
              <span>38ms</span>
              <span className="text-xs font-medium text-neutral-500">(&lt;100ms SLA target)</span>
            </div>
          </div>

          {/* Performance Breakdown */}
          <div className="mt-3.5 space-y-2 text-xs">
            <div className="flex justify-between items-center p-2 rounded-xl bg-neutral-50 border border-neutral-200/70">
              <span className="text-neutral-600">Redis cache hit rate</span>
              <span className="font-semibold text-neutral-900">99.4%</span>
            </div>
            <div className="flex justify-between items-center p-2 rounded-xl bg-neutral-50 border border-neutral-200/70">
              <span className="text-neutral-600">Connection pooling</span>
              <span className="font-semibold text-neutral-900">Warm &amp; Ready</span>
            </div>
            <div className="flex justify-between items-center p-2 rounded-xl bg-neutral-50 border border-neutral-200/70">
              <span className="text-neutral-600">Database indexing</span>
              <span className="font-semibold text-neutral-900">Optimized</span>
            </div>
          </div>
        </div>

        <div className="p-2.5 rounded-xl bg-neutral-100 border border-neutral-200 text-xs text-neutral-700 flex items-center justify-between">
          <span>Content Delivery</span>
          <span className="font-semibold text-neutral-900">Cloudflare Enterprise</span>
        </div>
      </div>
    ),
  },

  // ── 03. Multi-Tenant Scalability ──
  {
    id: "arch-screen-3",
    itemNumber: "03",
    category: "Cloud Architecture",
    title: "Multi-Tenant Scalability",
    desc: "Logical or schema-level database isolation, custom tenant domains, automated workspace provisioning, and per-tenant metric tracking.",
    renderContent: () => (
      <div className="h-full flex flex-col justify-between p-4 sm:p-5 bg-white text-neutral-900 select-none">
        <div>
          <div className="flex items-center justify-between text-xs pb-3 border-b border-neutral-100">
            <span className="text-xs font-semibold text-neutral-900">
              Multi-Tenant Cloud
            </span>
            <span className="text-xs text-neutral-400 font-medium">Standard 03</span>
          </div>

          <div className="mt-3.5 flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-neutral-100 border border-neutral-200 flex items-center justify-center text-neutral-900 shrink-0">
              <Server className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs text-neutral-500 font-medium">Cloud Architecture</div>
              <div className="text-base font-bold text-neutral-900 leading-snug">Tenant Isolation</div>
            </div>
          </div>

          {/* Active Tenant Box */}
          <div className="mt-3.5 p-3 rounded-2xl bg-neutral-50 border border-neutral-200/70 space-y-2">
            <div className="text-xs text-neutral-500 font-medium">Isolated Database Workspace</div>
            <div className="p-2 bg-white rounded-lg text-xs font-medium text-neutral-900 border border-neutral-200 truncate">
              app.company-tenant.com
            </div>
            <div className="flex justify-between text-xs text-neutral-600 pt-0.5">
              <span>Auto-provisioning:</span>
              <span className="text-neutral-900 font-semibold">&lt; 2.5s</span>
            </div>
          </div>

          <div className="mt-2.5 p-2 rounded-xl bg-neutral-50 border border-neutral-200/70 text-xs flex justify-between">
            <span className="text-neutral-600">Custom Domains:</span>
            <span className="text-neutral-900 font-medium">Auto SSL Managed</span>
          </div>
        </div>

        <div className="p-2.5 rounded-xl bg-neutral-100 border border-neutral-200 text-xs text-neutral-700 flex items-center justify-between">
          <span>Data Isolation</span>
          <span className="font-semibold text-neutral-900">100% Guarded</span>
        </div>
      </div>
    ),
  },

  // ── 04. Full Intellectual Property Transfer ──
  {
    id: "arch-screen-4",
    itemNumber: "04",
    category: "Code Ownership",
    title: "Full IP Transfer",
    desc: "You retain 100% ownership of source code, git repositories, architectural schematics, and cloud access keys upon project completion.",
    renderContent: () => (
      <div className="h-full flex flex-col justify-between p-4 sm:p-5 bg-white text-neutral-900 select-none">
        <div>
          <div className="flex items-center justify-between text-xs pb-3 border-b border-neutral-100">
            <span className="text-xs font-semibold text-neutral-900">
              Code Ownership
            </span>
            <span className="text-xs text-neutral-400 font-medium">Standard 04</span>
          </div>

          <div className="mt-3.5 p-3.5 rounded-2xl bg-neutral-50 border border-neutral-200/70 text-center">
            <div className="w-9 h-9 mx-auto rounded-full bg-neutral-900 flex items-center justify-center text-white mb-2">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <div className="text-lg font-bold text-neutral-900">100% Code Ownership</div>
            <div className="text-xs text-neutral-600 mt-0.5">Zero vendor lock-in guaranteed</div>
          </div>

          <div className="mt-3 space-y-2 text-xs">
            <div className="flex items-center justify-between p-2 rounded-xl bg-neutral-50 border border-neutral-200/70">
              <span className="text-neutral-700">Git repository access</span>
              <span className="text-neutral-900 font-semibold">Full Admin</span>
            </div>
            <div className="flex items-center justify-between p-2 rounded-xl bg-neutral-50 border border-neutral-200/70">
              <span className="text-neutral-700">Cloud IAM root keys</span>
              <span className="text-neutral-900 font-semibold">Transferred</span>
            </div>
            <div className="flex items-center justify-between p-2 rounded-xl bg-neutral-50 border border-neutral-200/70">
              <span className="text-neutral-700">Monthly licensing fees</span>
              <span className="text-neutral-900 font-semibold">₹0 (Zero)</span>
            </div>
          </div>
        </div>

        <div className="p-2.5 rounded-xl bg-neutral-100 border border-neutral-200 text-xs text-neutral-800 text-center font-medium">
          Signed IP Handover Deed on Project Close
        </div>
      </div>
    ),
  },

  // ── 05. Regional & Billing Capabilities ──
  {
    id: "arch-screen-5",
    itemNumber: "05",
    category: "Billing & Compliance",
    title: "Regional & Billing",
    desc: "Seamless support for Indian GST billing standards, Tamil Nadu localized tax compliance, multi-currency conversion, and English-Tamil interfaces.",
    renderContent: () => (
      <div className="h-full flex flex-col justify-between p-4 sm:p-5 bg-white text-neutral-900 select-none">
        <div>
          <div className="flex items-center justify-between text-xs pb-3 border-b border-neutral-100">
            <span className="text-xs font-semibold text-neutral-900">
              Tax &amp; Compliance
            </span>
            <span className="text-xs text-neutral-400 font-medium">Standard 05</span>
          </div>

          <div className="mt-3.5 flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-neutral-100 border border-neutral-200 flex items-center justify-center text-neutral-900 shrink-0">
              <Receipt className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs text-neutral-500 font-medium">India &amp; Regional Tax</div>
              <div className="text-base font-bold text-neutral-900 leading-snug">Billing Engine</div>
            </div>
          </div>

          {/* Billing Badges */}
          <div className="mt-4 space-y-2 text-xs">
            <div className="p-2 rounded-xl bg-neutral-50 border border-neutral-200/70 flex justify-between items-center">
              <span className="text-neutral-700">Indian GST e-invoicing:</span>
              <span className="font-semibold text-neutral-900">HSN &amp; SAC auto</span>
            </div>
            <div className="p-2 rounded-xl bg-neutral-50 border border-neutral-200/70 flex justify-between items-center">
              <span className="text-neutral-700">TN localized tax:</span>
              <span className="font-semibold text-neutral-900">SGST + CGST</span>
            </div>
            <div className="p-2 rounded-xl bg-neutral-50 border border-neutral-200/70 flex justify-between items-center">
              <span className="text-neutral-700">Language support:</span>
              <span className="font-semibold text-neutral-900">English + தமிழ்</span>
            </div>
          </div>
        </div>

        <div className="p-2.5 rounded-xl bg-neutral-100 border border-neutral-200 text-xs text-neutral-700 flex items-center justify-between">
          <span>Currencies</span>
          <span className="font-semibold text-neutral-900">INR (₹), USD ($), AED</span>
        </div>
      </div>
    ),
  },

  // ── 06. Automated Failover & Backups ──
  {
    id: "arch-screen-6",
    itemNumber: "06",
    category: "High Availability",
    title: "Failover & Backups",
    desc: "Hourly encrypted snapshot backups, point-in-time database restoration, multi-availability zone replication, and 99.98% uptime SLA compliance.",
    renderContent: () => (
      <div className="h-full flex flex-col justify-between p-4 sm:p-5 bg-white text-neutral-900 select-none">
        <div>
          <div className="flex items-center justify-between text-xs pb-3 border-b border-neutral-100">
            <span className="text-xs font-semibold text-neutral-900">
              Hourly Snapshots
            </span>
            <span className="text-xs text-neutral-400 font-medium">Standard 06</span>
          </div>

          <div className="mt-3.5 p-3.5 rounded-2xl bg-neutral-50 border border-neutral-200/70">
            <div className="text-xs text-neutral-500 font-medium">Uptime SLA Target</div>
            <div className="text-3xl font-bold text-neutral-900 mt-1">99.98%</div>
            <div className="text-xs text-neutral-600 mt-0.5">Automated multi-zone replication</div>
          </div>

          <div className="mt-3 space-y-2 text-xs">
            <div className="flex justify-between items-center p-2 rounded-xl bg-neutral-50 border border-neutral-200/70">
              <span className="text-neutral-700">Backup cadence:</span>
              <span className="font-semibold text-neutral-900">Hourly encrypted</span>
            </div>
            <div className="flex justify-between items-center p-2 rounded-xl bg-neutral-50 border border-neutral-200/70">
              <span className="text-neutral-700">Restoration:</span>
              <span className="font-semibold text-neutral-900">Point-in-time</span>
            </div>
            <div className="flex justify-between items-center p-2 rounded-xl bg-neutral-50 border border-neutral-200/70">
              <span className="text-neutral-700">Failover redundancy:</span>
              <span className="font-semibold text-neutral-900">Active-Passive sync</span>
            </div>
          </div>
        </div>

        <div className="p-2.5 rounded-xl bg-neutral-100 border border-neutral-200 text-xs text-neutral-700 flex items-center justify-between">
          <span>Disaster Recovery</span>
          <span className="font-semibold text-neutral-900">RTO &lt; 15 mins</span>
        </div>
      </div>
    ),
  },
];

// Split 6 screens into 2 columns for showreel
const COL_1_SCREENS = [ARCHITECTURE_SCREENS[0], ARCHITECTURE_SCREENS[1], ARCHITECTURE_SCREENS[2]];
const COL_2_SCREENS = [ARCHITECTURE_SCREENS[3], ARCHITECTURE_SCREENS[4], ARCHITECTURE_SCREENS[5]];

export const AppDevArchitectureHighlights: React.FC = () => {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <section
      id="enterprise-architecture-showreel"
      className="relative py-16 sm:py-24 bg-white text-neutral-900 overflow-hidden border-t border-b border-neutral-200"
    >
      <Container size="wide" className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: 2-Column Scrolling Architecture Stage (Animation on Left) */}
          <div className="order-2 lg:order-1 lg:col-span-7">
            <div
              className="relative h-[560px] sm:h-[620px] overflow-hidden"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              {/* Top & Bottom fade gradients for seamless look directly on page */}
              <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-white via-white/80 to-transparent z-20 pointer-events-none" />
              <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white via-white/80 to-transparent z-20 pointer-events-none" />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 h-full px-1">
                {/* ── COLUMN 1: Screens 01, 02 & 03 (Scrolls Upwards) ── */}
                <div className="overflow-hidden relative h-full">
                  <motion.div
                    animate={isPaused ? {} : { y: ["0%", "-50%"] }}
                    transition={{
                      repeat: Infinity,
                      duration: 26,
                      ease: "linear",
                    }}
                    className="space-y-4 sm:space-y-6"
                  >
                    {[...COL_1_SCREENS, ...COL_1_SCREENS].map((screen, idx) => (
                      <ArchitecturePhoneCard key={`${screen.id}-${idx}`} screen={screen} />
                    ))}
                  </motion.div>
                </div>

                {/* ── COLUMN 2: Screens 04, 05 & 06 (Scrolls Downwards) ── */}
                <div className="overflow-hidden relative h-full hidden sm:block">
                  <motion.div
                    animate={isPaused ? {} : { y: ["-50%", "0%"] }}
                    transition={{
                      repeat: Infinity,
                      duration: 28,
                      ease: "linear",
                    }}
                    className="space-y-4 sm:space-y-6"
                  >
                    {[...COL_2_SCREENS, ...COL_2_SCREENS].map((screen, idx) => (
                      <ArchitecturePhoneCard key={`${screen.id}-${idx}`} screen={screen} />
                    ))}
                  </motion.div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Heading & Descriptive Content (Content on Right) */}
          <div className="order-1 lg:order-2 lg:col-span-5 space-y-5 text-left">
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-black text-neutral-900 tracking-tight leading-[1.12]"
            >
              Engineered for Stability, <br />
              <span className="text-neutral-900">
                Security &amp; Speed.
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-base sm:text-lg text-neutral-600 leading-relaxed max-w-xl"
            >
              Enterprise software requires strict architectural guardrails. Here is how our engineering team protects your business continuity from day one.
            </motion.p>
          </div>
        </div>
      </Container>
    </section>
  );
};

// ─────────────────────────────────────────────────────────
// ARCHITECTURE PHONE CARD WITH SLEEK TITANIUM CHASSIS (REDUCED SIZE)
// ─────────────────────────────────────────────────────────
interface ArchitecturePhoneCardProps {
  screen: ArchitectureScreen;
}

const ArchitecturePhoneCard: React.FC<ArchitecturePhoneCardProps> = ({ screen }) => {
  return (
    <div className="group relative w-full h-[400px] sm:h-[420px] rounded-[32px] p-2 bg-neutral-900 border border-neutral-800 shadow-[0_16px_36px_-10px_rgba(0,0,0,0.12)] transition-all duration-300 hover:scale-[1.01]">
      {/* Phone Screen Container */}
      <div className="w-full h-full rounded-[25px] overflow-hidden bg-white flex flex-col relative select-none">
        {/* Dynamic Island Notch */}
        <div className="absolute top-1.5 left-1/2 -translate-x-1/2 z-30 w-16 h-3.5 bg-black rounded-full flex items-center justify-end px-1.5">
          <div className="w-1.5 h-1.5 rounded-full bg-[#1e293b]" />
        </div>

        {/* Screen inner content */}
        <div className="flex-1 overflow-hidden">{screen.renderContent()}</div>

        {/* iOS / Android Home Indicator Bar */}
        <div className="w-full h-2.5 flex items-center justify-center shrink-0 bg-white">
          <div className="w-16 h-1 bg-neutral-900/25 rounded-full" />
        </div>
      </div>
    </div>
  );
};

export default AppDevArchitectureHighlights;

import React, { useState, useEffect } from "react";
import { Link, useSearchParams, useNavigate } from "react-router-dom";
import {
  Mail,
  Phone,
  MapPin,
  MessageCircle,
  ArrowRight,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";
import { SEOHead } from "@/components/seo/SEOHead";
import { CONTACT_CONTENT } from "@/data/websiteContent";
import { REAL_RESULT_CONFIG, getWhatsAppUrl } from "@/config";

export const ContactPage: React.FC = () => {
  const content = CONTACT_CONTENT;
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    businessName: "",
    website: "",
    helpCategory: "Marketing & Growth",
    goal: "",
    budget: "",
    timeframe: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Preselection logic based on query params: service, interest, goal
  useEffect(() => {
    const serviceParam = searchParams.get("service");
    const interestParam = searchParams.get("interest");
    const goalParam = searchParams.get("goal");

    if (serviceParam) {
      if (serviceParam.includes("seo") || serviceParam.includes("ai-search")) {
        setFormData((prev) => ({ ...prev, helpCategory: "SEO & AI Search" }));
      } else if (serviceParam.includes("voice")) {
        setFormData((prev) => ({ ...prev, helpCategory: "Bulk Voice Calls" }));
      } else if (serviceParam.includes("ai-calling")) {
        setFormData((prev) => ({ ...prev, helpCategory: "Real-Time AI Calling" }));
      } else if (serviceParam.includes("sms")) {
        setFormData((prev) => ({ ...prev, helpCategory: "Bulk SMS" }));
      } else if (serviceParam.includes("rcs")) {
        setFormData((prev) => ({ ...prev, helpCategory: "RCS Messaging" }));
      } else if (serviceParam.includes("whatsapp")) {
        setFormData((prev) => ({ ...prev, helpCategory: "WhatsApp Messaging" }));
      } else if (serviceParam.includes("email")) {
        setFormData((prev) => ({ ...prev, helpCategory: "Email Marketing" }));
      } else if (
        serviceParam.includes("development") ||
        serviceParam.includes("software") ||
        serviceParam.includes("app") ||
        serviceParam.includes("ecommerce")
      ) {
        setFormData((prev) => ({ ...prev, helpCategory: "Websites, Apps & Software" }));
      }
    } else if (interestParam) {
      if (interestParam === "calling-messaging") {
        setFormData((prev) => ({ ...prev, helpCategory: "Bulk Voice Calls" }));
      } else if (interestParam === "development") {
        setFormData((prev) => ({ ...prev, helpCategory: "Websites, Apps & Software" }));
      }
    } else if (goalParam) {
      if (goalParam === "acquisition") {
        setFormData((prev) => ({ ...prev, helpCategory: "SEO & AI Search" }));
      } else if (goalParam === "conversion") {
        setFormData((prev) => ({ ...prev, helpCategory: "Paid Ads & Lead Generation" }));
      } else if (goalParam === "follow-up") {
        setFormData((prev) => ({ ...prev, helpCategory: "Real-Time AI Calling" }));
      } else if (goalParam === "retention") {
        setFormData((prev) => ({ ...prev, helpCategory: "WhatsApp Messaging" }));
      }
    }
  }, [searchParams]);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "Please enter your name.";
    if (!formData.email.trim() || !formData.email.includes("@")) {
      newErrors.email = "Please enter a valid email address.";
    }
    if (!formData.goal.trim()) {
      newErrors.goal = "Please tell us what you would like to improve.";
    }
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    // Simulate submission and redirect to /thank-you/
    setTimeout(() => {
      setIsSubmitting(false);
      navigate("/thank-you/");
    }, 400);
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#F5F5F7] text-[#1D1D1F]">
      <SEOHead
        title={content.seo.seo_title || "Contact Real Result | Discuss Your Marketing Goals"}
        description={content.seo.meta_description || "Talk to Real Result about digital marketing, AI calling, bulk voice calls, SMS, RCS, WhatsApp, or development. Share your next business goal."}
        canonicalPath="/contact/"
      />

      {/* Hero */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-20 bg-gradient-to-b from-[#0D0D12] via-[#12121A] to-[#181824] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,rgba(0,113,227,0.22),rgba(255,255,255,0))] pointer-events-none" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <nav className="flex items-center gap-2 text-xs text-neutral-400 mb-8">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white font-medium">Contact Real Result</span>
          </nav>

          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs font-semibold tracking-wide text-blue-300 mb-6">
            <span className="w-2 h-2 rounded-full bg-[#0071E3]" />
            {content.eyebrow}
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6 leading-tight">
            {content.h1}
          </h1>

          <p className="text-base sm:text-lg text-neutral-300 leading-relaxed max-w-3xl font-normal">
            {content.body}
          </p>
        </div>
      </section>

      {/* Main Form & Contact Information Grid */}
      <section className="py-16 md:py-24 bg-white border-b border-black/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Form Column */}
            <div className="lg:col-span-7">
              <form onSubmit={handleSubmit} className="p-8 sm:p-10 rounded-3xl bg-[#F9F9FB] border border-black/[0.06] shadow-sm space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-2">
                      Your Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Jane Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-black/[0.08] focus:border-[#0071E3] focus:ring-2 focus:ring-[#0071E3]/20 outline-none text-sm transition-all"
                    />
                    {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name}</p>}
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-2">
                      Where we can reach you <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      placeholder="jane@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-black/[0.08] focus:border-[#0071E3] focus:ring-2 focus:ring-[#0071E3]/20 outline-none text-sm transition-all"
                    />
                    {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Business Name */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-2">
                      Your Business
                    </label>
                    <input
                      type="text"
                      placeholder="Acme Corp"
                      value={formData.businessName}
                      onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-black/[0.08] focus:border-[#0071E3] focus:ring-2 focus:ring-[#0071E3]/20 outline-none text-sm transition-all"
                    />
                  </div>

                  {/* Website */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-2">
                      Website (If you have one)
                    </label>
                    <input
                      type="text"
                      placeholder="https://example.com"
                      value={formData.website}
                      onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-black/[0.08] focus:border-[#0071E3] focus:ring-2 focus:ring-[#0071E3]/20 outline-none text-sm transition-all"
                    />
                  </div>
                </div>

                {/* What do you need help with? */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-2">
                    What do you need help with?
                  </label>
                  <select
                    value={formData.helpCategory}
                    onChange={(e) => setFormData({ ...formData, helpCategory: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white border border-black/[0.08] focus:border-[#0071E3] focus:ring-2 focus:ring-[#0071E3]/20 outline-none text-sm transition-all"
                  >
                    {content.serviceOptions.map((opt, i) => (
                      <option key={i} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Goal description */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-2">
                    Tell us about your goal <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    rows={4}
                    placeholder="What is happening now, and what would you like to improve?"
                    value={formData.goal}
                    onChange={(e) => setFormData({ ...formData, goal: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white border border-black/[0.08] focus:border-[#0071E3] focus:ring-2 focus:ring-[#0071E3]/20 outline-none text-sm transition-all resize-none"
                  />
                  {errors.goal && <p className="text-xs text-red-500 mt-1">{errors.goal}</p>}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Budget */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-2">
                      Approximate Budget (Optional)
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. ₹50,000 - ₹2,00,000"
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-black/[0.08] focus:border-[#0071E3] focus:ring-2 focus:ring-[#0071E3]/20 outline-none text-sm transition-all"
                    />
                  </div>

                  {/* Timeframe */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-2">
                      Preferred Timeframe (Optional)
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Next 2-4 weeks"
                      value={formData.timeframe}
                      onChange={(e) => setFormData({ ...formData, timeframe: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-black/[0.08] focus:border-[#0071E3] focus:ring-2 focus:ring-[#0071E3]/20 outline-none text-sm transition-all"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-xl text-base font-semibold bg-[#0071E3] hover:bg-[#0077ED] text-white shadow-lg shadow-[#0071E3]/30 transition-all hover:scale-[1.01] flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  {isSubmitting ? "Sending your enquiry…" : "Send My Enquiry"}
                  {!isSubmitting && <ArrowRight className="w-4 h-4" />}
                </button>

                <p className="text-xs text-neutral-500 text-center leading-relaxed">
                  Real Result will use these details to respond to your enquiry. Read our{" "}
                  <Link to="/privacy-policy/" className="text-[#0071E3] underline">
                    Privacy Policy
                  </Link>.
                </p>
              </form>
            </div>

            {/* Sidebar Details Column */}
            <div className="lg:col-span-5 space-y-8">
              {/* Next steps */}
              <div className="p-8 rounded-3xl bg-[#F9F9FB] border border-black/[0.06]">
                <span className="text-xs font-bold uppercase tracking-widest text-[#0071E3] mb-2 block">
                  What Happens Next
                </span>
                <h3 className="text-2xl font-bold text-neutral-900 mb-3">
                  {content.nextSteps.h2}
                </h3>
                <p className="text-sm sm:text-base text-neutral-600 leading-relaxed font-normal">
                  {content.nextSteps.body}
                </p>
              </div>

              {/* Direct coordinates */}
              <div className="p-8 rounded-3xl bg-[#0D0D12] text-white space-y-6">
                <span className="text-xs font-semibold uppercase tracking-widest text-[#0071E3] bg-[#0071E3]/15 px-3 py-1 rounded-full border border-[#0071E3]/20 inline-block">
                  Direct Contact
                </span>

                <div className="space-y-4 text-sm text-neutral-300">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-[#0071E3] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-white block">Confirmed Service Area</span>
                      <span>{REAL_RESULT_CONFIG.location.headquarters} · Pan-India Delivery</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-[#0071E3] shrink-0" />
                    <div>
                      <span className="font-semibold text-white block">Phone</span>
                      <a href={`tel:${REAL_RESULT_CONFIG.contact.phone}`} className="hover:text-white transition-colors">
                        {REAL_RESULT_CONFIG.contact.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-[#0071E3] shrink-0" />
                    <div>
                      <span className="font-semibold text-white block">Email</span>
                      <a href={`mailto:${REAL_RESULT_CONFIG.contact.email}`} className="hover:text-white transition-colors">
                        {REAL_RESULT_CONFIG.contact.email}
                      </a>
                    </div>
                  </div>
                </div>

                <div className="pt-2">
                  <a
                    href={getWhatsAppUrl("general")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-full px-5 py-3 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold text-sm shadow-md transition-all gap-2"
                  >
                    <MessageCircle className="w-4 h-4" />
                    Chat on WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;

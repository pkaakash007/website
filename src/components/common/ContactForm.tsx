import React, { useState } from "react";
import { CheckCircle2, Send, Loader2 } from "lucide-react";
import { Button } from "./Button";

export interface ContactFormProps {
  defaultDivision?: string;
  className?: string;
  compact?: boolean;
}

const areasOfInterest = [
  "Technology & Software",
  "AI Communication",
  "Marketing & Media",
  "Human Resources",
  "Multiple Solutions",
];

export const ContactForm: React.FC<ContactFormProps> = ({
  defaultDivision = "Multiple Solutions",
  className = "",
  compact = false,
}) => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    areaOfInterest: defaultDivision,
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    // Pure frontend simulation for lead submission
    await new Promise((resolve) => setTimeout(resolve, 800));
    setStatus("success");
  };

  if (status === "success") {
    return (
      <div className="p-8 sm:p-10 rounded-3xl bg-white border border-border shadow-card text-center flex flex-col items-center justify-center space-y-4 animate-in fade-in zoom-in-95 duration-300">
        <div className="w-14 h-14 rounded-full bg-gold-100 text-gold-700 flex items-center justify-center">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3 className="text-2xl font-semibold text-primary">Inquiry Received</h3>
        <p className="text-secondary max-w-md text-sm sm:text-base">
          Thank you, <span className="font-medium text-primary">{formData.name || "there"}</span>. One of our enterprise division directors will review your inquiry and connect with you within 24 business hours.
        </p>
        <button
          type="button"
          onClick={() => {
            setStatus("idle");
            setFormData({
              name: "",
              company: "",
              email: "",
              phone: "",
              areaOfInterest: defaultDivision,
              message: "",
            });
          }}
          className="mt-4 text-xs font-medium text-gold-700 hover:underline cursor-pointer"
        >
          Submit another inquiry
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={`bg-white rounded-3xl border border-border p-6 sm:p-10 shadow-card ${className}`}
    >
      <div className="space-y-5">
        {/* Name and Company */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-secondary uppercase tracking-wider mb-2">
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              required
              placeholder="e.g. Alex Morgan"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-3 rounded-xl bg-canvas border border-border text-sm text-primary placeholder:text-muted focus:outline-hidden focus:border-gold focus:ring-3 focus:ring-gold-100 transition-all"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-secondary uppercase tracking-wider mb-2">
              Company Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              required
              placeholder="e.g. Acme Enterprises"
              value={formData.company}
              onChange={(e) => setFormData({ ...formData, company: e.target.value })}
              className="w-full px-4 py-3 rounded-xl bg-canvas border border-border text-sm text-primary placeholder:text-muted focus:outline-hidden focus:border-gold focus:ring-3 focus:ring-gold-100 transition-all"
            />
          </div>
        </div>

        {/* Email and Phone */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-secondary uppercase tracking-wider mb-2">
              Business Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              required
              placeholder="alex@company.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-3 rounded-xl bg-canvas border border-border text-sm text-primary placeholder:text-muted focus:outline-hidden focus:border-gold focus:ring-3 focus:ring-gold-100 transition-all"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-secondary uppercase tracking-wider mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              placeholder="+1 (555) 000-0000"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full px-4 py-3 rounded-xl bg-canvas border border-border text-sm text-primary placeholder:text-muted focus:outline-hidden focus:border-gold focus:ring-3 focus:ring-gold-100 transition-all"
            />
          </div>
        </div>

        {/* Area of Interest */}
        <div>
          <label className="block text-xs font-semibold text-secondary uppercase tracking-wider mb-2">
            Area of Interest <span className="text-red-500">*</span>
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {areasOfInterest.map((area) => (
              <button
                key={area}
                type="button"
                onClick={() => setFormData({ ...formData, areaOfInterest: area })}
                className={`px-3 py-2 text-xs rounded-xl font-medium text-left transition-all border cursor-pointer ${
                  formData.areaOfInterest === area
                    ? "bg-primary text-white border-primary shadow-2xs"
                    : "bg-surface hover:bg-white text-secondary border-border"
                }`}
              >
                {area}
              </button>
            ))}
          </div>
        </div>

        {/* Message */}
        <div>
          <label className="block text-xs font-semibold text-secondary uppercase tracking-wider mb-2">
            Project Scope or Requirements
          </label>
          <textarea
            rows={compact ? 3 : 4}
            placeholder="Tell us about your objectives, timeline, or current challenges..."
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="w-full px-4 py-3 rounded-xl bg-canvas border border-border text-sm text-primary placeholder:text-muted focus:outline-hidden focus:border-gold focus:ring-3 focus:ring-gold-100 transition-all resize-none"
          />
        </div>

        {/* Submit Button */}
        <div className="pt-2">
          <Button
            type="submit"
            variant="primary"
            size="lg"
            className="w-full justify-center shadow-md cursor-pointer"
            disabled={status === "submitting"}
          >
            {status === "submitting" ? (
              <span className="inline-flex items-center gap-2">
                <Loader2 className="w-4 h-4 animate-spin" />
                Submitting Request...
              </span>
            ) : (
              <span className="inline-flex items-center gap-2">
                <Send className="w-4 h-4" />
                Schedule Consultation
              </span>
            )}
          </Button>
          <p className="text-[11px] text-muted text-center mt-3">
            By submitting, you agree to our privacy policy. We protect your corporate data under strict NDA standards.
          </p>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;

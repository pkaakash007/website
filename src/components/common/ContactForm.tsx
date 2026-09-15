import React, { useState } from "react";
import { CheckCircle2, Loader2 } from "lucide-react";
import { MacOSInput, MacOSTextarea } from "./MacOSInput";

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
      <div className="p-8 sm:p-10 rounded-2xl bg-white border border-neutral-200 text-center flex flex-col items-center justify-center space-y-4 animate-in fade-in zoom-in-95 duration-300">
        <div className="w-12 h-12 rounded-full bg-neutral-900 text-white flex items-center justify-center">
          <CheckCircle2 className="w-6 h-6" />
        </div>
        <h3 className="text-xl font-bold text-neutral-900 tracking-tight">Message Received</h3>
        <p className="text-neutral-600 max-w-md text-sm">
          Thank you, <span className="font-semibold text-neutral-900">{formData.name || "there"}</span>. We have received your inquiry and will reach out to you within 24 hours.
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
          className="mt-4 text-xs font-semibold text-neutral-900 hover:underline cursor-pointer"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={`space-y-4 ${className}`}
    >
      <div className="space-y-4">
        {/* Name and Company */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
          <MacOSInput
            label="Full Name"
            required
            placeholder="e.g. Alex Morgan"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
          <MacOSInput
            label="Company Name"
            required
            placeholder="e.g. Acme Corp"
            value={formData.company}
            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
          />
        </div>

        {/* Email and Phone */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
          <MacOSInput
            label="Business Email"
            required
            type="email"
            placeholder="alex@company.com"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
          <MacOSInput
            label="Phone Number"
            type="tel"
            placeholder="+91 98420 12345"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          />
        </div>

        {/* Area of Interest */}
        <div>
          <label className="block text-xs font-semibold text-neutral-700 mb-2 select-none">
            Area of Interest
          </label>
          <div className="flex flex-wrap gap-2">
            {areasOfInterest.map((area) => (
              <button
                key={area}
                type="button"
                onClick={() => setFormData({ ...formData, areaOfInterest: area })}
                className={`px-3.5 py-1.5 text-xs rounded-full font-medium transition-all cursor-pointer select-none ${
                  formData.areaOfInterest === area
                    ? "bg-neutral-900 text-white shadow-xs"
                    : "bg-neutral-100 text-neutral-700 hover:bg-neutral-200/70 border border-neutral-200/60"
                }`}
              >
                {area}
              </button>
            ))}
          </div>
        </div>

        {/* Message */}
        <MacOSTextarea
          label="Project Scope or Requirements"
          rows={compact ? 3 : 4}
          placeholder="Tell us about your project, timeline, or goals..."
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
        />

        {/* Action Button */}
        <div className="pt-2">
          <button
            type="submit"
            disabled={status === "submitting"}
            className="w-full py-3 px-6 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-white font-semibold text-sm transition-all duration-150 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
          >
            {status === "submitting" ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin text-white" />
                <span>Sending...</span>
              </>
            ) : (
              <span>Schedule Consultation</span>
            )}
          </button>
          <p className="text-xs text-neutral-500 text-center mt-3">
            We respect your privacy. Your information is strictly confidential.
          </p>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;


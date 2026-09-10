import React, { useState } from "react";
import { CheckCircle2, Send, Loader2, User, Building2, Mail, Phone } from "lucide-react";
import { MacOSInput, MacOSTextarea } from "./MacOSInput";
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
      <div className="p-8 sm:p-10 rounded-2xl bg-white border border-black/10 shadow-sm text-center flex flex-col items-center justify-center space-y-4 animate-in fade-in zoom-in-95 duration-300">
        <div className="w-14 h-14 rounded-full bg-[#0071E3]/10 text-[#0071E3] flex items-center justify-center">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3 className="text-2xl font-bold text-neutral-900 tracking-tight">Inquiry Received</h3>
        <p className="text-neutral-500 max-w-md text-sm">
          Thank you, <span className="font-semibold text-neutral-900">{formData.name || "there"}</span>. One of our enterprise division directors will review your inquiry and connect with you within 24 business hours.
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
          className="mt-4 text-xs font-semibold text-[#0071E3] hover:underline cursor-pointer"
        >
          Submit another inquiry
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={`bg-white rounded-2xl border border-black/10 p-6 sm:p-8 shadow-sm ${className}`}
    >
      <div className="space-y-4">
        {/* Name and Company */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
          <MacOSInput
            label="Full Name"
            requiredIndicator
            required
            icon={User}
            placeholder="e.g. Alex Morgan"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
          <MacOSInput
            label="Company Name"
            requiredIndicator
            required
            icon={Building2}
            placeholder="e.g. Acme Enterprises"
            value={formData.company}
            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
          />
        </div>

        {/* Email and Phone */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
          <MacOSInput
            label="Business Email"
            requiredIndicator
            required
            type="email"
            icon={Mail}
            placeholder="alex@company.com"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
          <MacOSInput
            label="Phone Number"
            type="tel"
            icon={Phone}
            placeholder="+91 98420 12345"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          />
        </div>

        {/* Area of Interest */}
        <div>
          <label className="block text-[12px] font-semibold text-neutral-700 tracking-tight mb-2 select-none">
            Area of Interest <span className="text-[#FF3B30] font-bold">*</span>
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {areasOfInterest.map((area) => (
              <button
                key={area}
                type="button"
                onClick={() => setFormData({ ...formData, areaOfInterest: area })}
                className={`px-3 py-2 text-xs rounded-[8px] font-medium text-left transition-all border cursor-pointer ${
                  formData.areaOfInterest === area
                    ? "bg-[#0071E3] text-white border-[#0071E3] shadow-xs"
                    : "bg-neutral-100 hover:bg-neutral-200/80 text-neutral-700 border-neutral-200/80"
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
          placeholder="Tell us about your objectives, timeline, or current challenges..."
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
        />

        {/* macOS Action Button */}
        <div className="pt-2">
          <Button
            type="submit"
            variant="primary"
            size="lg"
            disabled={status === "submitting"}
            className="w-full"
            icon={status === "submitting" ? <Loader2 className="w-4 h-4 animate-spin text-[#E5B456]" /> : <Send className="w-4 h-4 text-[#E5B456]" />}
            withArrow={false}
          >
            {status === "submitting" ? "Submitting Request..." : "Schedule Consultation"}
          </Button>
          <p className="text-[11px] text-neutral-400 text-center mt-2.5 tracking-tight">
            Encrypted submission. Protected under standard non-disclosure agreement (NDA).
          </p>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;

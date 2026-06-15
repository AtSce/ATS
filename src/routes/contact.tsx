import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Send } from "lucide-react";
import { PageLayout } from "@/components/PageLayout";
import { supabase } from "@/utils/supabase"; // Import your initialized client instances

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us — AtripleS Construction & Engineering" },
      {
        name: "description",
        content: "Get in touch with our head office or submit a general business enquiry.",
      },
    ],
  }),
  component: ContactUs,
});

const countryCodes = [
  { code: "+65", label: "+65" },
  { code: "+1", label: "+1" },
  { code: "+91", label: "+91" },
  { code: "+60", label: "+60" },
  { code: "+62", label: "+62" },
  { code: "+63", label: "+63" },
  { code: "+66", label: "+66" },
  { code: "+84", label: "+84" },
  { code: "+86", label: "+86" },
  { code: "+81", label: "+81" },
  { code: "+82", label: "+82" },
  { code: "+61", label: "+61" },
  { code: "+44", label: "+44" },
  { code: "+971", label: "+971" },
  { code: "+966", label: "+966" },
  { code: "+974", label: "+974" },
  { code: "+852", label: "+852" },
  { code: "+886", label: "+886" },
  { code: "+94", label: "+94" },
  { code: "+880", label: "+880" },
  { code: "+92", label: "+92" },
  { code: "+33", label: "+33" },
  { code: "+49", label: "+49" },
  { code: "+31", label: "+31" },
  { code: "+39", label: "+39" },
  { code: "+41", label: "+41" },
  { code: "+64", label: "+64" },
].sort((a, b) => (parseInt(a.code) > parseInt(b.code) ? 1 : -1));

export function ContactUs() {
  // 1. Unified state machine to capture form input elements
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    countryCode: "+65",
    phone: "",
    scopeOfInterest: "general-construction",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const handlePhoneKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const allowedKeys = [
      "Backspace",
      "Delete",
      "Tab",
      "Escape",
      "Enter",
      "ArrowLeft",
      "ArrowRight",
      "Home",
      "End",
    ];

    if (allowedKeys.includes(e.key) || e.ctrlKey === true || e.metaKey === true) {
      return;
    }

    if (!/^[0-9]$/.test(e.key)) {
      e.preventDefault();
    }
  };

  // 2. Database transaction submit handler
  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSubmissionStatus({ type: null, message: "" });

    // Format phone strings cleanly: e.g., "+65 81246664"
    const formattedPhone = `${formData.countryCode} ${formData.phone}`.trim();

    try {
      const { error } = await supabase.from("enquiries").insert([
        {
          name: formData.name,
          company: formData.company || null, // Stores optional strings cleanly
          email: formData.email,
          phone: formattedPhone || null,
          scope_of_interest: formData.scopeOfInterest,
          message: formData.message,
        },
      ]);

      if (error) throw error;

      // Reset form variables upon successful remote operations
      setSubmissionStatus({
        type: "success",
        message: "Your request has been saved successfully. Our team will contact you shortly.",
      });
      setFormData({
        name: "",
        company: "",
        email: "",
        countryCode: "+65",
        phone: "",
        scopeOfInterest: "general-construction",
        message: "",
      });
    } catch (err: any) {
      setSubmissionStatus({
        type: "error",
        message: err.message || "An unexpected error occurred while processing your request.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <PageLayout eyebrow="CONTACT US" title="Our Head Office">
      <div className="max-w-4xl space-y-8 text-left">
        {/* HQ Address Section */}
        <div>
          <h3 className="text-base font-bold text-[#1e40af] tracking-wide">HQ Address:</h3>
          <p className="mt-1 text-sm font-medium text-black/80">
            61A TUAS SOUTH AVENUE 1, SINGAPORE 637326
          </p>
        </div>

        {/* Contact Info Section */}
        <div className="space-y-1">
          <h3 className="text-base font-bold text-[#1e40af] tracking-wide">Contact Info:</h3>
          <div className="text-sm font-medium text-black/80 space-y-1 pt-1">
            <p>
              <span className="inline-block w-36 text-black/60">Telephone number:</span> +65 8124
              6664
            </p>
            <p>
              <span className="inline-block w-36 text-black/60">Email:</span> admin@atsce.com.sg
            </p>
            <p>
              <span className="inline-block w-36 text-black/60">WhatsApp:</span> +65 8124 6664
            </p>
          </div>
        </div>

        {/* Form Container Panel */}
        <div className="mt-6 border border-black/10 bg-[#fbfbfb] p-6 md:p-10 space-y-8">
          <h3 className="text-[11px] font-bold uppercase tracking-widest text-black/50">
            General Enquiries
          </h3>

          {/* User Feedback Notification Banners */}
          {submissionStatus.type && (
            <div
              className={`p-4 text-sm font-semibold rounded-none border ${
                submissionStatus.type === "success"
                  ? "bg-emerald-50 border-emerald-200 text-emerald-800"
                  : "bg-rose-50 border-rose-200 text-rose-800"
              }`}
            >
              {submissionStatus.message}
            </div>
          )}

          <form className="space-y-6" onSubmit={handleFormSubmit}>
            {/* Row 1: Name and Company */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[11px] font-bold uppercase tracking-wider text-black/60">
                  Name *
                </label>
                <input
                  type="text"
                  placeholder="Your full name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-white border border-black/20 px-4 py-2.5 text-sm placeholder:text-black/35 focus:outline-none focus:border-black transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[11px] font-bold uppercase tracking-wider text-black/60">
                  Company
                </label>
                <input
                  type="text"
                  placeholder="Optional"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="w-full bg-white border border-black/20 px-4 py-2.5 text-sm placeholder:text-black/35 focus:outline-none focus:border-black transition-colors"
                />
              </div>
            </div>

            {/* Row 2: Email and Phone Input */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[11px] font-bold uppercase tracking-wider text-black/60">
                  Email *
                </label>
                <input
                  type="email"
                  placeholder="you@company.com"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-white border border-black/20 px-4 py-2.5 text-sm placeholder:text-black/35 focus:outline-none focus:border-black transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[11px] font-bold uppercase tracking-wider text-black/60">
                  Phone
                </label>
                <div className="flex gap-2">
                  <select
                    value={formData.countryCode}
                    onChange={(e) => setFormData({ ...formData, countryCode: e.target.value })}
                    className="bg-white border border-black/20 px-2 py-2.5 text-sm focus:outline-none focus:border-black transition-colors rounded-none text-black/80 w-[85px] shrink-0"
                  >
                    {countryCodes.map((item, idx) => (
                      <option key={`${item.code}-${idx}`} value={item.code}>
                        {item.label}
                      </option>
                    ))}
                  </select>
                  <input
                    type="text"
                    inputMode="numeric"
                    onKeyDown={handlePhoneKeyDown}
                    placeholder="Phone number"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-white border border-black/20 px-4 py-2.5 text-sm placeholder:text-black/35 focus:outline-none focus:border-black transition-colors"
                  />
                </div>
              </div>
            </div>

            {/* Row 3: Scope of Interest Selector Dropdown Block */}
            <div className="space-y-2">
              <label className="text-[11px] font-bold uppercase tracking-wider text-black/60">
                Scope of Interest
              </label>
              <select
                value={formData.scopeOfInterest}
                onChange={(e) => setFormData({ ...formData, scopeOfInterest: e.target.value })}
                className="w-full bg-white border border-black/20 px-4 py-2.5 text-sm focus:outline-none focus:border-black transition-colors text-black/80 rounded-none"
              >
                <option value="General Construction">General Construction</option>
                <option value="Infrastructure Works">Infrastructure Works</option>
                <option value="Mechanical">Mechanical</option>
                <option value="Structural Fabrication">Structural Fabrication</option>
                <option value="Refinery & Plant">Refinery & Plant</option>
                <option value="Engineering , procurement and construction">
                  Engineering , procurement and construction (EPC)
                </option>
                <option value="Scaffolding Service">Scaffolding Service</option>
                <option value="Plant Maintenance">Plant Maintenance</option>
                <option value="Pipe Fabrication Services">Pipe Fabrication Services</option>
                <option value="Something else">Something else</option>
              </select>
            </div>

            {/* Row 4: Message section */}
            <div className="space-y-2">
              <label className="text-[11px] font-bold uppercase tracking-wider text-black/60">
                Tell us about your project
              </label>
              <textarea
                rows={5}
                placeholder="Site location, scope, indicative timeline..."
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full bg-white border border-black/20 px-4 py-3 text-sm placeholder:text-black/35 focus:outline-none focus:border-black transition-colors resize-y"
              />
            </div>

            {/* Submit Block */}
            <div className="flex justify-end pt-2">
              <button
                type="submit"
                disabled={loading}
                className="flex items-center gap-2 bg-[#1a1a1a] hover:bg-[#333333] disabled:bg-black/40 text-white font-medium text-xs tracking-wider uppercase px-6 py-3.5 transition-colors duration-200 shadow cursor-pointer focus:outline-none"
              >
                <span>{loading ? "Sending..." : "Send message"}</span>
                {!loading && (
                  <Send className="h-3.5 w-3.5 transform rotate-45 -translate-y-0.5 opacity-90" />
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </PageLayout>
  );
}

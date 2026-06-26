import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageLayout } from "../components/PageLayout";
import { PageNav, aboutLinks } from "../components/PageNav";
import { X, ShieldCheck, Award, Eye, Calendar, Building2, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/about/certifications")({
  head: () => ({
    meta: [
      { title: "Certifications — AtripleS Construction & Engineering" },
      {
        name: "description",
        content:
          "Our international quality, management, and workplace occupational safety certifications.",
      },
    ],
  }),
  component: CertificationsComponent,
});

interface Certification {
  id: number;
  title: string;
  subtitle: string;
  scope: string;
  registrar: string;
  expiry: string;
  img:
    | "/imgs/cert-iso9001.jpg"
    | "/imgs/cert-iso45001.jpg"
    | "/imgs/Bizsafe A-TRIPLE-S CONSTRUCTION AND ENGINEERING PTE. LTD._page-0001.jpg";
}

const certificationList: Certification[] = [
  {
    id: 1,
    title: "ISO 9001:2015",
    subtitle: "Quality Management System",
    scope:
      "Provision of Mechanical Engineering, Procurement, Construction (EPC), and Plant Maintenance Works.",
    registrar: "International Certification Registrar",
    expiry: "Valid until 2028",
    img: "/imgs/cert-iso9001.jpg",
  },
  {
    id: 2,
    title: "ISO 45001:2018",
    subtitle: "Occupational Health & Safety",
    scope:
      "Occupational Health & Safety Management standards applied across all structural engineering site operations.",
    registrar: "International Certification Registrar",
    expiry: "Valid until 2028",
    img: "/imgs/cert-iso45001.jpg",
  },
  {
    id: 3,
    title: "bizSAFE Level Star",
    subtitle: "Workplace Safety and Health Council",
    scope: "Attainment of bizSAFE Level Star for workplace safety and health standards.",
    registrar: "Workplace Safety and Health Council",
    expiry: "Valid until 27/05/2029",
    img: "/imgs/Bizsafe A-TRIPLE-S CONSTRUCTION AND ENGINEERING PTE. LTD._page-0001.jpg",
  },
];

function CertificationsComponent() {
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);

  return (
    <PageLayout
      title="Certifications"
      eyebrow="ABOUT US"
      nav={<PageNav title="About Us" links={aboutLinks} currentPath="/about/certifications" />}
    >
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Top subtle intro badge row */}
        <div className="text-center max-w-xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-semibold text-[#1e40af]">
            <ShieldCheck className="h-3.5 w-3.5" />
            Global Compliance Standards
          </div>
          <p className="text-sm text-gray-600 leading-relaxed">
            AtripleS holds verified international credentials, guaranteeing operational excellence,
            high qualitative precision, and zero-compromise site safety configurations.
          </p>
        </div>

        {/* Premium Twin Certification Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-4">
          {certificationList.map((cert) => (
            <div
              key={cert.id}
              className="bg-white border border-gray-200/80 rounded-2xl shadow-sm hover:shadow-xl hover:border-blue-500/30 transition-all duration-300 flex flex-col group overflow-hidden"
            >
              {/* Document Paper Container */}
              <div className="relative aspect-[1/1.3] bg-gray-50 flex items-center justify-center p-6 border-b border-gray-100 overflow-hidden select-none">
                {/* Micro clean grid backdrop representing blueprints/engineering blueprints */}
                <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:14px_24px]" />

                <img
                  src={cert.img}
                  alt={cert.title}
                  className="w-full h-full object-contain shadow-md rounded-sm border border-gray-200/40 transition-transform duration-500 group-hover:scale-[1.02]"
                />

                {/* Dark Hover Tint Overlay with Button Actions */}
                <div
                  onClick={() => setSelectedCert(cert)}
                  className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center cursor-pointer backdrop-blur-[2px]"
                >
                  <div className="flex items-center gap-2 bg-[#1e40af] text-white px-4 py-2 rounded-full text-xs font-bold shadow-lg transform translate-y-2 group-hover:translate-y-0 transition duration-300">
                    <Eye className="h-3.5 w-3.5" />
                    Verify Document Details
                  </div>
                </div>
              </div>

              {/* Document Meta Description Footers */}
              <div className="p-5 flex-grow flex flex-col justify-between bg-white border-t-2 border-transparent group-hover:border-[#ef6c1a] transition-colors duration-300">
                <div className="space-y-2 text-left">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="font-extrabold text-lg text-gray-900 tracking-tight">
                      {cert.title}
                    </h3>
                    <span className="inline-flex items-center text-[10px] font-bold uppercase tracking-wider text-green-700 bg-green-50 border border-green-200 px-2 py-0.5 rounded-md">
                      Active
                    </span>
                  </div>
                  <div className="text-xs font-bold text-[#ef6c1a] tracking-wide uppercase">
                    {cert.subtitle}
                  </div>
                  <p className="text-xs text-gray-500 leading-relaxed pt-1">{cert.scope}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Cinematic Split-Pane Fullscreen Interactive Inspection Lightbox */}
        {selectedCert && (
          <div
            className="fixed inset-0 mountaineer z-[9999] flex items-center justify-center bg-slate-950/90 backdrop-blur-md p-4 sm:p-6 md:p-10 transition-all duration-300 animate-fade-in"
            onClick={() => setSelectedCert(null)}
          >
            {/* Split-pane card panel context */}
            <div
              className="relative max-w-4xl w-full bg-white shadow-2xl rounded-2xl overflow-hidden flex flex-col md:flex-row h-auto max-h-[85vh] border border-white/10 transform scale-100 animate-scale-up"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Overlay Icon Trigger */}
              <button
                onClick={() => setSelectedCert(null)}
                className="absolute top-4 right-4 z-50 rounded-full bg-black/60 p-2 text-white shadow-md hover:bg-[#ef6c1a] transition-colors focus:outline-none"
                aria-label="Close credentials view"
              >
                <X className="h-4 w-4" />
              </button>

              {/* Left Pane: Framed Certificate View */}
              <div className="w-full md:w-[55%] bg-slate-100 p-6 flex items-center justify-center border-b md:border-b-0 md:border-r border-gray-200 overflow-y-auto min-h-[350px] md:min-h-0">
                <img
                  src={selectedCert.img}
                  alt="A4 Certificate Frame View"
                  className="max-w-full max-h-[65vh] object-contain shadow-2xl rounded-sm border border-gray-300/60"
                />
              </div>

              {/* Right Pane: Descriptive Audit Metadata Panel */}
              <div className="w-full md:w-[45%] p-8 flex flex-col justify-between bg-white text-left overflow-y-auto">
                <div className="space-y-6">
                  {/* Badge */}
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-blue-50 text-blue-700 border border-blue-100 text-[10px] font-bold uppercase tracking-wider">
                    <Award className="h-3 w-3" /> Audited Credential
                  </div>

                  {/* Headings */}
                  <div className="space-y-1.5">
                    <h2 className="text-2xl font-black text-slate-900 tracking-tight">
                      {selectedCert.title}
                    </h2>
                    <p className="text-sm font-bold text-[#ef6c1a] uppercase tracking-wide">
                      {selectedCert.subtitle}
                    </p>
                  </div>

                  {/* Audit parameter list loops */}
                  <div className="space-y-4 border-t border-b border-gray-100 py-5 text-xs">
                    <div className="flex gap-3">
                      <Building2 className="h-4 w-4 text-slate-400 shrink-0 mt-0.5" />
                      <div>
                        <span className="block font-bold text-slate-700">Registrar Agency</span>
                        <span className="text-gray-500">{selectedCert.registrar}</span>
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <Calendar className="h-4 w-4 text-slate-400 shrink-0 mt-0.5" />
                      <div>
                        <span className="block font-bold text-slate-700">
                          Audit Status Timeline
                        </span>
                        <span className="text-gray-500">{selectedCert.expiry}</span>
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <CheckCircle2 className="h-4 w-4 text-blue-500 shrink-0 mt-0.5" />
                      <div>
                        <span className="block font-bold text-slate-700">Operational Scope</span>
                        <span className="text-gray-600 leading-relaxed">{selectedCert.scope}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Confirm closing trigger */}
                <button
                  onClick={() => setSelectedCert(null)}
                  className="mt-6 w-full py-2.5 bg-slate-900 hover:bg-[#1e40af] text-white font-bold rounded-xl text-xs tracking-wide transition-colors shadow-md"
                >
                  Done Inspecting Credential
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </PageLayout>
  );
}

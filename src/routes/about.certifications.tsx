import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect, useCallback } from "react";
import { PageLayout } from "../components/PageLayout";
import { PageNav, aboutLinks } from "../components/PageNav";
import { ChevronLeft, ChevronRight, X, ZoomIn } from "lucide-react";

export const Route = createFileRoute("/about/certifications")({
  head: () => ({
    meta: [
      { title: "AtripleS Construction & Engineering — Company Certifications" },
      {
        name: "description",
        content: "Our international quality, management, and workplace safety certifications.",
      },
    ],
  }),
  component: CertificationsComponent,
});

const certificationList = [
  {
    id: 1,
    title: "ISO 9001:2015",
    subtitle: "Quality Management System",
    img: "/imgs/cert-iso9001.jpg",
  },
  {
    id: 2,
    title: "ISO 45001:2018",
    subtitle: "Occupational Health & Safety",
    img: "/imgs/cert-iso45001.jpg",
  },
  {
    id: 3,
    title: "ISO 14001:2015",
    subtitle: "Environmental Management",
    img: "/imgs/whatsapp-helmet.png",
  },
];

function CertificationsComponent() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [modalImage, setModalImage] = useState<string | null>(null);

  const shiftSlide = useCallback((targetIndex: number) => {
    setActiveSlide(
      ((targetIndex % certificationList.length) + certificationList.length) %
        certificationList.length,
    );
  }, []);

  useEffect(() => {
    const id = setInterval(() => shiftSlide(activeSlide + 1), 4500);
    return () => clearInterval(id);
  }, [activeSlide, shiftSlide]);

  return (
    <PageLayout
      title="Certifications"
      eyebrow="ABOUT US ·"
      nav={<PageNav title="About Us" links={aboutLinks} currentPath="/about/certifications" />}
    >
      <div className="space-y-12">
        {/* FIX: Reduced from max-w-md to max-w-xs to make the portrait slideshow slider block smaller */}
        <div className="relative isolate aspect-[3/4] w-full max-w-xs mx-auto rounded-xl overflow-hidden bg-black/40 border border-white/10 group shadow-lg">
          {certificationList.map((cert, index) => (
            <div
              key={cert.id}
              className="absolute inset-0 w-full h-full transition-opacity duration-700 ease-in-out flex items-center justify-center"
              style={{
                opacity: index === activeSlide ? 1 : 0,
                zIndex: index === activeSlide ? 10 : 0,
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-transparent z-10" />

              <img
                src={cert.img}
                alt={cert.title}
                className="w-full h-full object-cover object-top relative z-0"
              />

              <div className="absolute bottom-6 left-6 right-6 z-20 text-white">
                <h3 className="text-base font-bold text-[#ef6c1a] drop-shadow-md">{cert.title}</h3>
                <p className="text-[11px] text-gray-200 font-medium mt-0.5 drop-shadow-sm">
                  {cert.subtitle}
                </p>
              </div>
            </div>
          ))}

          {/* Slider control arrows */}
          <button
            onClick={() => shiftSlide(activeSlide - 1)}
            className="absolute left-3 top-1/2 -translate-y-1/2 z-30 p-2 rounded-full bg-black/50 text-white backdrop-blur-sm hover:bg-black/70 transition opacity-0 group-hover:opacity-100"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            onClick={() => shiftSlide(activeSlide + 1)}
            className="absolute right-3 top-1/2 -translate-y-1/2 z-30 p-2 rounded-full bg-black/50 text-white backdrop-blur-sm hover:bg-black/70 transition opacity-0 group-hover:opacity-100"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>

        {/* Slide Indicators Dots Row */}
        <div className="flex justify-center gap-2 -mt-6">
          {certificationList.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveSlide(i)}
              className={`h-1.5 transition-all duration-300 ${i === activeSlide ? "w-6 bg-[#ef6c1a]" : "w-1.5 bg-white/40"}`}
            />
          ))}
        </div>

        {/* Below Same Three Certifications Present Grid Display */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto pt-4">
          {certificationList.map((cert) => (
            <div
              key={cert.id}
              className="bg-white/5 backdrop-blur-sm border border-black/10 rounded-xl overflow-hidden shadow-sm flex flex-col hover:border-blue-500/40 transition-all duration-300 group"
            >
              <div
                onClick={() => setModalImage(cert.img)}
                className="relative aspect-[3/4] bg-black/5 cursor-pointer overflow-hidden flex items-center justify-center p-4 border-b border-black/10"
              >
                <img
                  src={cert.img}
                  alt={cert.title}
                  className="w-full h-full object-contain transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex items-center gap-1.5 bg-[#1e40af] text-white px-3 py-1.5 rounded-full text-xs font-semibold shadow-md">
                    <ZoomIn className="h-3.5 w-3.5" />
                    View Certificate
                  </div>
                </div>
              </div>

              <div className="p-4 flex-grow flex flex-col justify-between bg-white text-left">
                <div>
                  <h4 className="font-bold text-base text-[#1e40af]">{cert.title}</h4>
                  <div className="text-xs font-semibold uppercase tracking-wider text-[#ef6c1a] mt-0.5">
                    {cert.subtitle}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Fullscreen A4 Certificate Modal Preview Framework Overlay */}
        {modalImage && (
          <div
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/85 backdrop-blur-md p-4 pt-24 transition-all animate-fade-in"
            onClick={() => setModalImage(null)}
          >
            <div
              className="relative max-h-[70vh] aspect-[1/1.4142] w-auto bg-white shadow-2xl rounded-sm p-1.5 flex flex-col border border-white/10"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setModalImage(null)}
                className="absolute top-4 right-4 z-50 rounded-full bg-black/60 p-2 text-white shadow-lg transition-colors hover:bg-[#ef6c1a] focus:outline-none"
                aria-label="Close certificate modal view"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="w-full h-full overflow-hidden flex items-center justify-center bg-gray-100 rounded-sm shadow-inner">
                <img
                  src={modalImage}
                  alt="A4 Certificate Zoom View"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </PageLayout>
  );
}

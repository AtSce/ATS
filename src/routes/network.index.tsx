import { createFileRoute } from "@tanstack/react-router";
import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { PageLayout } from "@/components/PageLayout";
import { PageNav, networkLinks } from "@/components/PageNav";

export const Route = createFileRoute("/network/")({
  head: () => ({
    meta: [
      { title: "Field of Business — Industries We Serve | AtripleS" },
      {
        name: "description",
        content:
          "Industries served by AtripleS: infrastructure, oil & gas, green energy, power generation, construction and Land Transport Authority works.",
      },
    ],
  }),
  component: Network,
});

const slides = [
  {
    img: "/imgs/infrastructure.jpg",
    title: "INFRASTRUCTURE",
    body: "Providing comprehensive infrastructure solutions, including road works, civil construction, repair, maintenance, and public facility upgrading projects.",
  },
  {
    img: "/imgs/oil_and_gas.jpg",
    title: "Oil and Gas",
    body: "Providing integrated EPC, construction, piping, mechanical, and maintenance services for oil & gas facilities, refineries, terminals, and process plants.",
  },
  {
    img: "/imgs/green_energy.jpg",
    title: "GREEN ENERGY",
    body: "Supporting renewable and sustainable energy projects through reliable engineering, construction, maintenance, and infrastructure solutions.",
  },
  {
    img: "/imgs/power_generation.jpg",
    title: "POWER GENERATION",
    body: "Supporting uninterrupted power production through dependable plant maintenance and turnaround services.",
  },
  {
    img: "/imgs/construction.jpg",
    title: "CONSTRUCTION",
    body: "Supporting sustainable development through reliable and efficient construction services.",
  },
  {
    img: "/imgs/land_transport_authority.jpg",
    title: "Land Transport Authority",
    body: "Supporting transport infrastructure development through civil works, road maintenance, and repair services.",
  },
];

function Network() {
  const [index, setIndex] = useState(0);
  const go = useCallback(
    (i: number) => setIndex(((i % slides.length) + slides.length) % slides.length),
    [],
  );
  const next = useCallback(() => go(index + 1), [go, index]);
  const prev = useCallback(() => go(index - 1), [go, index]);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % slides.length), 4500);
    return () => clearInterval(id);
  }, []);

  return (
    <PageLayout
      eyebrow="Field of Business"
      title="Industries we serve"
      subtitle=""
      nav={<PageNav title="Field of Business" links={networkLinks} currentPath="/network" />}
    >
      {/* Slideshow Display Layer Container */}
      <div className="relative isolate overflow-hidden rounded-lg border border-black/14 bg-black">
        <div className="relative aspect-[16/9] w-full">
          {slides.map((s, i) => (
            <div
              key={s.title}
              className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
              style={{ opacity: i === index ? 1 : 0 }}
              aria-hidden={i !== index}
            >
              <img src={s.img} alt={s.title} className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
              <div
                key={`copy-${index}-${i}`}
                className="absolute inset-x-0 bottom-0 p-6 text-white md:p-10"
              >
                <h2
                  className={`font-display text-2xl font-extrabold uppercase tracking-wide text-white md:text-4xl ${i === index ? "animate-fade-in" : ""}`}
                  style={{ textShadow: "0 2px 12px rgba(0,0,0,0.7)" }}
                >
                  {s.title}
                </h2>
                <p
                  className={`mt-3 max-w-3xl text-sm leading-relaxed text-white/90 md:text-base ${i === index ? "animate-fade-in" : ""}`}
                  style={{ textShadow: "0 1px 6px rgba(0,0,0,0.7)" }}
                >
                  {s.body}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel Direction Controllers */}
        <button
          type="button"
          aria-label="Previous"
          onClick={prev}
          className="absolute left-3 top-1/2 z-10 -translate-y-1/2 rounded-full bg-black/40 p-2 text-white backdrop-blur transition hover:bg-black/60 cursor-pointer"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          type="button"
          aria-label="Next"
          onClick={next}
          className="absolute right-3 top-1/2 z-10 -translate-y-1/2 rounded-full bg-black/40 p-2 text-white backdrop-blur transition hover:bg-black/60 cursor-pointer"
        >
          <ChevronRight className="h-5 w-5" />
        </button>

        {/* Slideline Pagination Dot Controls */}
        <div className="absolute bottom-3 left-1/2 z-10 flex -translate-x-1/2 gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => go(i)}
              className={`h-1.5 transition-all duration-300 cursor-pointer ${i === index ? "w-8 bg-[#ef6c1a]" : "w-2 bg-white/60 hover:bg-white"}`}
            />
          ))}
        </div>
      </div>

      {/* FIXED TOPIC SELECTION CARDS GRID: 
          Restructured with layout boundary safety blocks ('min-w-0', 'flex-1', 'shrink-0') 
          to encapsulate text perfectly within card borders without overflow.
      */}
      <ul className="mt-8 grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {slides.map((s, i) => (
          <li key={s.title}>
            <button
              type="button"
              onClick={() => go(i)}
              className={`flex w-full items-center gap-3 rounded-xl border p-2 text-left transition-all duration-300 group overflow-hidden cursor-pointer ${
                i === index
                  ? "border-[#1e40af] bg-blue-50 shadow-sm"
                  : "border-black/10 bg-white hover:border-[#1e40af]/40 hover:shadow-md"
              }`}
            >
              {/* Image Frame Container Box with fixed dimensions */}
              <div className="relative h-14 w-20 shrink-0 overflow-hidden rounded-md bg-gray-100 border border-black/5">
                <img
                  src={s.img}
                  alt=""
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>

              {/* Flex Text Wrap Box: min-w-0 enables native string clipping operations */}
              <div className="min-w-0 flex-1 pr-1">
                <span
                  className={`block text-xs font-bold uppercase tracking-wide transition-colors duration-200 line-clamp-2 leading-tight ${
                    i === index ? "text-[#1e40af]" : "text-black/80 group-hover:text-[#1e40af]"
                  }`}
                >
                  {s.title}
                </span>
              </div>
            </button>
          </li>
        ))}
      </ul>
    </PageLayout>
  );
}

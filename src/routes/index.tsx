import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState, useCallback } from "react";
import { ChevronLeft, ChevronRight, HardHat, Users, Award, Mountain } from "lucide-react";

const slides = [
  "/imgs/hd-slide-1.png",
  "/imgs/hd-slide-2.png",
  "/imgs/hd-slide-3.png",
  "/imgs/hd-slide-4.png",
  "/imgs/hd-slide-5.png",
];
const bizProject = "/imgs/biz-project.jpg";
const bizMaintenance = "/imgs/biz-maintenance.jpg";
const bizScaffold = "/imgs/biz-scaffold.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "\n" },
      {
        name: "description",
        content:
          "Engineering Excellence for Industrial Performance — EPC, General Construction, Mechanical, Piping & Structure, Scaffolding, Maintenance Services.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  const [index, setIndex] = useState(0);

  const go = useCallback((i: number) => {
    setIndex(((i % slides.length) + slides.length) % slides.length);
  }, []);
  const next = useCallback(() => go(index + 1), [go, index]);
  const prev = useCallback(() => go(index - 1), [go, index]);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % slides.length), 3000);
    return () => clearInterval(id);
  }, []);

  return (
    <>
      <section className="h-screen min-h-[750px]">
        {slides.map((src, i) => (
          <img
            key={src}
            src={src}
            alt=""
            aria-hidden={i !== index}
            className="absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ease-in-out"
            style={{ opacity: i === index ? 1 : 0 }}
          />
        ))}

        {/* Hero copy */}
        <div className="relative z-10 flex h-full items-center">
          <div className="container-x">
            <div className="max-w-3xl text-white">
              <h1
                className="font-display text-4xl font-extrabold leading-[1.1] drop-shadow-md md:text-6xl"
                style={{
                  textShadow:
                    "0px 0px 4px rgba(0,0,0,0.9), 0px 0px 2px rgba(0,0,0,1), 0px 1px 3px rgba(0,0,0,0.8)",
                }}
              >
                Engineering Excellence for <br /> Industrial Performance
              </h1>

              <p
                className="mt-6 text-base font-medium text-white/90 md:text-lg"
                style={{
                  textShadow:
                    "0px 0px 3px rgba(0,0,0,0.9), 0px 0px 1px rgba(0,0,0,1), 0px 1px 2px rgba(0,0,0,0.8)",
                }}
              >
                EPC <span className="mx-2 text-[#ef6c1a]">|</span> General Construction
                <span className="mx-2 text-[#ef6c1a]">|</span> Mechanical
                <span className="mx-2 text-[#ef6c1a]">|</span> Piping &amp; Structure
                <span className="mx-2 text-[#ef6c1a]">|</span> Scaffolding
                <span className="mx-2 text-[#ef6c1a]">|</span> Maintenance Service
              </p>

              <Link
                to="/business"
                className="mt-10 inline-flex items-center gap-2 bg-[#ef6c1a] px-7 py-3 text-sm font-semibold uppercase tracking-wider text-white transition hover:bg-[#d65a10]"
              >
                Explore Our Business
              </Link>
            </div>
          </div>
        </div>

        {/* Indicators */}
        <div className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => go(i)}
              className={`h-2 transition-all duration-300 ${
                i === index ? "w-8 bg-[#ef6c1a]" : "w-2 bg-white/60 hover:bg-white"
              }`}
            />
          ))}
        </div>
      </section>

      {/* Quote + values marquee */}
      <section className="relative overflow-hidden bg-white py-8 md:py-12">
        <div className="container-x text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#ef6c1a]">
            Our Guiding Principle
          </p>
          <h2 className="mt-2 font-display text-2xl font-extrabold tracking-tight text-[#1e40af] md:text-4xl lg:text-5xl">
            ACHIEVING TIMELINES <span className="text-[#ef6c1a]">SAFELY</span>
          </h2>
          <div className="mx-auto mt-3 h-[3px] w-16 bg-[#ef6c1a]" />
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-black/70">
            Delivering every project on schedule without ever compromising on the safety of our
            people, partners and communities.
          </p>
        </div>

        <div className="marquee-mask mt-6 overflow-hidden">
          <div className="marquee-track flex w-max gap-4 md:gap-6">
            {[...Array(4)].flatMap((_, dup) =>
              [
                { icon: HardHat, label: "Passion" },
                { icon: Users, label: "Teamwork" },
                { icon: Mountain, label: "Leadership" },
                { icon: Award, label: "Excellence" },
              ].map((v) => (
                <div
                  key={`${dup}-${v.label}`}
                  className="group flex w-36 shrink-0 flex-col items-center rounded-lg border border-[#1e40af]/15 bg-white px-3 py-4 shadow-sm transition hover:border-[#ef6c1a] hover:shadow-md md:w-44"
                >
                  <div className="grid h-12 w-12 place-items-center rounded-md bg-[#1e40af] transition group-hover:bg-[#ef6c1a]">
                    <v.icon className="h-6 w-6 text-white" strokeWidth={1.5} />
                  </div>
                  <p className="mt-2 font-display text-xs font-bold tracking-wide text-[#1e40af]">
                    {v.label}
                  </p>
                </div>
              )),
            )}
          </div>
        </div>
      </section>

      <section className="bg-white py-6 md:py-10">
        <div className="container-x grid gap-5 lg:grid-cols-2">
          {/* About Us */}
          <div className="relative">
            <div className="bg-[#1e40af] p-5 text-white md:p-6">
              <h2 className="font-display text-xl font-semibold md:text-2xl">About Us</h2>
              <div className="mt-3 space-y-2 text-[13px] leading-relaxed text-white/90">
                <p>
                  Established in 2025, AtripleS Construction & Engineering Pte. Ltd. is a Singapore
                  based engineering and construction company serving the oil & gas, petrochemical,
                  refinery, energy, and industrial sectors. Although newly founded, our company is
                  built upon decades of combined industry experience, technical expertise, and
                  leadership gained through delivering complex projects across various industrial
                  environments.
                </p>
              </div>
              <Link
                to="/about"
                className="mt-4 inline-flex items-center gap-2 border-b-2 border-white pb-1 text-xs font-semibold uppercase tracking-wider text-white transition hover:text-[#1e40af] hover:border-[#1e40af]"
              >
                More +
              </Link>
            </div>
            <div className="absolute -bottom-2 right-5 h-2 w-20 bg-[#ef6c1a]" />
          </div>

          {/* Our Services / Business Cards Section */}
          <div>
            <h2 className="font-display text-xl font-semibold text-[#1e40af] md:text-2xl">
              Our Services
            </h2>
            <div className="mt-3 h-px w-full bg-border" />
            <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
              {[
                { img: bizProject, title: "Project Works", to: "/business/project-works" },
                { img: bizMaintenance, title: "Maintenance Services", to: "/business/maintenance" },
                { img: bizScaffold, title: "Other Operations", to: "/business/partnership" },
              ].map((s) => (
                <Link key={s.title} to={s.to} className="group block">
                  {/* FIX: Removed aspect-[4/5] and forced bg-transparent 
                    so that the block box height automatically matches the photo size!
                  */}
                  <div className="overflow-hidden rounded-md border border-border bg-transparent w-full h-auto">
                    <img
                      src={s.img}
                      alt={s.title}
                      loading="lazy"
                      // h-auto ensures your photo keeps its real height without rendering empty margins
                      className="w-full h-auto object-cover object-center transition duration-500 group-hover:scale-[1.03]"
                    />
                  </div>
                  <h3 className="mt-2 text-sm font-semibold text-foreground group-hover:text-[#1e40af]">
                    {s.title}
                  </h3>
                </Link>
              ))}
            </div>
            <div className="mt-6 flex justify-end">
              <Link
                to="/business"
                className="relative inline-flex items-center gap-2 border-b-2 border-[#1e40af] pb-1 text-sm font-semibold uppercase tracking-wider text-[#1e40af] transition hover:text-[#ef6c1a] hover:border-[#ef6c1a]"
              >
                More +
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

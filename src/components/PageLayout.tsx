import type { ReactNode } from "react";

const pageBg = "/imgs/page-bg.jpg";

export function PageLayout({
  eyebrow,
  title,
  subtitle,
  nav,
  children,
}: {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  nav?: ReactNode;
  children: ReactNode;
}) {
  return (
    <div className="relative isolate min-h-screen w-full bg-[#0b1220]">
      {/* Background image - absolute, stretches to this container's full height (grows with content) */}
      <div className="absolute inset-0 -z-20 pointer-events-none">
        <img
          src={pageBg}
          alt=""
          aria-hidden="true"
          className="h-full w-full object-cover object-top"
        />
      </div>

      {/* Gradient overlay - absolute, matches the image's box exactly */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-b from-[#0b1220]/90 via-[#0b1220]/75 to-[#0b1220]/90 pointer-events-none"
      />

      {/* Main content grid */}
      <div
        className={`container-x grid items-start gap-8 pb-20 pt-32 md:pt-40 relative z-10 mx-auto w-full ${
          nav ? "lg:grid-cols-[clamp(220px,24%,300px)_minmax(0,1fr)]" : ""
        }`}
      >
        {nav ? <div className="lg:sticky lg:top-36">{nav}</div> : null}

        <article className="letterpad">
          <div className="letterpad-body">
            {eyebrow && <div className="letterpad-eyebrow">{eyebrow}</div>}
            <h1 className="letterpad-title">{title}</h1>
            {subtitle && <p className="letterpad-subtitle">{subtitle}</p>}
            <div className="mt-8">{children}</div>
          </div>

          <footer className="letterpad-foot">
            <span>AtripleS Construction &amp; Engineering Pte. Ltd.</span>
            <span>admin@atsce.com.sg · +65 8124 6664</span>
          </footer>
        </article>
      </div>
    </div>
  );
}

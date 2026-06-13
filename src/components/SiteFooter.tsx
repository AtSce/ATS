import { Link } from "@tanstack/react-router";

const logo = "/imgs/ats-logo.png";

export function SiteFooter() {
  return (
    <footer className="bg-[#1e40af] text-white">
      <div className="container-x flex flex-col items-center justify-between gap-3 py-3 md:flex-row">
        <Link to="/" className="flex items-center rounded-md bg-white px-3 py-1.5 shadow-sm">
          <img
            src={logo}
            alt="AtripleS Construction & Engineering"
            className="h-12 w-auto object-contain"
          />
        </Link>

        <a
          href="https://www.linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
          </svg>
        </a>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x flex flex-col items-center justify-between gap-2 py-2 text-xs text-white/60 sm:flex-row">
          <span className="flex items-center gap-2">
            {/* The clickable yellow dot indicator to launch the admin views */}
            <Link
              to="/admin"
              aria-label="Admin panel"
              title="Admin"
              className="inline-block h-2 w-2 rounded-full bg-yellow-400 transition hover:scale-125 cursor-pointer focus:outline-none"
            />
            <span>© {new Date().getFullYear()} All rights reserved.</span>
          </span>
        </div>
      </div>
    </footer>
  );
}

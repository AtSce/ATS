import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react";

const logo = "/imgs/ats-logo-transparent.png";

type SubItem = {
  label: string;
  to: string;
  children?: { label: string; to: string }[];
};

type NavItem = {
  label: string;
  to: string;
  children?: SubItem[];
};

const nav: NavItem[] = [
  { label: "Home", to: "/" },
  {
    label: "About Us",
    to: "/about",
    children: [
      { label: "Corporate Profile", to: "/about" },
      { label: "Governance, Ethics & Compliance", to: "/about/governance" },
      { label: "Leadership & Management Approach", to: "/about/leadership" },
      {
        label: "Our Commitment",
        to: "/about/commitment",
        children: [
          { label: "HSSE Philosophy", to: "/about/hsse" },
          { label: "Quality Assurance", to: "/about/quality" },
          { label: "Timely Delivery Assurance", to: "/about/delivery" },
          { label: "Client Satisfaction", to: "/about/client" },
        ],
      },
      { label: "Our Strengths", to: "/about/strengths" },
      { label: "Certifications", to: "/about/certifications" },
    ],
  },
  {
    label: "Our Services ",
    to: "/business",
    children: [
      { label: "Project Works (EPC Mechanical)", to: "/business/project-works" },
      { label: "General Construction Works", to: "/business/construction" },
      { label: "Plant Maintenance Works", to: "/business/maintenance" },
      { label: "Core Partnership Services", to: "/business/partnership" },
    ],
  },
  {
    label: "Field of Business",
    to: "/network",
    children: [
      { label: "Infrastructure", to: "/network/infrastructure" },
      { label: "Oil & Gas", to: "/network/oil-gas" },
      { label: "Green Energy", to: "/network/green-energy" },
      { label: "Power Generation", to: "/network/power-generation" },
      { label: "Construction", to: "/network/construction" },
      { label: "Land Transport Authority", to: "/network/land-transport" },
    ],
  },
  { label: "Contact Us", to: "/contact" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const [mobileSubExpanded, setMobileSubExpanded] = useState<string | null>(null);

  // Outer region is fixed, sitting directly at the top of viewport with zero layout pushing side-effects
  const headerClasses =
    "fixed top-0 left-0 right-0 z-50 w-full bg-transparent px-4 py-4 md:px-8 pointer-events-none";

  // Inner layout bar behaves as a floating capsule layout. We re-enable cursor actions with 'pointer-events-auto'
  const navContainerClasses =
    "flex w-full items-stretch overflow-visible px-6 mx-auto max-w-[1400px] bg-white/95 backdrop-blur-md shadow-md rounded-full border border-black/5 h-20 md:h-24 pointer-events-auto";

  const logoClasses = "flex items-center px-4 py-2";

  const activeItem = "bg-[#1e40af] text-white rounded-full";
  const inactiveItem =
    "text-[#3A3A3A] hover:bg-[#dbeafe] hover:text-[#1e40af] rounded-full transition-colors duration-300";

  const mobileBtnClasses =
    "rounded-full border border-black/20 bg-white p-2 text-[#3A3A3A] transition-colors hover:bg-black/5";

  return (
    <header className={headerClasses}>
      <div className={navContainerClasses}>
        <Link to="/" className={logoClasses}>
          <img
            src={logo}
            alt="AtripleS Construction & Engineering"
            className="h-[52px] w-auto object-contain md:h-[64px]"
            style={{ imageRendering: "auto" }}
          />
        </Link>

        {/* Desktop Navbar Row Links */}
        <div className="ml-auto flex items-stretch">
          {nav.map((item) =>
            item.children ? (
              <div key={item.label} className="group relative flex items-stretch">
                <Link
                  to={item.to}
                  activeProps={{ className: activeItem }}
                  inactiveProps={{ className: inactiveItem }}
                  className="flex items-center my-3 px-5 py-2.5 text-[13px] font-medium tracking-wide transition-colors duration-300"
                >
                  {item.label}
                  <ChevronDown className="ml-1 h-3 w-3 opacity-70" />
                </Link>

                {/* Context Submenu Dropdowns */}
                <div className="invisible absolute left-0 top-full z-50 min-w-[220px] translate-y-1 opacity-0 transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                  <ul className="mt-1 rounded-sm bg-[#1e40af]/95 py-1 shadow-xl shadow-black/30 backdrop-blur-md">
                    {item.children.map((sub) => (
                      <li key={sub.label} className="group/sub relative">
                        {sub.children ? (
                          <>
                            <button className="flex w-full items-center justify-between px-4 py-1.5 text-[12px] text-white text-left transition-colors hover:bg-white/20">
                              <span>{sub.label}</span>
                              <ChevronRight className="h-3 w-3 opacity-80" />
                            </button>

                            <div className="invisible absolute left-full top-0 z-50 min-w-[200px] -translate-x-1 pl-1 opacity-0 transition-all duration-200 group-hover/sub:visible group-hover/sub:translate-x-0 group-hover/sub:opacity-100">
                              <ul className="rounded-sm bg-[#1e40af]/95 py-1 shadow-xl shadow-black/30 backdrop-blur-md">
                                {sub.children.map((leaf) => (
                                  <li key={leaf.label}>
                                    <Link
                                      to={leaf.to}
                                      className="block px-4 py-1.5 text-[12px] text-white transition-colors hover:bg-white/20"
                                    >
                                      {leaf.label}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </>
                        ) : (
                          <Link
                            to={sub.to}
                            className="block px-4 py-1.5 text-[12px] text-white transition-colors hover:bg-white/20"
                          >
                            {sub.label}
                          </Link>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ) : (
              <Link
                key={item.to}
                to={item.to}
                activeProps={{ className: activeItem }}
                inactiveProps={{ className: inactiveItem }}
                activeOptions={{ exact: item.to === "/" }}
                className="flex items-center my-3 px-5 py-2.5 text-[13px] font-medium tracking-wide transition-colors duration-300"
              >
                {item.label}
              </Link>
            ),
          )}
        </div>

        {/* Mobile View Toggle */}
        <div className="flex items-center lg:hidden ml-auto">
          <button
            onClick={() => setOpen((v) => !v)}
            className={mobileBtnClasses}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu View Panels */}
      {open && (
        <div className="mx-4 rounded-xl bg-[#3A3A3A]/95 backdrop-blur lg:hidden pointer-events-auto shadow-lg overflow-hidden mt-2">
          <div className="flex flex-col py-2">
            {nav.map((item) =>
              item.children ? (
                <div key={item.label}>
                  <button
                    onClick={() => setMobileExpanded((p) => (p === item.label ? null : item.label))}
                    className="flex w-full items-center justify-between px-5 py-3 text-sm font-medium text-white hover:bg-white/10"
                  >
                    {item.label}
                    <ChevronDown
                      className={`h-4 w-4 transition-transform ${
                        mobileExpanded === item.label ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {mobileExpanded === item.label && (
                    <div className="bg-black/20">
                      {item.children.map((sub) =>
                        sub.children ? (
                          <div key={sub.label}>
                            <button
                              onClick={() =>
                                setMobileSubExpanded((p) => (p === sub.label ? null : sub.label))
                              }
                              className="flex w-full items-center justify-between px-8 py-2.5 text-sm text-white hover:bg-white/10"
                            >
                              {sub.label}
                              <ChevronDown
                                className={`h-4 w-4 transition-transform ${
                                  mobileSubExpanded === sub.label ? "rotate-180" : ""
                                }`}
                              />
                            </button>
                            {mobileSubExpanded === sub.label &&
                              sub.children.map((leaf) => (
                                <Link
                                  key={leaf.label}
                                  to={leaf.to}
                                  onClick={() => setOpen(false)}
                                  className="block px-12 py-2 text-sm text-white/90 hover:bg-white/10"
                                >
                                  {leaf.label}
                                </Link>
                              ))}
                          </div>
                        ) : (
                          <Link
                            key={sub.label}
                            to={sub.to}
                            onClick={() => setOpen(false)}
                            className="block px-8 py-2.5 text-sm text-white hover:bg-white/10"
                          >
                            {sub.label}
                          </Link>
                        ),
                      )}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  activeProps={{ className: "bg-white text-[#3A3A3A]" }}
                  inactiveProps={{ className: "text-white hover:bg-white/10" }}
                  activeOptions={{ exact: item.to === "/" }}
                  className="px-5 py-3 text-sm font-medium transition-colors"
                >
                  {item.label}
                </Link>
              ),
            )}
          </div>
        </div>
      )}
    </header>
  );
}

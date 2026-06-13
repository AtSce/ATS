import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";

export type NavLink = {
  label: string;
  to: string;
  children?: { label: string; to: string }[];
};

// 1. About Us Links Metadata
export const aboutLinks: NavLink[] = [
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
];

// 2. Our Services Links Metadata
export const businessLinks: NavLink[] = [
  { label: "Project Works (EPC Mechanical)", to: "/business/project-works" },
  { label: "General Construction Works", to: "/business/construction" },
  { label: "Plant Maintenance Works", to: "/business/maintenance" },
  { label: "Core Partnership Services", to: "/business/partnership" },
];

// 3. Field of Business Links Metadata
export const networkLinks: NavLink[] = [
  { label: "Infrastructure", to: "/network/infrastructure" },
  { label: "Oil & Gas", to: "/network/oil-gas" },
  { label: "Green Energy", to: "/network/green-energy" },
  { label: "Power Generation", to: "/network/power-generation" },
  { label: "Construction", to: "/network/construction" },
  { label: "Land Transport Authority", to: "/network/land-transport" },
];

interface PageNavProps {
  title: string;
  links: NavLink[];
  currentPath: string;
}

export function PageNav({ title, links, currentPath }: PageNavProps) {
  // FIX: Dynamic state engine tracker. Instead of hardcoding paths, this looks at the incoming
  // "links" array configuration structure to check if any child options are active.
  const hasActiveChild = links.some((link) =>
    link.children?.some((child) => currentPath === child.to),
  );

  // Tracks which exact menu option label is expanded (maps clean string values instead of simple booleans)
  const [expandedMenu, setExpandedMenu] = useState<string | null>(() => {
    if (hasActiveChild) {
      const activeParent = links.find((link) =>
        link.children?.some((child) => currentPath === child.to),
      );
      return activeParent ? activeParent.label : null;
    }
    return null;
  });

  const toggleMenu = (label: string) => {
    setExpandedMenu((prev) => (prev === label ? null : label));
  };

  return (
    <div className="w-full bg-[#1a1a1a]/90 backdrop-blur border border-white/5 rounded-xl p-4 text-white shadow-xl">
      <h2 className="text-xs font-semibold uppercase tracking-widest text-[#ef6c1a] border-b border-white/10 pb-3 mb-4">
        {title}
      </h2>

      <nav className="space-y-1">
        {links.map((link) => {
          const hasChildren = !!link.children;
          const isMenuOpen = expandedMenu === link.label;

          // A regular link or parent is active if the current path matches exactly
          const isExactActive = currentPath === link.to;

          if (hasChildren) {
            return (
              <div key={link.label} className="space-y-1">
                {/* Expandable Parent Trigger Button */}
                <button
                  type="button"
                  onClick={() => toggleMenu(link.label)}
                  className={`w-full flex items-center justify-between px-3 py-2 text-sm font-medium rounded-md transition-all duration-200 text-left cursor-pointer ${
                    isExactActive
                      ? "bg-[#1e40af] text-white"
                      : "text-gray-300 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  <span className="flex-grow">{link.label}</span>
                  <ChevronDown
                    className={`h-4 w-4 shrink-0 transition-transform duration-200 ${
                      isMenuOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Sub-menu Dropdown List Box */}
                {isMenuOpen && (
                  <div className="pl-4 pr-1 py-1 space-y-1 border-l-2 border-[#ef6c1a]/30 ml-3 animate-fade-in">
                    {link.children?.map((child) => {
                      const isChildActive = currentPath === child.to;
                      return (
                        <Link
                          key={child.label}
                          to={child.to}
                          className={`flex items-center gap-2 w-full px-3 py-1.5 text-xs font-medium rounded transition-all duration-200 ${
                            isChildActive
                              ? "text-[#ef6c1a] bg-white/5 font-semibold"
                              : "text-gray-400 hover:text-white hover:bg-white/5"
                          }`}
                        >
                          <ChevronRight
                            className={`h-3 w-3 ${isChildActive ? "text-[#ef6c1a]" : "text-gray-500"}`}
                          />
                          {child.label}
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          }

          // Flat Normal Link Component Node
          return (
            <Link
              key={link.label}
              to={link.to}
              className={`flex items-center justify-between w-full px-3 py-2 text-sm font-medium rounded-md transition-all duration-200 ${
                isExactActive
                  ? "bg-[#1e40af] text-white"
                  : "text-gray-300 hover:bg-white/5 hover:text-white"
              }`}
            >
              <span>{link.label}</span>
              {isExactActive && <ChevronRight className="h-4 w-4 text-white/80" />}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}

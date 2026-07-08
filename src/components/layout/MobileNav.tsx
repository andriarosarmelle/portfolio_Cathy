import { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";

const navSections = [
  { id: "about", label: "À propos" },
  { id: "education", label: "Diplômes" },
  { id: "experience", label: "Expériences" },
  { id: "projects", label: "Projets" },
  { id: "skills", label: "Compétences" },
  { id: "certifications", label: "Certifications" },
  { id: "contact", label: "Contact" },
];

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`
        no-print
        fixed top-0 z-50 w-full border-b border-gray-200/60 bg-white/80 backdrop-blur-lg
        transition-shadow lg:hidden
        ${scrolled ? "shadow-sm" : ""}
      `}
      aria-label="Navigation principale"
    >
      <div className="flex items-center justify-between gap-3 px-4 py-3 sm:px-5">
        <span className="min-w-0 truncate text-sm font-bold tracking-tight text-gray-900">
          Cathy Nomeniavo
        </span>
        <button
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          className="flex min-h-[44px] min-w-[44px] shrink-0 items-center justify-center rounded-lg p-2 text-gray-600 hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-400"
          aria-label="Menu principal"
        >
          <ChevronDown
            size={20}
            className={`transition-transform ${open ? "rotate-180" : ""}`}
            aria-hidden="true"
          />
        </button>
      </div>
      {open && (
        <div
          id="mobile-menu"
          className="max-h-[calc(100vh-68px)] space-y-1 overflow-y-auto border-t border-gray-100 bg-white px-4 py-3 animate-fade-in sm:px-5"
        >
          {navSections.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              onClick={() => setOpen(false)}
              className="block rounded-md px-3 py-2.5 text-sm font-medium text-gray-600 hover:bg-rose-50 hover:text-rose-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-400"
            >
              {s.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}

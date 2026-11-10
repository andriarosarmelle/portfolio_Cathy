import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const sections = ["about", "experience", "projects", "demo", "skills", "contact"] as const;

export function SectionNavigation() {
  const { t } = useLanguage();
  const [active, setActive] = useState<string>("");
  const [open, setOpen] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const section = [...sections].reverse().find((id) => {
        const element = document.getElementById(id);
        return element && element.getBoundingClientRect().top <= 180;
      });
      setActive(section ?? "");
    };
    const onScroll = () => { if (!frame) frame = requestAnimationFrame(update); };
    const onResize = () => {
      if (window.innerWidth >= 1024) setOpen(false);
      onScroll();
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <div className="section-navigation" onKeyDown={(event) => {
      if (event.key === "Escape" && open) {
        setOpen(false);
        toggle.current?.focus();
      }
    }}>
      <button ref={toggle} type="button" className="mobile-menu-toggle" aria-expanded={open} aria-controls="section-menu" onClick={() => setOpen(!open)}>
        <span>{t.nav.sections}</span>
        {open ? <X size={18} aria-hidden="true" /> : <Menu size={18} aria-hidden="true" />}
      </button>
      <nav id="section-menu" className={`section-menu ${open ? "is-open" : ""}`} aria-label={t.nav.sections}>
        {sections.map((id, index) => (
          <a key={id} href={`#${id}`} className="nav-link" aria-current={active === id ? "location" : undefined} onClick={() => {
            setOpen(false);
            const target = document.getElementById(id);
            if (target) {
              target.setAttribute("tabindex", "-1");
              target.focus({ preventScroll: true });
            }
          }}>
            <span className="nav-index" aria-hidden="true">0{index + 1}</span>
            {t.nav.links[id]}
            <ArrowUpRight size={14} aria-hidden="true" />
          </a>
        ))}
      </nav>
    </div>
  );
}

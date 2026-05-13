import { ArrowRight, ChevronDown, FileDown } from "lucide-react";

interface HeroProps {
  name: string;
  title: string;
  subtitle: string;
  tagline: string;
  cvUrl?: string;
}

export function Hero({ name, title, subtitle, tagline, cvUrl }: HeroProps) {
  const handlePrintCv = () => window.print();

  return (
    <section className="mb-12 animate-fade-in sm:mb-16">
      <div className="min-w-0 rounded-2xl border border-gray-100 bg-white p-5 shadow-sm sm:rounded-3xl sm:p-8 lg:p-12">
        <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-rose-500 sm:text-xs sm:tracking-[0.25em]">
          Portfolio
        </p>
        <h1 className="mt-3 break-words text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
          {name}
        </h1>
        <div className="mt-3 flex flex-wrap gap-2">
          <span className="rounded-full bg-gray-900 px-3 py-1 text-xs font-semibold text-white">
            {title}
          </span>
          <span className="rounded-full border border-rose-200 bg-rose-50 px-3 py-1 text-xs font-semibold text-rose-600">
            {subtitle}
          </span>
        </div>
        <p className="mt-5 max-w-2xl text-sm leading-relaxed text-gray-600 sm:text-base">
          {tagline}
        </p>
        <nav className="no-print mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap" aria-label="Actions principales">
          <a
            href="#contact"
            className="inline-flex min-h-[44px] w-full items-center justify-center gap-2 rounded-full bg-gray-900 px-5 py-3 text-center text-sm font-medium text-white transition hover:bg-gray-800 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-400 focus-visible:ring-offset-2 sm:w-auto"
          >
            Me contacter
            <ArrowRight size={15} aria-hidden="true" />
          </a>
          <a
            href="#experience"
            className="inline-flex min-h-[44px] w-full items-center justify-center gap-2 rounded-full border border-gray-200 bg-white px-5 py-3 text-center text-sm font-medium text-gray-700 transition hover:border-gray-900 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-400 focus-visible:ring-offset-2 sm:w-auto"
          >
            Voir mes expériences
            <ChevronDown size={15} aria-hidden="true" />
          </a>
          {cvUrl ? (
            <a
              href={cvUrl}
              download
              className="inline-flex min-h-[44px] w-full items-center justify-center gap-2 rounded-full border border-rose-200 bg-rose-50 px-5 py-3 text-center text-sm font-medium text-rose-700 transition hover:border-rose-300 hover:bg-rose-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-400 focus-visible:ring-offset-2 sm:w-auto"
            >
              Télécharger le CV
              <FileDown size={15} aria-hidden="true" />
            </a>
          ) : (
            <button
              type="button"
              onClick={handlePrintCv}
              className="inline-flex min-h-[44px] w-full items-center justify-center gap-2 rounded-full border border-rose-200 bg-rose-50 px-5 py-3 text-center text-sm font-medium text-rose-700 transition hover:border-rose-300 hover:bg-rose-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-400 focus-visible:ring-offset-2 sm:w-auto"
            >
              Sauvegarder en PDF
              <FileDown size={15} aria-hidden="true" />
            </button>
          )}
        </nav>
      </div>
    </section>
  );
}

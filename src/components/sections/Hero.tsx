import { ArrowRight, ChevronDown } from "lucide-react";

interface HeroProps {
  name: string;
  title: string;
  subtitle: string;
  about: string;
}

export function Hero({ name, title, subtitle, about }: HeroProps) {
  return (
    <section className="mb-16 mt-8 lg:mt-0 animate-fade-in">
      <div className="rounded-3xl border border-gray-100 bg-white p-8 shadow-sm lg:p-12">
        <p className="text-xs font-bold uppercase tracking-[0.25em] text-rose-500">
          Portfolio
        </p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-gray-900 lg:text-5xl">
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
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-gray-600">
          {about}
        </p>
        <nav className="mt-6 flex flex-wrap gap-3" aria-label="Navigation principale">
          <a
            href="#contact"
            className="inline-flex min-h-[44px] items-center gap-2 rounded-full bg-gray-900 px-5 py-3 text-sm font-medium text-white transition hover:bg-gray-800 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-400 focus-visible:ring-offset-2"
          >
            Me contacter
            <ArrowRight size={15} aria-hidden="true" />
          </a>
          <a
            href="#experience"
            className="inline-flex min-h-[44px] items-center gap-2 rounded-full border border-gray-200 bg-white px-5 py-3 text-sm font-medium text-gray-700 transition hover:border-gray-900 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-400 focus-visible:ring-offset-2"
          >
            Voir mes expériences
            <ChevronDown size={15} aria-hidden="true" />
          </a>
        </nav>
      </div>
    </section>
  );
}

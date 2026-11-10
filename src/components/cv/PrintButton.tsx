import { Printer } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

interface PrintButtonProps {
  cvUrl?: string;
}

export function PrintButton({ cvUrl }: PrintButtonProps) {
  const { t } = useLanguage();
  const printCv = () => window.print();

  return (
    <div className="no-print flex flex-wrap gap-2">
      <button
        type="button"
        onClick={printCv}
        className="inline-flex h-10 items-center gap-2 rounded-lg bg-slate-950 px-4 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 dark:bg-white dark:text-slate-950 dark:hover:bg-slate-100"
      >
        <Printer className="h-4 w-4" aria-hidden="true" />
        {t.print.print}
      </button>
      {cvUrl ? (
        <a
          href={cvUrl}
          download
          className="inline-flex h-10 items-center rounded-lg border border-slate-200 bg-white px-4 text-sm font-semibold text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:border-cyan-300 hover:text-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 dark:border-white/10 dark:bg-white/10 dark:text-white dark:hover:border-cyan-300/50"
        >
          {t.print.download}
        </a>
      ) : null}
    </div>
  );
}

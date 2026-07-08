import { Download, Printer } from "lucide-react";

interface PrintButtonProps {
  cvUrl?: string;
}

export function PrintButton({ cvUrl }: PrintButtonProps) {
  const printCv = () => window.print();

  return (
    <div className="no-print flex flex-wrap gap-2">
      <button
        type="button"
        onClick={printCv}
        className="inline-flex h-10 items-center gap-2 rounded-lg bg-slate-950 px-4 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 dark:bg-white dark:text-slate-950 dark:hover:bg-slate-100"
      >
        <Printer className="h-4 w-4" aria-hidden="true" />
        Export PDF
      </button>
      <a
        href={cvUrl ?? "#print"}
        download={cvUrl ? true : undefined}
        onClick={(event) => {
          if (!cvUrl) {
            event.preventDefault();
            printCv();
          }
        }}
        className="inline-flex h-10 items-center gap-2 rounded-lg border border-slate-200 bg-white px-4 text-sm font-semibold text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:border-cyan-300 hover:text-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 dark:border-white/10 dark:bg-white/10 dark:text-white dark:hover:border-cyan-300/50"
      >
        <Download className="h-4 w-4" aria-hidden="true" />
        Télécharger CV
      </a>
    </div>
  );
}

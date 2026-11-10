import { useLanguage } from "@/i18n/LanguageContext";

export function SkipLink() {
  const { t } = useLanguage();
  return (
    <a
      href="#main-content"
      className="sr-only z-50 rounded-md bg-slate-950 px-4 py-2 text-sm font-semibold text-white shadow-lg focus-visible:not-sr-only focus-visible:absolute focus-visible:left-4 focus-visible:top-4 dark:bg-white dark:text-slate-950"
    >
      {t.skipLink}
    </a>
  );
}

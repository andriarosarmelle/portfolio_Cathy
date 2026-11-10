import { useMemo, useState } from "react";
import { Activity, Bird, Database, HeartPulse, Leaf, Network, RefreshCw, RotateCcw } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { oneHealth } from "@/i18n/oneHealth";
import { cn } from "@/utils/cn";

type Domain = "human" | "animal" | "environment";
type Status = "new" | "investigating" | "resolved";
type View = "overview" | "signals" | "flows";

interface Signal {
  id: number;
  signal: number;
  region: number;
  domain: Domain;
  cases: number;
  week: number;
  status: Status;
}

const initialSignals = (): Signal[] => [
  { id: 1, signal: 0, region: 0, domain: "human", cases: 14, week: 44, status: "investigating" },
  { id: 2, signal: 1, region: 1, domain: "animal", cases: 32, week: 44, status: "new" },
  { id: 3, signal: 2, region: 2, domain: "environment", cases: 3, week: 43, status: "new" },
  { id: 4, signal: 3, region: 3, domain: "human", cases: 21, week: 43, status: "resolved" },
  { id: 5, signal: 4, region: 4, domain: "animal", cases: 9, week: 42, status: "investigating" },
  { id: 6, signal: 5, region: 1, domain: "environment", cases: 5, week: 44, status: "new" },
  { id: 7, signal: 6, region: 0, domain: "animal", cases: 4, week: 42, status: "resolved" },
  { id: 8, signal: 7, region: 2, domain: "environment", cases: 2, week: 41, status: "resolved" },
];

const initialFlows = () => [1240, 1236, 1198, 1198];

const domainIcon = { human: HeartPulse, animal: Bird, environment: Leaf } as const;
const domainTone: Record<Domain, string> = {
  human: "bg-sky-100 text-sky-800 dark:bg-sky-500/20 dark:text-sky-200",
  animal: "bg-amber-100 text-amber-800 dark:bg-amber-500/20 dark:text-amber-200",
  environment: "bg-emerald-100 text-emerald-800 dark:bg-emerald-500/20 dark:text-emerald-200",
};
const statusTone: Record<Status, string> = {
  new: "bg-rose-100 text-rose-700 dark:bg-rose-500/20 dark:text-rose-200",
  investigating: "bg-amber-100 text-amber-800 dark:bg-amber-500/20 dark:text-amber-200",
  resolved: "bg-slate-200 text-slate-700 dark:bg-white/10 dark:text-slate-300",
};
const nextStatus: Record<Status, Status> = { new: "investigating", investigating: "resolved", resolved: "new" };

const chip = "rounded-full px-3 py-1 text-xs font-semibold transition";
const chipIdle = "bg-white text-slate-600 ring-1 ring-slate-200 hover:text-slate-900 dark:bg-white/10 dark:text-slate-300 dark:ring-white/10";

export function OneHealthDemoSection() {
  const { lang } = useLanguage();
  const t = oneHealth[lang];
  const [view, setView] = useState<View>("overview");
  const [signals, setSignals] = useState(initialSignals);
  const [flows, setFlows] = useState(initialFlows);
  const [domain, setDomain] = useState<Domain | "all">("all");
  const [region, setRegion] = useState<number | "all">("all");
  const [notice, setNotice] = useState("");
  const [lastSync, setLastSync] = useState("08:15");
  const [selected, setSelected] = useState<number | null>(null);
  const [history, setHistory] = useState<Record<number, Status[]>>({});

  const active = signals.filter((s) => s.status !== "resolved");
  const regionsAffected = new Set(active.map((s) => s.region)).size;
  const regionCounts = useMemo(
    () => t.regions.map((_, index) => active.filter((s) => s.region === index).length),
    [active, t.regions]
  );
  const maxRegion = Math.max(1, ...regionCounts);
  const visible = signals.filter((s) => (domain === "all" || s.domain === domain) && (region === "all" || s.region === region));

  const advance = (id: number) => {
    const signal = signals.find((s) => s.id === id);
    if (!signal) return;
    const next = nextStatus[signal.status];
    setSignals((prev) => prev.map((s) => (s.id === id ? { ...s, status: next } : s)));
    setHistory((prev) => ({ ...prev, [id]: [...(prev[id] ?? []), next] }));
    setNotice(t.noticeAdvance);
  };
  const sync = () => {
    const added = 12 + Math.floor(Math.random() * 20);
    setFlows((prev) => prev.map((value) => value + added));
    setLastSync(new Date().toTimeString().slice(0, 5));
    setNotice(t.noticeSync(added));
  };
  const reset = () => {
    setSignals(initialSignals());
    setFlows(initialFlows());
    setDomain("all");
    setRegion("all");
    setView("overview");
    setSelected(null);
    setHistory({});
    setLastSync("08:15");
    setNotice(t.resetDone);
  };

  const viewIcons = { overview: Activity, signals: Network, flows: Database } as const;

  return (
    <section id="onehealth" className="cv-section scroll-mt-24" aria-labelledby="onehealth-title">
      <p className="section-kicker">{t.kicker}</p>
      <h2 id="onehealth-title" className="section-title">{t.title}</h2>
      <p className="mb-6 max-w-3xl text-sm leading-7 text-slate-600 dark:text-slate-300">{t.intro}</p>

      <div className="no-print overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 dark:border-white/10 dark:bg-slate-950/40">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200 bg-white px-4 py-2 text-xs font-semibold text-slate-600 dark:border-white/10 dark:bg-slate-900 dark:text-slate-300">
          <span className="inline-flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-teal-500" aria-hidden="true" />{t.fictional}</span>
          <button type="button" onClick={reset} className="inline-flex items-center gap-1.5 text-cyan-700 hover:underline dark:text-cyan-300">
            <RotateCcw className="h-3.5 w-3.5" aria-hidden="true" />{t.reset}
          </button>
        </div>

        <div className="grid md:grid-cols-[210px_1fr]">
          <nav aria-label={t.menu} className="bg-[#1d3a5c] p-4 text-white">
            <p className="text-lg font-bold leading-tight">{t.appName}</p>
            <p className="mb-4 text-xs text-sky-200">{t.appTagline}</p>
            <ul className="flex flex-wrap gap-1 md:block md:space-y-1">
              {(Object.keys(t.views) as View[]).map((key) => {
                const Icon = viewIcons[key];
                return (
                  <li key={key}>
                    <button
                      type="button"
                      onClick={() => setView(key)}
                      aria-current={view === key ? "page" : undefined}
                      className={cn(
                        "flex w-full items-center gap-2 rounded-lg px-3 py-2 text-left text-sm font-medium transition",
                        view === key ? "bg-white/15 text-white" : "text-sky-100 hover:bg-white/10"
                      )}
                    >
                      <Icon className="h-4 w-4" aria-hidden="true" />{t.views[key]}
                    </button>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="min-w-0 p-4 sm:p-6">
            {view === "overview" && (
              <div className="space-y-5">
                <div className="rounded-2xl bg-gradient-to-br from-[#1d3a5c] to-teal-700 p-6 text-white">
                  <span className="rounded-full bg-white/15 px-3 py-1 text-[10px] font-bold tracking-widest">{t.badge}</span>
                  <h3 className="mt-3 text-xl font-bold sm:text-2xl">{t.heroTitle}</h3>
                  <p className="mt-2 max-w-2xl text-sm leading-6 text-sky-50">{t.heroText}</p>
                  <div className="mt-5 grid gap-3 sm:grid-cols-3">
                    {(Object.keys(domainIcon) as Domain[]).map((key) => {
                      const Icon = domainIcon[key];
                      return (
                        <button
                          key={key}
                          type="button"
                          onClick={() => { setDomain(key); setView("signals"); }}
                          className="rounded-xl bg-white/10 p-4 text-left ring-1 ring-white/20 transition hover:bg-white/20"
                        >
                          <Icon className="h-5 w-5" aria-hidden="true" />
                          <strong className="mt-2 block text-sm">{t.domains[key]}</strong>
                          <span className="mt-1 block text-xs leading-5 text-sky-50">{t.domainText[key]}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-3">
                  {[[t.kpiActive, active.length], [t.kpiRegions, regionsAffected], [t.kpiResolved, signals.length - active.length]].map(([label, value]) => (
                    <div key={label} className="rounded-xl bg-white p-4 ring-1 ring-slate-200 dark:bg-slate-900 dark:ring-white/10">
                      <p className="text-2xl font-bold">{value}</p>
                      <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">{label}</p>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap items-center justify-between gap-4 rounded-xl border border-teal-200 bg-teal-50 p-4 dark:border-teal-500/30 dark:bg-teal-500/10">
                  <div>
                    <h3 className="text-sm font-semibold text-teal-900 dark:text-teal-100">{t.attention}</h3>
                    <p className="mt-1 text-xs leading-5 text-teal-800 dark:text-teal-200">{signals.some((s) => s.status === "new") ? t.attentionText : t.allClear}</p>
                  </div>
                  {signals.find((s) => s.status === "new") && (
                    <button type="button" className="rounded-lg bg-teal-700 px-3 py-2 text-xs font-semibold text-white hover:bg-teal-800" onClick={() => {
                      const first = signals.find((s) => s.status === "new");
                      if (first) { setDomain("all"); setRegion("all"); setSelected(first.id); setView("signals"); }
                    }}>{t.openSignal} →</button>
                  )}
                </div>

                <div className="rounded-xl bg-white p-4 ring-1 ring-slate-200 dark:bg-slate-900 dark:ring-white/10">
                  <h3 className="mb-3 text-sm font-semibold">{t.byRegion}</h3>
                  <p className="mb-3 text-xs text-slate-500 dark:text-slate-400">{t.regionHint}</p>
                  <ul className="space-y-2">
                    {t.regions.map((name, index) => (
                      <li key={name}>
                        <button type="button" onClick={() => { setRegion(index); setDomain("all"); setSelected(null); setView("signals"); }} className="flex w-full items-center gap-3 rounded text-left text-xs hover:text-teal-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-teal-600 dark:hover:text-teal-300">
                        <span className="w-28 shrink-0 text-slate-600 dark:text-slate-300">{name}</span>
                        <span className="h-2.5 flex-1 overflow-hidden rounded-full bg-slate-100 dark:bg-white/10">
                          <span className="block h-full rounded-full bg-teal-500 transition-all" style={{ width: `${(regionCounts[index] / maxRegion) * 100}%` }} />
                        </span>
                        <span className="w-4 text-right font-semibold">{regionCounts[index]}</span>
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {view === "signals" && (
              <div>
                <div className="mb-3 flex flex-wrap items-center gap-1.5" role="group" aria-label={t.filterDomain}>
                  {(["all", "human", "animal", "environment"] as const).map((key) => (
                    <button key={key} type="button" aria-pressed={domain === key} onClick={() => setDomain(key)} className={cn(chip, domain === key ? "bg-teal-600 text-white" : chipIdle)}>
                      {t.domains[key]}
                    </button>
                  ))}
                  <select
                    aria-label={t.region}
                    value={region}
                    onChange={(event) => setRegion(event.target.value === "all" ? "all" : Number(event.target.value))}
                    className="ml-auto rounded-lg border border-slate-200 bg-white px-2 py-1.5 text-xs dark:border-white/10 dark:bg-slate-900"
                  >
                    <option value="all">{t.allRegions}</option>
                    {t.regions.map((name, index) => <option key={name} value={index}>{name}</option>)}
                  </select>
                </div>
                <ul className="space-y-2">
                  {visible.length === 0 && <li className="py-6 text-center text-sm text-slate-500">{t.empty} <button type="button" onClick={() => { setDomain("all"); setRegion("all"); }} className="font-semibold text-teal-700 underline dark:text-teal-300">{t.resetFilters}</button></li>}
                  {visible.map((s) => {
                    const Icon = domainIcon[s.domain];
                    return (
                      <li key={s.id} className="rounded-xl bg-white p-3 ring-1 ring-slate-200 dark:bg-slate-900 dark:ring-white/10">
                        <div className="flex flex-wrap items-center justify-between gap-3">
                        <div className="flex min-w-0 items-center gap-3">
                          <span className={cn("grid h-9 w-9 shrink-0 place-items-center rounded-lg", domainTone[s.domain])}><Icon className="h-4 w-4" aria-hidden="true" /></span>
                          <div className="min-w-0">
                            <p className="text-sm font-semibold">{t.signals[s.signal]}</p>
                            <p className="text-xs text-slate-500 dark:text-slate-400">{t.regions[s.region]} · {s.cases} {t.cases} · {t.week} {s.week}</p>
                          </div>
                        </div>
                        <div className="flex flex-wrap items-center gap-3">
                          <span className={cn("rounded-full px-2.5 py-1 text-[11px] font-semibold", statusTone[s.status])}>{t.status[s.status]}</span>
                          <button type="button" aria-expanded={selected === s.id} aria-controls={`onehealth-detail-${s.id}`} onClick={() => setSelected(selected === s.id ? null : s.id)} className="text-[11px] font-semibold text-slate-700 underline underline-offset-2 dark:text-slate-200">{selected === s.id ? t.hideDetails : t.details}</button>
                          <button type="button" onClick={() => advance(s.id)} className="text-[11px] font-semibold text-teal-700 underline underline-offset-2 dark:text-teal-300">{t.advance[s.status]}</button>
                        </div>
                        </div>
                        {selected === s.id && (
                          <div id={`onehealth-detail-${s.id}`} className="mt-4 grid gap-4 border-t border-slate-200 pt-4 text-xs leading-5 dark:border-white/10 sm:grid-cols-2">
                            <div>
                              <h4 className="font-semibold">{t.context}</h4>
                              <p className="mt-1 text-slate-600 dark:text-slate-300">{t.contextText}</p>
                              <p className="mt-3 font-semibold text-teal-700 dark:text-teal-300">{t.nextStep}</p>
                              <p className="mt-1 text-slate-600 dark:text-slate-300">{t.nextSteps[s.status]}</p>
                            </div>
                            <div>
                              <h4 className="font-semibold">{t.history}</h4>
                              <ol className="mt-1 space-y-1 text-slate-600 dark:text-slate-300">
                                <li>• {t.historyInitial}</li>
                                {(history[s.id] ?? []).map((status, index) => <li key={index}>• {t.historyChanged} : {t.status[status]}</li>)}
                              </ol>
                            </div>
                          </div>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </div>
            )}

            {view === "flows" && (
              <div>
                <h3 className="text-base font-semibold">{t.flowsTitle}</h3>
                <p className="mb-4 mt-1 text-sm text-slate-600 dark:text-slate-300">{t.flowsText}</p>
                <ol className="grid gap-3 sm:grid-cols-4">
                  {t.sources.map((name, index) => (
                    <li key={name} className="relative rounded-xl bg-white p-4 ring-1 ring-slate-200 dark:bg-slate-900 dark:ring-white/10">
                      <span className="text-[10px] font-bold text-slate-400">0{index + 1}</span>
                      <p className="text-sm font-semibold">{name}</p>
                      <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">{t.sourceRoles[index]}</p>
                      <p className="mt-3 text-lg font-bold text-teal-700 dark:text-teal-300">{flows[index].toLocaleString(lang)}</p>
                      <p className="text-[11px] text-slate-500">{t.records}</p>
                    </li>
                  ))}
                </ol>
                <div className="mt-4 flex flex-wrap items-center gap-3">
                  <button type="button" onClick={sync} className="inline-flex items-center gap-2 rounded-lg bg-teal-600 px-3 py-2 text-xs font-semibold text-white transition hover:bg-teal-700">
                    <RefreshCw className="h-4 w-4" aria-hidden="true" />{t.syncNow}
                  </button>
                  <span className="text-xs text-slate-500 dark:text-slate-400">{t.lastSync} : {lastSync}</span>
                </div>
              </div>
            )}
          </div>
        </div>

        <p role="status" aria-live="polite" className={cn("border-t border-slate-200 px-5 py-3 text-xs text-slate-600 dark:border-white/10 dark:text-slate-300", !notice && "hidden")}>{notice}</p>
      </div>
    </section>
  );
}

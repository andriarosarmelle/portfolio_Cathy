import { useState, type FormEvent } from "react";
import { BarChart3, Bell, ClipboardList, LayoutDashboard, Lock, PlusCircle, RotateCcw, Send, Settings } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { rpsDemo } from "@/i18n/rpsDemo";
import { cn } from "@/utils/cn";

type Page = "dashboard" | "surveys" | "create" | "results" | "alerts" | "settings";
type Role = "admin" | "manager";
type SurveyStatus = "open" | "upcoming" | "closed";

interface Survey {
  id: number;
  name?: string;
  nameIdx?: number;
  status: SurveyStatus;
  responses: number;
  target: number;
  start: string;
  reportValidated: boolean;
}

const DAY = 86_400_000;
const isoIn = (days: number) => new Date(Date.now() + days * DAY).toISOString().slice(0, 10);

const initialSurveys = (): Survey[] => [
  { id: 1, nameIdx: 0, status: "open", responses: 38, target: 60, start: isoIn(-10), reportValidated: false },
  { id: 2, nameIdx: 1, status: "upcoming", responses: 0, target: 45, start: isoIn(7), reportValidated: false },
  { id: 3, nameIdx: 2, status: "closed", responses: 52, target: 55, start: isoIn(-60), reportValidated: false },
];

const initialAlerts = () => [{ id: 1, idx: 0, read: false }, { id: 2, idx: 1, read: true }];
const dimensionScores = [62, 74, 58, 69];
const restrictedPages: Page[] = ["alerts", "settings"];

const statusTone: Record<SurveyStatus, string> = {
  open: "bg-emerald-100 text-emerald-800 dark:bg-emerald-500/20 dark:text-emerald-200",
  upcoming: "bg-violet-100 text-violet-800 dark:bg-violet-500/20 dark:text-violet-200",
  closed: "bg-slate-200 text-slate-700 dark:bg-white/10 dark:text-slate-300",
};

const inputClass =
  "w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 outline-none transition focus:border-teal-500 focus:ring-2 focus:ring-teal-400/40 dark:border-white/10 dark:bg-slate-950 dark:text-white";
const card = "rounded-xl bg-white p-4 ring-1 ring-slate-200 dark:bg-slate-900 dark:ring-white/10";

const emptyForm = { name: "", start: "", target: "30" };

function Toggle({ label, checked, onChange }: { label: string; checked: boolean; onChange: () => void }) {
  return (
    <label className="flex cursor-pointer items-center justify-between gap-4 py-3 text-sm">
      <span>{label}</span>
      <input type="checkbox" role="switch" checked={checked} onChange={onChange} className="h-5 w-9 cursor-pointer accent-teal-600" />
    </label>
  );
}

export function RpsAdminDemoSection() {
  const { lang } = useLanguage();
  const t = rpsDemo[lang];
  const [page, setPage] = useState<Page>("dashboard");
  const [role, setRole] = useState<Role>("admin");
  const [surveys, setSurveys] = useState(initialSurveys);
  const [alerts, setAlerts] = useState(initialAlerts);
  const [form, setForm] = useState(emptyForm);
  const [settings, setSettings] = useState({ emails: true, anonymity: true });
  const [notice, setNotice] = useState("");

  const nameOf = (s: Survey) => s.name ?? t.initialSurveys[s.nameIdx ?? 0];
  const count = (status: SurveyStatus) => surveys.filter((s) => s.status === status).length;
  const pendingReports = surveys.filter((s) => s.status === "closed" && s.responses > 0 && !s.reportValidated).length;
  const unread = alerts.filter((a) => !a.read).length;
  const isAdmin = role === "admin";
  const monday = new Date(Date.now() - ((new Date().getDay() + 6) % 7) * DAY);

  const goTo = (next: Page) => {
    if (restrictedPages.includes(next) && !isAdmin) return;
    setPage(next);
  };
  const changeRole = (next: Role) => {
    setRole(next);
    if (next !== "admin" && restrictedPages.includes(page)) setPage("dashboard");
  };
  const update = (id: number, patch: Partial<Survey>) => setSurveys((prev) => prev.map((s) => (s.id === id ? { ...s, ...patch } : s)));

  const remind = (s: Survey) => {
    const missing = s.target - s.responses;
    setNotice(settings.emails ? t.noticeRemind(missing) : t.noticeEmailsOff);
  };
  const closeSurvey = (id: number) => { update(id, { status: "closed" }); setNotice(t.noticeClose); };
  const validateReport = (id: number) => { update(id, { reportValidated: true }); setNotice(t.noticeReport); };
  const simulateResponses = (survey: Survey) => {
    const added = Math.min(5, survey.target - survey.responses);
    if (added <= 0) { setNotice(t.noResponsesLeft); return; }
    update(survey.id, { responses: survey.responses + added });
    setNotice(t.noticeResponses(added));
  };
  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!form.name.trim() || !Number.isInteger(Number(form.target)) || Number(form.target) < 1) {
      event.currentTarget.reportValidity();
      return;
    }
    setSurveys((prev) => [...prev, { id: Date.now(), name: form.name.trim(), status: "upcoming", responses: 0, target: Number(form.target), start: form.start || isoIn(14), reportValidated: false }]);
    setForm(emptyForm);
    setNotice(t.noticeCreated);
    setPage("surveys");
  };
  const reset = () => {
    setSurveys(initialSurveys()); setAlerts(initialAlerts()); setForm(emptyForm); setRole("admin"); setPage("dashboard");
    setSettings({ emails: true, anonymity: true }); setNotice(t.resetDone);
  };

  const navItem = (id: Page, Icon: typeof Bell, restricted = false) => {
    const locked = restricted && !isAdmin;
    return (
      <li key={id}>
        <button
          type="button"
          onClick={() => goTo(id)}
          disabled={locked}
          aria-current={page === id ? "page" : undefined}
          title={locked ? t.lockedHint : undefined}
          className={cn(
            "flex w-full items-center gap-2 rounded-lg px-3 py-2 text-left text-sm font-medium transition",
            page === id ? "bg-white/15 text-white" : "text-slate-300 hover:bg-white/10",
            locked && "cursor-not-allowed opacity-50 hover:bg-transparent"
          )}
        >
          <Icon className="h-4 w-4" aria-hidden="true" />{t.nav[id]}
          {locked && <Lock className="ml-auto h-3.5 w-3.5" aria-hidden="true" />}
        </button>
      </li>
    );
  };

  return (
    <section id="rps-demo" className="cv-section scroll-mt-24" aria-labelledby="rps-demo-title">
      <p className="section-kicker">{t.kicker}</p>
      <h2 id="rps-demo-title" className="section-title">{t.title}</h2>
      <p className="mb-6 max-w-3xl text-sm leading-7 text-slate-600 dark:text-slate-300">{t.intro}</p>

      <div className="no-print overflow-hidden rounded-2xl border border-slate-200 bg-[#f4ede3] text-slate-900 dark:border-white/10 dark:bg-slate-950/40 dark:text-white">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200 bg-white px-4 py-2 text-xs font-semibold text-slate-600 dark:border-white/10 dark:bg-slate-900 dark:text-slate-300">
          <span className="inline-flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-orange-500" aria-hidden="true" />{t.fictional}</span>
          <button type="button" onClick={reset} className="inline-flex items-center gap-1.5 text-cyan-700 hover:underline dark:text-cyan-300">
            <RotateCcw className="h-3.5 w-3.5" aria-hidden="true" />{t.reset}
          </button>
        </div>

        <div className="grid md:grid-cols-[230px_1fr]">
          <aside className="flex flex-col bg-[#1f2428] p-4 text-white">
            <p className="font-serif text-xl font-bold">{t.appName}<span className="text-orange-400">°</span></p>
            <p className="font-serif text-[11px] text-slate-300">{t.appTagline}</p>
            <span className="mt-3 w-fit rounded-md bg-orange-400 px-2 py-1 text-[10px] font-bold tracking-wide text-slate-950">{t.env}</span>

            <nav aria-label={t.title} className="mt-4">
              <ul className="space-y-1">
                {navItem("dashboard", LayoutDashboard)}
                {navItem("surveys", ClipboardList)}
                {navItem("create", PlusCircle)}
                {navItem("results", BarChart3)}
              </ul>
              <p className="mb-1 mt-4 px-3 text-[10px] font-semibold tracking-widest text-slate-400">{t.restricted}</p>
              <ul className="space-y-1">
                {navItem("alerts", Bell, true)}
                {navItem("settings", Settings, true)}
              </ul>
            </nav>

            <div className="mt-6 border-t border-white/15 pt-4 md:mt-auto">
              <div className="flex items-center gap-3">
                <span className="grid h-9 w-9 place-items-center rounded-full bg-teal-700 text-xs font-bold">CD</span>
                <div className="min-w-0">
                  <p className="truncate text-sm font-semibold">{t.user}</p>
                  <p className="truncate text-[11px] text-slate-400">{t.email}</p>
                </div>
              </div>
              <label className="mt-3 block text-[11px] text-slate-400">
                {t.role}
                <select value={role} onChange={(event) => changeRole(event.target.value as Role)} className="mt-1 w-full rounded-md border border-white/20 bg-[#1f2428] px-2 py-1.5 text-xs text-white">
                  <option value="admin">{t.roles.admin}</option>
                  <option value="manager">{t.roles.manager}</option>
                </select>
              </label>
            </div>
          </aside>

          <div className="min-w-0 p-4 sm:p-6">
            <h3 className="font-serif text-2xl font-bold">{t.nav[page]}</h3>
            {page === "dashboard" && (
              <div className="mt-1">
                <p className="mt-3 text-sm font-medium text-slate-800 dark:text-slate-100">{t.welcome}</p>
                <p className="text-sm text-slate-600 dark:text-slate-300">{t.weekOf} {monday.toLocaleDateString(lang, { day: "numeric", month: "long", year: "numeric" })}</p>
                <div className="mt-4 grid grid-cols-2 gap-3 lg:grid-cols-4">
                  {[[count("open"), t.stats.open], [count("upcoming"), t.stats.upcoming], [pendingReports, t.stats.reports], [unread, t.stats.alerts]].map(([value, label]) => (
                    <div key={label} className={card}>
                      <p className="text-2xl font-bold">{value}</p>
                      <p className="mt-1 text-xs text-slate-600 dark:text-slate-300">{label}</p>
                    </div>
                  ))}
                </div>
                <div className={cn(card, "mt-4")}>
                  <p className="text-sm font-semibold">{t.dashboardHint}</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    <button type="button" onClick={() => goTo("surveys")} className="rounded-lg bg-teal-700 px-3 py-2 text-xs font-semibold text-white hover:bg-teal-800">{t.reviewSurveys} →</button>
                    <button type="button" onClick={() => goTo("results")} className="rounded-lg border border-slate-300 px-3 py-2 text-xs font-semibold hover:border-teal-600 dark:border-white/20">{t.reviewReports} →</button>
                    {isAdmin && <button type="button" onClick={() => goTo("alerts")} className="rounded-lg border border-slate-300 px-3 py-2 text-xs font-semibold hover:border-teal-600 dark:border-white/20">{t.reviewAlerts} ({unread}) →</button>}
                  </div>
                </div>
              </div>
            )}

            {page === "surveys" && (
              <ul className="mt-4 space-y-2">
                {surveys.map((s) => (
                  <li key={s.id} className={cn(card, "flex flex-wrap items-center justify-between gap-3")}>
                    <div className="min-w-0">
                      <p className="truncate text-sm font-semibold">{nameOf(s)}</p>
                      <p className="text-xs text-slate-500 dark:text-slate-400">{s.start} · {s.responses}/{s.target} {t.responses}</p>
                    </div>
                    <div className="flex flex-wrap items-center gap-3">
                      {s.status === "upcoming" && <button type="button" onClick={() => { update(s.id, { status: "open" }); setNotice(t.noticeStarted); }} className="text-[11px] font-semibold text-teal-700 underline underline-offset-2 dark:text-teal-300">{t.start}</button>}
                      {s.status === "open" && (
                        <>
                          <button type="button" onClick={() => simulateResponses(s)} disabled={s.responses >= s.target} className="text-[11px] font-semibold text-teal-700 underline underline-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:text-teal-300">{t.addResponses}</button>
                          <button type="button" onClick={() => remind(s)} className="inline-flex items-center gap-1 text-[11px] font-semibold text-teal-700 underline underline-offset-2 dark:text-teal-300">
                            <Send className="h-3.5 w-3.5" aria-hidden="true" />{t.remind}
                          </button>
                          <button type="button" onClick={() => closeSurvey(s.id)} className="text-[11px] font-semibold text-slate-600 underline underline-offset-2 dark:text-slate-300">{t.close}</button>
                        </>
                      )}
                      <span className={cn("rounded-full px-2.5 py-1 text-[11px] font-semibold", statusTone[s.status])}>{t.statusLabels[s.status]}</span>
                    </div>
                  </li>
                ))}
              </ul>
            )}

            {page === "create" && (
              <form onSubmit={submit} className={cn(card, "mt-4 max-w-md")}>
                <p className="mb-4 text-xs text-slate-500 dark:text-slate-400">{t.createHint}</p>
                <div className="space-y-3">
                  <input required pattern={".*\\S.*"} value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder={t.surveyName} aria-label={t.surveyName} className={inputClass} />
                  <input type="date" value={form.start} onChange={(e) => setForm({ ...form, start: e.target.value })} aria-label={t.startDate} className={inputClass} />
                  <input required type="number" min={1} value={form.target} onChange={(e) => setForm({ ...form, target: e.target.value })} aria-label={t.audience} placeholder={t.audience} className={inputClass} />
                  <button type="submit" className="w-full rounded-lg bg-teal-700 px-3 py-2 text-sm font-semibold text-white transition hover:bg-teal-800">{t.submit}</button>
                </div>
              </form>
            )}

            {page === "results" && (
              <div className="mt-4 space-y-4">
                {surveys.every((s) => s.responses === 0) && <p className="text-sm text-slate-500">{t.noResults}</p>}
                {surveys.filter((s) => s.responses > 0).map((s) => {
                  const rate = Math.round((s.responses / s.target) * 100);
                  return (
                    <article key={s.id} className={card}>
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <h4 className="text-sm font-semibold">{nameOf(s)}</h4>
                        {s.status === "closed" && (!settings.anonymity || s.responses >= 5) && (s.reportValidated
                          ? <span className="text-[11px] font-semibold text-emerald-700 dark:text-emerald-300">{t.reportDone}</span>
                          : <button type="button" onClick={() => validateReport(s.id)} className="rounded-md bg-teal-700 px-2.5 py-1 text-[11px] font-semibold text-white hover:bg-teal-800">{t.validateReport}</button>)}
                      </div>
                      <p className="mt-3 text-xs text-slate-500 dark:text-slate-400">{t.participation} : {rate}%</p>
                      <div className="mt-1 h-2 overflow-hidden rounded-full bg-slate-100 dark:bg-white/10"><div className="h-full rounded-full bg-orange-400" style={{ width: `${rate}%` }} /></div>
                      {settings.anonymity && s.responses < 5 ? <p className="mt-4 text-xs text-slate-600 dark:text-slate-300">{t.privacyThreshold}</p> : s.nameIdx === undefined ? <p className="mt-4 text-xs text-slate-600 dark:text-slate-300">{t.resultsUnavailable}</p> : <>
                      <p className="mb-2 mt-4 text-xs font-semibold">{t.dimensions}</p>
                      <p className="mb-2 text-xs text-slate-500 dark:text-slate-400">{t.sampleResults}</p>
                      <ul className="space-y-1.5">
                        {t.dimensionNames.map((name, index) => (
                          <li key={name} className="flex items-center gap-3 text-xs">
                            <span className="w-36 shrink-0 text-slate-600 dark:text-slate-300">{name}</span>
                            <span className="h-2 flex-1 overflow-hidden rounded-full bg-slate-100 dark:bg-white/10"><span className="block h-full rounded-full bg-teal-600" style={{ width: `${dimensionScores[index]}%` }} /></span>
                            <span className="w-8 text-right font-semibold">{dimensionScores[index]}%</span>
                          </li>
                        ))}
                      </ul>
                      </>}
                    </article>
                  );
                })}
              </div>
            )}

            {page === "alerts" && (
              <ul className="mt-4 space-y-2">
                {alerts.length === 0 && <li className="text-sm text-slate-500">{t.noAlerts}</li>}
                {alerts.map((a) => (
                  <li key={a.id} className={cn(card, "flex flex-wrap items-center justify-between gap-3")}>
                    <p className="min-w-0 text-sm">{t.initialAlerts[a.idx]}</p>
                    <div className="flex items-center gap-3">
                      {!a.read && <button type="button" onClick={() => setAlerts((prev) => prev.map((x) => (x.id === a.id ? { ...x, read: true } : x)))} className="text-[11px] font-semibold text-teal-700 underline underline-offset-2 dark:text-teal-300">{t.markRead}</button>}
                      <span className={cn("rounded-full px-2.5 py-1 text-[11px] font-semibold", a.read ? statusTone.closed : statusTone.upcoming)}>{a.read ? t.read : t.unread}</span>
                    </div>
                  </li>
                ))}
              </ul>
            )}

            {page === "settings" && (
              <div className={cn(card, "mt-4 max-w-xl divide-y divide-slate-200 dark:divide-white/10")}>
                <p className="pb-3 text-xs text-slate-500 dark:text-slate-400">{t.settingsText}</p>
                <Toggle label={t.settingEmails} checked={settings.emails} onChange={() => { setSettings({ ...settings, emails: !settings.emails }); setNotice(t.noticeSetting); }} />
                <Toggle label={t.settingAnon} checked={settings.anonymity} onChange={() => { setSettings({ ...settings, anonymity: !settings.anonymity }); setNotice(t.noticeSetting); }} />
              </div>
            )}
          </div>
        </div>

        <p role="status" aria-live="polite" className={cn("border-t border-slate-200 px-5 py-3 text-xs text-slate-600 dark:border-white/10 dark:text-slate-300", !notice && "hidden")}>{notice}</p>
      </div>
    </section>
  );
}

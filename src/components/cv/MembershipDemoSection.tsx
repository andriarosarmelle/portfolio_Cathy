import { useMemo, useState, type FormEvent } from "react";
import { CheckCircle2, Clock, Mail, RotateCcw, Search, Send, UserPlus, Users } from "lucide-react";
import { cn } from "@/utils/cn";
import { useLanguage } from "@/i18n/LanguageContext";

type Status = "pending" | "active" | "expiring" | "expired";

interface Member {
  id: number;
  organization: string;
  contact: string;
  email: string;
  expiresOn: string | null;
  approved: boolean;
  renewalSent: boolean;
}

const DAY = 86_400_000;
const inDays = (days: number) => new Date(Date.now() + days * DAY).toISOString().slice(0, 10);

const createInitialMembers = (): Member[] => [
  { id: 1, organization: "Centre communautaire Les Lilas", contact: "Marie Tremblay", email: "marie@leslilas.example", expiresOn: inDays(400), approved: true, renewalSent: false },
  { id: 2, organization: "Maison des jeunes du quartier", contact: "Karim Benali", email: "karim@mdj.example", expiresOn: inDays(25), approved: true, renewalSent: false },
  { id: 3, organization: "Cuisine collective Soleil", contact: "Sophie Gagnon", email: "sophie@soleil.example", expiresOn: inDays(48), approved: true, renewalSent: false },
  { id: 4, organization: "Bibliothèque municipale", contact: "Luc Pelletier", email: "luc@biblio.example", expiresOn: inDays(-12), approved: true, renewalSent: false },
  { id: 5, organization: "Clinique de santé Nord", contact: "Aïcha Diallo", email: "aicha@cliniquenord.example", expiresOn: inDays(210), approved: true, renewalSent: false },
  { id: 6, organization: "Jardin partagé Verdure", contact: "Paul Roy", email: "paul@verdure.example", expiresOn: null, approved: false, renewalSent: false },
];

function getStatus(member: Member): Status {
  if (!member.approved || !member.expiresOn) return "pending";
  const days = Math.round((new Date(member.expiresOn).getTime() - Date.now()) / DAY);
  if (days < 0) return "expired";
  return days <= 60 ? "expiring" : "active";
}

const statusStyle: Record<Status, string> = {
  active: "bg-emerald-50 text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-300",
  expiring: "bg-amber-50 text-amber-700 dark:bg-amber-500/15 dark:text-amber-300",
  expired: "bg-rose-50 text-rose-700 dark:bg-rose-500/15 dark:text-rose-300",
  pending: "bg-slate-100 text-slate-600 dark:bg-white/10 dark:text-slate-300",
};

const filterKeys = ["all", "pending", "expiring", "expired"] as const;
type Filter = (typeof filterKeys)[number];

const inputClass =
  "w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 outline-none transition focus:border-cyan-500 focus:ring-2 focus:ring-cyan-400/40 dark:border-white/10 dark:bg-slate-950 dark:text-white";

const emptyForm = { organization: "", contact: "", email: "" };

export function MembershipDemoSection() {
  const { t } = useLanguage();
  const d = t.demo;
  const statusLabel: Record<Status, string> = {
    active: d.statusActive,
    expiring: d.statusExpiring,
    expired: d.statusExpired,
    pending: d.pending,
  };
  const filterLabel: Record<Filter, string> = {
    all: d.filterAll,
    pending: d.pending,
    expiring: d.toRenew,
    expired: d.statusExpired,
  };

  const [members, setMembers] = useState<Member[]>(createInitialMembers);
  const [filter, setFilter] = useState<Filter>("all");
  const [query, setQuery] = useState("");
  const [form, setForm] = useState(emptyForm);
  const [notice, setNotice] = useState("");

  const counts = useMemo(() => {
    const c = { total: members.length, pending: 0, toRenew: 0 };
    members.forEach((m) => {
      const s = getStatus(m);
      if (s === "pending") c.pending++;
      if (s === "expiring" || s === "expired") c.toRenew++;
    });
    return c;
  }, [members]);

  const visible = members.filter((m) => {
    const matchesFilter = filter === "all" || getStatus(m) === filter;
    const q = query.trim().toLowerCase();
    return matchesFilter && (!q || `${m.organization} ${m.contact} ${m.email}`.toLowerCase().includes(q));
  });

  const renewable = members.filter((m) => ["expiring", "expired"].includes(getStatus(m)) && !m.renewalSent);

  const submitApplication = (event: FormEvent) => {
    event.preventDefault();
    setMembers((prev) => [...prev, { id: Date.now(), ...form, expiresOn: null, approved: false, renewalSent: false }]);
    setForm(emptyForm);
    setNotice(d.noticeApplication);
  };

  const approve = (id: number) =>
    setMembers((prev) => prev.map((m) => (m.id === id ? { ...m, approved: true, expiresOn: inDays(730) } : m)));

  const sendRenewals = () => {
    const ids = new Set(renewable.map((m) => m.id));
    setMembers((prev) => prev.map((m) => (ids.has(m.id) ? { ...m, renewalSent: true } : m)));
    setNotice(d.noticeRenewals(ids.size));
  };

  const renew = (id: number) => {
    setMembers((prev) => prev.map((m) => (m.id === id ? { ...m, expiresOn: inDays(730), renewalSent: false } : m)));
    setNotice(d.noticeRenewed);
  };

  const reset = () => {
    setMembers(createInitialMembers());
    setFilter("all");
    setQuery("");
    setForm(emptyForm);
    setNotice(d.noticeReset);
  };

  return (
    <section id="demo" className="cv-section scroll-mt-24" aria-labelledby="demo-title">
      <p className="section-kicker">{d.kicker}</p>
      <h2 id="demo-title" className="section-title">{d.title}</h2>
      <p className="mb-6 max-w-3xl text-sm leading-6 text-slate-600 dark:text-slate-300">{d.intro}</p>

      <div className="demo-panel overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 dark:border-white/10 dark:bg-slate-950/40">
        <div className="demo-stats grid grid-cols-3 divide-x divide-slate-200 border-b border-slate-200 bg-white dark:divide-white/10 dark:border-white/10 dark:bg-slate-900">
          {[
            { icon: Users, label: d.members, value: counts.total },
            { icon: Clock, label: d.pending, value: counts.pending },
            { icon: Mail, label: d.toRenew, value: counts.toRenew },
          ].map((s) => (
            <div key={s.label} className="flex items-center gap-3 p-4">
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-cyan-50 text-cyan-700 dark:bg-cyan-500/15 dark:text-cyan-300">
                <s.icon className="h-4 w-4" aria-hidden="true" />
              </span>
              <div>
                <p className="text-xl font-bold leading-none">{s.value}</p>
                <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">{s.label}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="grid gap-0 lg:grid-cols-[1fr_320px]">
          <div className="p-4 sm:p-5">
            <div className="mb-4 flex flex-wrap items-center gap-2">
              <div className="relative min-w-[180px] flex-1">
                <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" aria-hidden="true" />
                <input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder={d.search}
                  aria-label={d.search}
                  className={cn(inputClass, "pl-9")}
                />
              </div>
              <button
                type="button"
                onClick={sendRenewals}
                disabled={renewable.length === 0}
                className="inline-flex items-center gap-2 rounded-lg bg-slate-950 px-3 py-2 text-xs font-semibold text-white transition hover:bg-cyan-700 disabled:cursor-not-allowed disabled:opacity-40 dark:bg-white dark:text-slate-950 dark:hover:bg-cyan-200"
              >
                <Send className="h-4 w-4" aria-hidden="true" />
                {d.sendRenewals} ({renewable.length})
              </button>
              <button
                type="button"
                onClick={reset}
                className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-500 transition hover:text-cyan-700 dark:border-white/10 dark:bg-white/10 dark:text-slate-300 dark:hover:text-cyan-200"
                aria-label={d.reset}
                title={d.reset}
              >
                <RotateCcw className="h-4 w-4" aria-hidden="true" />
              </button>
            </div>

            <div className="mb-4 flex flex-wrap gap-1.5" role="group" aria-label={d.filterAll}>
              {filterKeys.map((key) => (
                <button
                  key={key}
                  type="button"
                  onClick={() => setFilter(key)}
                  aria-pressed={filter === key}
                  className={cn(
                    "rounded-full px-3 py-1 text-xs font-semibold transition",
                    filter === key
                      ? "bg-cyan-600 text-white"
                      : "bg-white text-slate-600 ring-1 ring-slate-200 hover:text-slate-900 dark:bg-white/10 dark:text-slate-300 dark:ring-white/10"
                  )}
                >
                  {filterLabel[key]}
                </button>
              ))}
            </div>

            <ul className="space-y-2">
              {visible.length === 0 && <li className="py-6 text-center text-sm text-slate-500">{d.noResult}</li>}
              {visible.map((m) => {
                const status = getStatus(m);
                return (
                  <li key={m.id} className="flex flex-wrap items-center justify-between gap-3 rounded-xl bg-white p-3 ring-1 ring-slate-200 dark:bg-slate-900 dark:ring-white/10">
                    <div className="min-w-0">
                      <p className="truncate text-sm font-semibold">{m.organization}</p>
                      <p className="truncate text-xs text-slate-500 dark:text-slate-400">
                        {m.contact} · {m.email}
                      </p>
                      {m.expiresOn && (
                        <p className="mt-0.5 text-[11px] text-slate-400">
                          {d.deadline} {m.expiresOn}
                        </p>
                      )}
                    </div>
                    <div className="flex items-center gap-2">
                      {m.renewalSent && (
                        <button type="button" onClick={() => renew(m.id)} className="text-[11px] font-semibold text-cyan-700 underline underline-offset-2 dark:text-cyan-300">
                          {d.simulateLink}
                        </button>
                      )}
                      {status === "pending" && (
                        <button type="button" onClick={() => approve(m.id)} className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-700 dark:text-emerald-300">
                          <CheckCircle2 className="h-3.5 w-3.5" aria-hidden="true" /> {d.approve}
                        </button>
                      )}
                      <span className={cn("rounded-full px-2.5 py-1 text-[11px] font-semibold", statusStyle[status])}>
                        {m.renewalSent ? d.sent : statusLabel[status]}
                      </span>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>

          <form onSubmit={submitApplication} className="border-t border-slate-200 bg-white p-4 sm:p-5 lg:border-l lg:border-t-0 dark:border-white/10 dark:bg-slate-900">
            <h3 className="flex items-center gap-2 text-sm font-semibold">
              <UserPlus className="h-4 w-4 text-cyan-600" aria-hidden="true" />
              {d.formTitle}
            </h3>
            <p className="mb-4 mt-1 text-xs text-slate-500 dark:text-slate-400">{d.formHint}</p>
            <div className="space-y-3">
              <input required value={form.organization} onChange={(e) => setForm({ ...form, organization: e.target.value })} placeholder={d.organization} aria-label={d.organization} className={inputClass} />
              <input required value={form.contact} onChange={(e) => setForm({ ...form, contact: e.target.value })} placeholder={d.contact} aria-label={d.contact} className={inputClass} />
              <input required type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder={d.email} aria-label={d.email} className={inputClass} />
              <button type="submit" className="w-full rounded-lg bg-cyan-600 px-3 py-2 text-sm font-semibold text-white transition hover:bg-cyan-700">
                {d.submit}
              </button>
            </div>
          </form>
        </div>

        <p role="status" aria-live="polite" className={cn("border-t border-slate-200 px-5 py-3 text-xs text-slate-600 dark:border-white/10 dark:text-slate-300", !notice && "hidden")}>
          {notice}
        </p>
      </div>
    </section>
  );
}

import { useRef, useState, type FormEvent } from "react";
import { ArrowLeft, ArrowUpRight, Check, Eye, EyeOff, GraduationCap, HeartHandshake, LockKeyhole, LogOut, Mail, RotateCcw, Search } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { madAction } from "@/i18n/madAction";
import styles from "./MadActionDemoSection.module.css";

const initialStudents = () => [
  { id: 1, name: "Étudiant A", initials: "A", course: 0, year: "L3", approved: false },
  { id: 2, name: "Étudiant B", initials: "B", course: 1, year: "L2", approved: true },
  { id: 3, name: "Étudiant C", initials: "C", course: 2, year: "L1", approved: false },
];

export function MadActionDemoSection() {
  const { lang } = useLanguage();
  const t = madAction[lang];
  const [connected, setConnected] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [students, setStudents] = useState(initialStudents);
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState<number | null>(null);
  const [notice, setNotice] = useState<"signupNotice" | "resetNotice" | "validated" | "resetDone" | null>(null);
  const heading = useRef<HTMLHeadingElement>(null);
  const pending = students.filter((student) => !student.approved).length;
  const visible = students.filter((student) => `${lang === "en" ? `Student ${student.initials}` : student.name} ${t.courses[student.course]} ${student.year}`.toLocaleLowerCase().includes(query.trim().toLocaleLowerCase()));
  const detail = students.find((student) => student.id === selected);
  const enter = (event: FormEvent) => {
    event.preventDefault();
    setConnected(true);
    setNotice(null);
    requestAnimationFrame(() => heading.current?.focus());
  };
  const reset = () => {
    setStudents(initialStudents()); setQuery(""); setSelected(null); setConnected(false); setShowPassword(false); setNotice("resetDone");
  };

  return (
    <section id="madaction" className="cv-section scroll-mt-24" aria-labelledby="madaction-title">
      <p className="section-kicker">{t.kicker}</p>
      <h2 id="madaction-title" className="section-title">{t.title}</h2>
      <p className="mb-6 max-w-3xl text-sm leading-7 text-slate-600 dark:text-slate-300">{t.intro}</p>
      <div className={`${styles.demo} no-print`}>
        <div className={styles.banner}><span><span className={styles.dot} />{t.fictional}</span><button type="button" onClick={reset}><RotateCcw size={14} aria-hidden="true" />{t.reset}</button></div>
        <div className={styles.topbar}>
          <div className={styles.screenTitle}><ArrowLeft size={22} aria-hidden="true" /><h3 ref={heading} tabIndex={-1}>{connected ? t.dashboard : t.login}</h3></div>
          <button type="button" onClick={() => {
            if (connected) { setConnected(false); setNotice(null); setShowPassword(false); requestAnimationFrame(() => heading.current?.focus()); }
            else setNotice("signupNotice");
          }}>{connected ? <><LogOut size={16} aria-hidden="true" />{t.logout}</> : t.signup}</button>
        </div>
        <div className={styles.content}>
          {!connected ? (
            <form className={styles.loginCard} onSubmit={enter}>
              <div className={styles.brand}>
                <div className={styles.brandMark}><HeartHandshake size={58} strokeWidth={1.3} aria-hidden="true" /></div>
                <p>MAD<span>’action</span></p>
                <span>Mission · Amitié · Développement</span>
              </div>
              <label className={styles.field}><span className="sr-only">{t.email}</span><Mail size={20} aria-hidden="true" /><input aria-label={t.email} type="email" value="demo@madaction.example" readOnly autoComplete="off" /></label>
              <div className={styles.field}><LockKeyhole size={20} aria-hidden="true" /><input aria-label={t.password} type={showPassword ? "text" : "password"} value="demo-fictive" readOnly autoComplete="off" /><button type="button" aria-label={showPassword ? t.hide : t.show} aria-pressed={showPassword} onClick={() => setShowPassword(!showPassword)}>{showPassword ? <Eye size={20} aria-hidden="true" /> : <EyeOff size={20} aria-hidden="true" />}</button></div>
              <button className={styles.forgot} type="button" onClick={() => setNotice("resetNotice")}>{t.forgot}</button>
              <button className={styles.connect} type="submit">{t.enter}<ArrowUpRight size={18} aria-hidden="true" /></button>
              <p className={styles.hint}>{t.hint}</p>
            </form>
          ) : (
            <div className={styles.dashboard}>
              <div className={styles.dashboardHeading}><span className={styles.miniBrand}>MAD’action</span><p>{t.welcome}</p></div>
              <div className={styles.stats}>{[[t.total, students.length], [t.pending, pending], [t.approved, students.length - pending]].map(([label, value]) => <div key={label}><strong>{value}</strong><span>{label}</span></div>)}</div>
              <div className={styles.listHeader}><h4>{t.all}</h4><label className={styles.search}><Search size={17} aria-hidden="true" /><input aria-label={t.search} placeholder={t.search} value={query} onChange={(event) => setQuery(event.target.value)} /></label></div>
              <ul className={styles.students}>
                {visible.map((student) => <li key={student.id}><span className={styles.avatar}>{student.initials}</span><div className={styles.studentInfo}><strong>{lang === "en" ? `Student ${student.initials}` : student.name}</strong><span>{t.courses[student.course]} · {student.year}</span></div><span className={student.approved ? styles.valid : styles.pending}>{student.approved ? t.valid : t.awaiting}</span><button type="button" className={styles.detailsButton} aria-expanded={selected === student.id} aria-controls="madaction-detail" onClick={() => setSelected(selected === student.id ? null : student.id)}>{t.details}<ArrowUpRight size={15} aria-hidden="true" /></button></li>)}
              </ul>
              {visible.length === 0 && <p className={styles.empty}>{t.empty}</p>}
              {detail && <div id="madaction-detail" className={styles.detail}><div><GraduationCap size={24} aria-hidden="true" /><h4>{lang === "en" ? `Student ${detail.initials}` : detail.name}</h4></div><dl><div><dt>{t.program}</dt><dd>{t.courses[detail.course]}</dd></div><div><dt>{t.year}</dt><dd>{detail.year}</dd></div><div><dt>{t.progress}</dt><dd>{detail.approved ? t.valid : t.progressValue}</dd></div></dl><div className={styles.detailActions}>{!detail.approved && <button type="button" className={styles.connect} onClick={() => { setStudents((previous) => previous.map((student) => student.id === detail.id ? { ...student, approved: true } : student)); setNotice("validated"); }}><Check size={16} aria-hidden="true" />{t.approve}</button>}<button type="button" onClick={() => setSelected(null)}>{t.close}</button></div></div>}
            </div>
          )}
        </div>
        <p role="status" aria-live="polite" className={notice ? styles.notice : "sr-only"}>{notice ? t[notice] : ""}</p>
      </div>
    </section>
  );
}

import type { FormEvent } from "react";
import { Send, Download, Printer, Mail, Phone, MapPin } from "lucide-react";
import type { SocialLink } from "@/types";

interface ContactFormProps {
  email: string;
  phone: string;
  address: string;
  socialLinks: SocialLink[];
  cvUrl?: string;
}

export function ContactForm({ email, phone, address, socialLinks, cvUrl }: ContactFormProps) {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = String(form.get("name") || "").trim();
    const senderEmail = String(form.get("email") || "").trim();
    const subject = String(form.get("subject") || "Contact depuis le portfolio").trim();
    const message = String(form.get("message") || "").trim();
    const body = [
      `Nom: ${name}`,
      `Email: ${senderEmail}`,
      "",
      message,
    ].join("\n");

    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const handlePrintCv = () => window.print();

  return (
    <section id="contact" className="no-print scroll-mt-24">
      <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm sm:rounded-3xl sm:p-8 lg:p-10">
        <div className="grid gap-6 lg:grid-cols-5 lg:gap-8">
          <div className="space-y-4 lg:col-span-3">
            <p className="text-sm leading-relaxed text-gray-600">
              Vous avez un projet, une opportunité de stage, une mission
              freelance ou une collaboration en tête ? N'hésitez pas à me
              contacter. Je suis disponible pour échanger sur vos besoins.
            </p>
            <form
              onSubmit={handleSubmit}
              className="space-y-4"
              aria-label="Formulaire de contact"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="sr-only">Nom</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Votre nom"
                      aria-label="Votre nom"
                      className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none transition focus-visible:border-rose-300 focus-visible:ring-2 focus-visible:ring-rose-100"
                      required
                    />
                </div>
                <div>
                  <label htmlFor="email" className="sr-only">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Votre email"
                      aria-label="Votre email"
                      className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none transition focus-visible:border-rose-300 focus-visible:ring-2 focus-visible:ring-rose-100"
                      required
                    />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="sr-only">Sujet</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      placeholder="Sujet"
                      aria-label="Sujet du message"
                      className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none transition focus-visible:border-rose-300 focus-visible:ring-2 focus-visible:ring-rose-100"
                      required
                    />
              </div>
              <div>
                <label htmlFor="message" className="sr-only">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      placeholder="Votre message..."
                      aria-label="Votre message"
                      className="w-full resize-none rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none transition focus-visible:border-rose-300 focus-visible:ring-2 focus-visible:ring-rose-100"
                      required
                    />
              </div>
            <button
              type="submit"
              className="inline-flex min-h-[44px] w-full items-center justify-center gap-2 rounded-full bg-gray-900 px-6 py-3 text-center text-sm font-medium text-white transition hover:bg-gray-800 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-400 focus-visible:ring-offset-2 sm:w-auto"
            >
              Envoyer le message
              <Send size={14} aria-hidden="true" />
            </button>
            </form>
          </div>
          <aside className="space-y-4 lg:col-span-2">
             <div className="rounded-2xl border border-gray-100 bg-gray-50/50 p-5">
               <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400">
                 Coordonnées
               </h4>
               <address className="mt-3 space-y-3 not-italic">
                 <a
                   href={`mailto:${email}`}
                   className="flex min-h-[44px] min-w-0 items-center gap-3 rounded-lg border border-gray-100 p-2.5 text-sm text-gray-600 transition hover:border-rose-200 hover:bg-rose-50/50 focus-visible:rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-400"
                 >
                   <Mail size={16} className="shrink-0 text-rose-400" aria-hidden="true" />
                   <span className="min-w-0 break-all">{email}</span>
                 </a>
                 <a
                   href={`tel:${phone.replace(/\s/g, "")}`}
                   className="flex min-h-[44px] min-w-0 items-center gap-3 rounded-lg border border-gray-100 p-2.5 text-sm text-gray-600 transition hover:border-rose-200 hover:bg-rose-50/50 focus-visible:rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-400"
                 >
                   <Phone size={16} className="shrink-0 text-rose-400" aria-hidden="true" />
                   <span>{phone}</span>
                 </a>
                 <div className="flex min-h-[44px] min-w-0 items-center gap-3 rounded-lg border border-gray-100 p-2.5 text-sm text-gray-600">
                   <MapPin size={16} className="shrink-0 text-rose-400" aria-hidden="true" />
                   <span>{address}</span>
                 </div>
               </address>
             </div>
            <div className="rounded-2xl border border-gray-100 bg-gray-50/50 p-5">
              <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400">
                Réseaux
              </h4>
                    <nav className="mt-3" aria-label="Réseaux sociaux">
                      <ul className="m-0 flex list-none flex-col gap-2 p-0 sm:flex-row sm:flex-wrap lg:flex-col xl:flex-row">
                        {socialLinks.map((s) => (
                          <li key={s.label} className="min-w-0 flex-1">
                            <a
                              href={s.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex min-h-[44px] w-full items-center justify-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-3 text-xs font-medium text-gray-600 transition hover:border-gray-900 hover:bg-gray-900 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-400 focus-visible:ring-offset-2"
                            >
                              <s.icon size={14} aria-hidden="true" />
                              {s.label}
                              <span className="sr-only">({s.label})</span>
                            </a>
                          </li>
                        ))}
                      </ul>
                    </nav>
            </div>
                  {cvUrl ? (
                    <a
                      href={cvUrl}
                      download
                      className="flex w-full min-h-[44px] items-center justify-center gap-2 rounded-full bg-rose-400 py-3 text-sm font-semibold text-white transition hover:bg-rose-500 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-400 focus-visible:ring-offset-2"
                    >
                      <Download size={15} aria-hidden="true" />
                      Télécharger mon CV
                    </a>
                  ) : (
                    <button
                      type="button"
                      onClick={handlePrintCv}
                      className="flex w-full min-h-[44px] items-center justify-center gap-2 rounded-full bg-rose-400 py-3 text-sm font-semibold text-white transition hover:bg-rose-500 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-400 focus-visible:ring-offset-2"
                    >
                      <Printer size={15} aria-hidden="true" />
                      Sauvegarder en PDF
                    </button>
                  )}
          </aside>
        </div>
      </div>
    </section>
  );
}

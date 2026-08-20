import { motion } from 'framer-motion';
import { ArrowRight, CalendarDays, Clock, Mail, MapPin, Phone, Send, Star, Trophy, UsersRound, Handshake, User, Pencil } from 'lucide-react';
import contactData from '../data/pages/contact.json';

const iconMap = { MapPin, Phone, Mail, Clock, CalendarDays, UsersRound, Trophy, Handshake };

export default function Contact() {
  return (
    <div className="min-h-screen bg-brand-ivory text-brand-black">
      <section className="relative overflow-hidden pt-12 pb-0 md:pt-16">
        <img
          src="/hero.png"
          alt=""
          className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-[0.08]"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-brand-ivory via-brand-ivory/96 to-brand-ivory"></div>
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_18%,rgba(182,139,74,0.16),transparent_28%),radial-gradient(circle_at_86%_22%,rgba(182,139,74,0.12),transparent_28%)]"></div>

        <div className="relative z-10 mx-auto max-w-[1500px] px-4 pb-8 md:px-8 md:pb-10">
          <div className="grid gap-6 lg:grid-cols-[1fr_0.9fr] lg:items-end">
            <div>
              <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] sm:tracking-[0.24em] text-brand-bronze">
                {contactData.eyebrow}
              </p>
              <h1 className="max-w-3xl font-serif text-3xl leading-tight text-brand-black sm:text-4xl md:text-6xl md:leading-[0.95]">
                {contactData.title}
                <span className="mt-1 block font-serif italic text-brand-gold">{contactData.titleHighlight}</span>
              </h1>
              <div className="mt-3 h-px w-80 max-w-full bg-gradient-to-r from-brand-gold via-brand-gold/75 to-transparent"></div>
            </div>

            <div className="border-l-0 border-brand-gold/55 pl-0 text-sm sm:border-l sm:pl-6 leading-7 text-brand-black/72 md:text-base whitespace-pre-wrap">
              {contactData.subtitle}
            </div>
          </div>

          <div className="mt-6 grid gap-5 md:mt-8 lg:grid-cols-[0.9fr_1.15fr]">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55 }}
              className="rounded-2xl border border-brand-gold/35 bg-white/78 p-4 sm:p-5 shadow-2xl shadow-brand-bronze/10 backdrop-blur-md md:p-7"
            >
              <div className="mb-5 flex items-center gap-3 sm:gap-4">
                <div className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full border border-brand-gold/60 bg-brand-beige text-brand-bronze shadow-lg shadow-brand-bronze/10">
                  <Send size={25} />
                </div>
                <div>
                  <h2 className="text-xl font-serif sm:text-2xl text-brand-black">Send us a Message</h2>
                  <p className="text-sm text-brand-bronze">We&apos;ll get back to you shortly!</p>
                </div>
              </div>

              <form className="space-y-4">
                <div className="grid gap-3 sm:gap-4 md:grid-cols-2">
                  <label className="relative block">
                    <User size={15} className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-bronze" />
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="h-12 w-full rounded-md border border-brand-gold/20 bg-white/70 pl-11 pr-4 text-sm text-brand-black outline-none transition-colors placeholder:text-brand-black/45 focus:border-brand-gold/70"
                    />
                  </label>
                  <label className="relative block">
                    <Mail size={15} className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-bronze" />
                    <input
                      type="email"
                      placeholder="Your Email"
                      className="h-12 w-full rounded-md border border-brand-gold/20 bg-white/70 pl-11 pr-4 text-sm text-brand-black outline-none transition-colors placeholder:text-brand-black/45 focus:border-brand-gold/70"
                    />
                  </label>
                </div>

                <label className="relative block">
                  <Phone size={15} className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-bronze" />
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="h-12 w-full rounded-md border border-brand-gold/20 bg-white/70 pl-11 pr-4 text-sm text-brand-black outline-none transition-colors placeholder:text-brand-black/45 focus:border-brand-gold/70"
                  />
                </label>

                <label className="relative block">
                  <Pencil size={15} className="absolute left-4 top-4 text-brand-bronze" />
                  <textarea
                    rows={5}
                    placeholder="Type your message here..."
                    className="w-full resize-none rounded-md border border-brand-gold/20 bg-white/70 py-4 pl-11 pr-4 text-sm text-brand-black outline-none transition-colors placeholder:text-brand-black/45 focus:border-brand-gold/70"
                  ></textarea>
                </label>

                <button
                  type="button"
                  className="flex h-12 w-full min-w-0 sm:mx-auto sm:w-auto sm:min-w-56 items-center justify-center gap-4 rounded-md bg-brand-gold px-8 text-xs font-bold uppercase tracking-wide text-white shadow-xl shadow-brand-gold/20 transition-transform hover:-translate-y-0.5 hover:bg-brand-bronze"
                >
                  Send Message <ArrowRight size={16} />
                </button>
              </form>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.08 }}
              className="rounded-2xl border border-brand-gold/35 bg-white/78 p-4 shadow-2xl shadow-brand-bronze/10 backdrop-blur-md"
            >
              <div className="mb-3 flex items-center gap-3 text-brand-black">
                <div className="flex h-7 w-7 items-center justify-center rounded-full border border-brand-gold text-brand-bronze">
                  <MapPin size={16} />
                </div>
                <h2 className="text-xl font-serif">Find Us</h2>
                <span className="h-px flex-1 bg-brand-gold/45"></span>
                <span className="text-brand-gold">...</span>
              </div>

              <div className="overflow-hidden rounded-xl border border-brand-gold/20 grayscale-[45%]">
                <iframe
                  title="Sankey Events location"
                  src={contactData.mapUrl}
                  className="h-56 w-full border-0 sm:h-64 md:h-72"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>

              <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4">
                {contactData.contactCards.map((card) => {
                  const Icon = iconMap[card.icon] || MapPin;
                  return (
                  <div key={card.title} className="rounded-lg border border-brand-gold/20 bg-brand-ivory/65 p-4">
                    <div className="mb-2 flex items-center gap-2 text-brand-bronze">
                      <Icon size={18} />
                      <h3 className="text-sm font-serif text-brand-bronze">{card.title}</h3>
                    </div>
                    <div className="space-y-1 text-xs leading-5 text-brand-black/70">
                      {card.lines.map((item) => {
                        const text = item.line || item;
                        if (typeof text === 'string' && text.includes('@')) {
                          return (
                            <p key={text}>
                              <a href={`mailto:${text}`} className="hover:text-brand-gold transition-colors">
                                {text}
                              </a>
                            </p>
                          );
                        }
                        if (typeof text === 'string' && text.match(/^[\d\+\s\-]+$/) && text.length > 7) {
                          return (
                            <p key={text}>
                              <a href={`tel:${text.replace(/[\s\-]/g, '')}`} className="hover:text-brand-gold transition-colors">
                                {text}
                              </a>
                            </p>
                          );
                        }
                        return <p key={text}>{text}</p>;
                      })}
                    </div>
                  </div>
                  )
                })}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="border-t border-brand-gold/20 bg-brand-beige/55">
        <div className="mx-auto grid max-w-[1500px] gap-5 px-4 py-6 sm:grid-cols-2 md:grid-cols-[1.5fr_repeat(4,1fr)] md:gap-6 md:px-8">
          <div className="flex items-center gap-4 text-brand-black/85">
            <Star size={34} className="shrink-0 text-brand-gold" />
            <p className="text-base font-serif sm:text-lg leading-tight">
              {contactData.footerText1}<br />
              <span className="text-brand-bronze">{contactData.footerText2}</span>
            </p>
          </div>

          {contactData.stats.map((stat) => {
            const Icon = iconMap[stat.icon] || CalendarDays;
            return (
            <div key={stat.label} className="flex items-center gap-4 border-brand-gold/25 md:border-l md:pl-6">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-brand-gold bg-white/50 text-brand-bronze">
                <Icon size={22} />
              </div>
              <div>
                <p className="text-xl font-serif sm:text-2xl font-bold text-brand-bronze">{stat.value}</p>
                <p className="text-xs text-brand-black/65">{stat.label}</p>
              </div>
            </div>
            )
          })}
        </div>
      </section>
    </div>
  );
}

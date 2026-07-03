import { motion } from 'framer-motion';
import { Calendar, Building, HeartHandshake, Scissors, Speaker, Star, Zap, Camera, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const featuredServices = [
  {
    icon: Calendar,
    title: 'Event Management',
    desc: 'Seamless planning & execution for every type of event.',
    image: '/new year 2012/image copy.png'
  },
  {
    icon: Building,
    title: 'Corporate Events',
    desc: 'Professional events that inspire & engage your workforce.',
    image: '/sony show 2013/image copy 3.png'
  },
  {
    icon: HeartHandshake,
    title: 'Wedding Events',
    desc: 'Beautifully crafted weddings to cherish forever.',
    image: '/shravana banthu sharavana 2013/image copy 3.png'
  },
  {
    icon: Scissors,
    title: 'Fashion Shows',
    desc: 'Stylish, creative & perfectly executed runway shows.',
    image: '/Dacss Granite/image copy 2.png'
  }
];

const compactServices = [
  {
    icon: Speaker,
    title: 'Audio Visuals',
    desc: 'High-end AV solutions for impactful and immersive experiences.',
    image: '/samsung 2013/image.png'
  },
  {
    icon: Star,
    title: 'Celebrity Management',
    desc: 'Connect, collaborate & create unforgettable star moments.',
    image: '/Tamanna Event/image copy 2.png'
  },
  {
    icon: Zap,
    title: 'Brand Activations',
    desc: 'Engaging campaigns that bring your brand story to life.',
    image: '/hangyo ice cream 2013/image.png'
  },
  {
    icon: Camera,
    title: 'Photography & Video',
    desc: 'Capturing memories with cinematic brilliance and precision.',
    image: '/Dacss Granite/image copy 2.png'
  }
];

export default function ServicesSection() {
  return (
    <section className="relative overflow-hidden bg-brand-ivory pt-8 pb-14 md:pt-10">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_48%,rgba(182,139,74,0.14),transparent_28%),linear-gradient(120deg,rgba(255,255,255,0.64),transparent_42%)]"></div>
      <div className="pointer-events-none absolute left-0 top-10 h-72 w-72 rounded-full border border-brand-gold/10"></div>

      <div className="container relative z-10 mx-auto px-4 md:px-8">
        <div className="grid items-start gap-10 lg:grid-cols-[300px_1fr] xl:grid-cols-[340px_1fr]">
          <div className="pt-2">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.28em] text-brand-bronze">
              What We Do
            </p>
            <h2 className="max-w-sm text-4xl font-serif leading-[0.98] text-brand-black md:text-5xl">
              End-to-End Event Solutions
            </h2>
            <div className="my-6 h-px w-20 bg-brand-gold"></div>
            <p className="max-w-xs text-sm leading-7 text-brand-black/70">
              From concept to celebration, we deliver seamless events that inspire, engage and leave lasting impressions.
            </p>
            <Link to="/events" className="mt-8 inline-flex items-center gap-3 text-sm font-medium text-brand-bronze transition-colors hover:text-brand-gold">
              View All Services <ArrowRight size={16} />
            </Link>
          </div>

          <div className="relative">
            <svg
              className="pointer-events-none absolute -top-6 left-[-5%] z-0 hidden h-28 w-[110%] overflow-visible text-brand-gold/45 lg:block"
              viewBox="0 0 1000 112"
              fill="none"
              aria-hidden="true"
            >
              <path d="M0 56 C70 56 88 16 140 16 C192 16 210 56 250 56" stroke="currentColor" strokeWidth="1" />
              <path d="M250 56 C320 56 338 16 390 16 C442 16 460 56 500 56" stroke="currentColor" strokeWidth="1" />
              <path d="M500 56 C570 56 588 16 640 16 C692 16 710 56 750 56" stroke="currentColor" strokeWidth="1" />
              <path d="M750 56 C820 56 838 16 890 16 C942 16 960 56 1000 56" stroke="currentColor" strokeWidth="1" />
              <path d="M0 58 C72 58 88 96 140 96 C192 96 210 58 250 58" stroke="currentColor" strokeWidth="1" opacity="0.65" />
              <path d="M250 58 C322 58 338 96 390 96 C442 96 460 58 500 58" stroke="currentColor" strokeWidth="1" opacity="0.65" />
              <path d="M500 58 C572 58 588 96 640 96 C692 96 710 58 750 58" stroke="currentColor" strokeWidth="1" opacity="0.65" />
              <path d="M750 58 C822 58 838 96 890 96 C942 96 960 58 1000 58" stroke="currentColor" strokeWidth="1" opacity="0.65" />
              {[250, 500, 750].map((x) => (
                <g key={x} transform={`translate(${x} 57)`}>
                  <path d="M0 -9 C2.5 -2.5 2.5 -2.5 9 0 C2.5 2.5 2.5 2.5 0 9 C-2.5 2.5 -2.5 2.5 -9 0 C-2.5 -2.5 -2.5 -2.5 0 -9Z" fill="currentColor" />
                </g>
              ))}
            </svg>

            <div className="relative z-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
              {featuredServices.map((service, index) => (
                <motion.article
                  key={service.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.55, delay: index * 0.08 }}
                  className="group relative h-[420px] overflow-hidden rounded-t-[999px] rounded-b-[120px] border border-brand-gold/35 bg-white/80 text-center shadow-xl shadow-brand-black/5"
                >
                  <img
                    src={service.image}
                    alt={service.title}
                    className="absolute inset-x-0 bottom-0 h-[48%] w-full rounded-b-[120px] object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-[58%] bg-gradient-to-b from-brand-ivory via-brand-ivory/60 to-transparent"></div>

                  <div className="absolute -top-1 left-1/2 z-20 flex h-24 w-24 -translate-x-1/2 items-center justify-center rounded-full border border-brand-gold/20 bg-white shadow-xl shadow-brand-bronze/15">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-brand-beige text-brand-bronze transition-colors group-hover:bg-brand-gold group-hover:text-white">
                      <service.icon size={30} strokeWidth={1.8} />
                    </div>
                  </div>

                  <div className="relative z-10 flex h-full flex-col items-center px-7 pt-[104px]">
                    <h3 className="max-w-[11rem] text-[22px] font-serif font-bold leading-[1.02] text-brand-black">
                      {service.title}
                    </h3>
                    <div className="my-5 h-px w-11 bg-brand-gold"></div>
                    <p className="max-w-[12rem] text-sm leading-6 text-brand-black/75">
                      {service.desc}
                    </p>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
          {compactServices.map((service, index) => (
            <motion.article
              key={service.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.07 }}
              className="group relative min-h-[130px] overflow-hidden rounded-lg border border-white/15 bg-brand-black shadow-xl shadow-brand-black/15"
            >
              <img
                src={service.image}
                alt={service.title}
                className="absolute inset-0 h-full w-full object-cover opacity-70 transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/65 to-black/90"></div>
              <div className="relative z-10 flex h-full items-center gap-4 p-5">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-brand-gold text-white shadow-lg shadow-brand-gold/25">
                  <service.icon size={22} />
                </div>
                <div>
                  <h3 className="text-lg font-serif font-bold leading-tight text-white">
                    {service.title}
                  </h3>
                  <p className="mt-2 max-w-[13rem] text-[11px] leading-5 text-white/75">
                    {service.desc}
                  </p>
                  <div className="mt-3 h-px w-9 bg-brand-gold"></div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
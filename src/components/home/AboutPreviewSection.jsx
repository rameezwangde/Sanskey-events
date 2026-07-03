import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import missSankeyImage from '../../../miss sankey.png';

const commitments = ['Integrated production', 'Audio visual solutions', 'Corporate & entertainment events'];

export default function AboutPreviewSection() {
  return (
    <section className="relative overflow-hidden bg-brand-ivory pt-36 pb-20">
      <div className="pointer-events-none absolute -left-24 top-20 h-80 w-80 rounded-full border border-brand-bronze/10" />
      <div className="pointer-events-none absolute right-0 top-12 h-full w-1/2 bg-[radial-gradient(circle_at_top_right,rgba(212,175,55,0.18),transparent_38%)]" />

      <div className="container relative z-10 mx-auto px-4 md:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[1.08fr_0.92fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
          >
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.24em] text-brand-bronze">
              About Us
            </p>
            <h2 className="font-serif text-4xl leading-tight text-brand-black md:text-5xl">
              Planned with precision, shaped around every expectation.
            </h2>
            <div className="my-7 h-px w-20 bg-brand-bronze" />

            <div className="max-w-3xl space-y-5 text-base leading-8 text-gray-700 md:text-lg">
              <p>
                Expectations combine written specifications with emotional needs and personal aspirations. Sankey Events turns that clarity into carefully controlled planning, quality execution and memorable experiences.
              </p>
              <p>
                We provide equipment, services, audio visual products and integrated solutions for corporate, entertainment and educational events, with every detail handled in a systematic and accountable manner.
              </p>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {commitments.map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-full border border-brand-beige bg-white/70 px-4 py-3 text-sm font-medium text-brand-black shadow-sm">
                  <CheckCircle2 size={17} className="shrink-0 text-brand-bronze" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <Link
              to="/about"
              className="mt-9 inline-flex items-center gap-2 rounded-full bg-brand-gold px-7 py-3 text-sm font-semibold text-white shadow-xl shadow-brand-gold/20 transition-all hover:bg-brand-bronze"
            >
              Know More <ArrowRight size={17} />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7, delay: 0.12 }}
            className="relative mx-auto w-full max-w-[460px]"
          >
            <div className="absolute -left-6 -top-6 h-full w-full rounded-[2rem] border border-brand-bronze/25" />
            <div className="relative overflow-hidden rounded-[2rem] border border-brand-beige bg-white p-3 shadow-2xl shadow-brand-bronze/15">
              <div className="absolute left-8 top-8 z-10 rounded-full border border-white/35 bg-black/35 px-5 py-2 text-xs font-bold uppercase tracking-[0.24em] text-brand-gold backdrop-blur-md">
                Miss Sankey
              </div>
              <img
                src={missSankeyImage}
                alt="Miss Sankey event showcase"
                className="h-[520px] w-full rounded-[1.5rem] object-cover object-center"
                loading="lazy"
              />
              <div className="absolute inset-x-3 bottom-3 rounded-b-[1.5rem] bg-gradient-to-t from-brand-black/70 via-brand-black/20 to-transparent p-8 pt-28">
                <p className="max-w-xs font-serif text-2xl leading-tight text-white">
                  Fashion, modelling and event experiences with a refined Sankey signature.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}


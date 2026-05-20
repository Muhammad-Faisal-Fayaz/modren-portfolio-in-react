import { motion } from 'framer-motion'
import { certificates } from '../../data/certificates'

export function Certificates() {
  return (
    <section id="certificates" className="relative z-10 scroll-mt-28 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-violet-600 dark:text-violet-300">
            Certificates
          </p>
          <h2 className="mt-2 font-display text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl">
            Credentials & milestones
          </h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
            A snapshot of structured learning that supports my project work.
          </p>
        </div>

        <div className="mt-10 -mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-2 sm:mx-0 sm:grid sm:grid-cols-2 sm:gap-6 sm:overflow-visible sm:px-0 lg:grid-cols-4">
          {certificates.map((c, i) => (
            <motion.article
              key={c.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
              className="glass min-w-[260px] snap-center rounded-2xl p-5 sm:min-w-0"
            >
              <div
                className={`mb-4 h-1.5 w-16 rounded-full bg-gradient-to-r ${c.accent}`}
              />
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
                {c.year} · {c.issuer}
              </p>
              <h3 className="mt-2 font-display text-lg font-semibold text-slate-900 dark:text-white">
                {c.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                {c.description}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

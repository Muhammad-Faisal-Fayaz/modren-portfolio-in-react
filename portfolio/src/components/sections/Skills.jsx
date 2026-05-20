import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { skills } from '../../data/skills'

function SkillBar({ name, level }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-10%' })

  return (
    <div ref={ref} className="space-y-2">
      <div className="flex items-center justify-between text-sm font-medium text-slate-700 dark:text-slate-200">
        <span>{name}</span>
        <span className="text-slate-500 dark:text-slate-400">{level}%</span>
      </div>
      <div className="h-2.5 overflow-hidden rounded-full bg-slate-200/80 dark:bg-slate-800/80">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-violet-600 via-fuchsia-500 to-cyan-500"
          initial={{ width: 0 }}
          animate={{ width: inView ? `${level}%` : 0 }}
          transition={{ duration: 1.05, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
    </div>
  )
}

export function Skills() {
  return (
    <section id="skills" className="relative z-10 scroll-mt-28 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-violet-600 dark:text-violet-300">
            Skills
          </p>
          <h2 className="mt-2 font-display text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl">
            Tools I use to ship quality work
          </h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
            Animated proficiency bars highlight where I spend the most focused practice.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.45 }}
            className="glass rounded-2xl p-6 sm:p-8"
          >
            <div className="space-y-5">
              {skills.slice(0, 5).map((s) => (
                <SkillBar key={s.name} {...s} />
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.45, delay: 0.06 }}
            className="glass rounded-2xl p-6 sm:p-8"
          >
            <div className="space-y-5">
              {skills.slice(5).map((s) => (
                <SkillBar key={s.name} {...s} />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

import { motion } from 'framer-motion'
import { GlassCard } from '../ui/GlassCard'

const tech = [
  'HTML',
  'CSS',
  'JavaScript',
  'React.js',
  'Bootstrap',
  'Tailwind CSS',
  'PHP',
  'MySQL',
  'Git & GitHub',
]

export function About() {
  return (
    <section id="about" className="relative z-10 scroll-mt-28 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.45 }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-violet-600 dark:text-violet-300">
            About Me
          </p>
          <h2 className="mt-2 font-display text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl">
            Building interfaces people enjoy using
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-slate-600 dark:text-slate-300">
            I am a Frontend Web Developer with strong fundamentals in HTML, CSS, and JavaScript,
            and I enjoy crafting responsive, user-friendly websites with modern design systems. I
            also work with PHP for backend tasks, bringing full pages to life end-to-end.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <GlassCard>
            <h3 className="font-display text-xl font-semibold text-slate-900 dark:text-white">
              Professional focus
            </h3>
            <p className="mt-3 leading-relaxed text-slate-600 dark:text-slate-300">
              I care about performance, accessibility, and clean structure. From landing pages to
              interactive dashboards, I aim for clarity, consistency, and delightful motion
              without sacrificing usability.
            </p>
          </GlassCard>
          <GlassCard>
            <h3 className="font-display text-xl font-semibold text-slate-900 dark:text-white">
              Experience & learning
            </h3>
            <p className="mt-3 leading-relaxed text-slate-600 dark:text-slate-300">
              My journey blends structured courses, hands-on projects, and continuous practice with
              real repositories. I learn by shipping: iterating on UI details, refactoring for
              maintainability, and collaborating with Git-based workflows.
            </p>
          </GlassCard>
        </div>

        <GlassCard className="mt-6" hover={false}>
          <h3 className="font-display text-xl font-semibold text-slate-900 dark:text-white">
            Skills & technologies
          </h3>
          <div className="mt-5 flex flex-wrap gap-2">
            {tech.map((t) => (
              <span
                key={t}
                className="rounded-full border border-violet-500/20 bg-violet-500/10 px-3 py-1 text-sm font-medium text-violet-800 dark:text-violet-100"
              >
                {t}
              </span>
            ))}
          </div>
        </GlassCard>
      </div>
    </section>
  )
}

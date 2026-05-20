import { motion } from 'framer-motion'
import { useMemo, useState } from 'react'
import { FaGithub } from 'react-icons/fa6'
import { projectFilters, projects } from '../../data/site'

export function Projects() {
  const [filter, setFilter] = useState('All')

  const filtered = useMemo(() => {
    if (filter === 'All') return projects
    return projects.filter((p) => p.category === filter)
  }, [filter])

  return (
    <section id="projects" className="relative z-10 scroll-mt-28 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-violet-600 dark:text-violet-300">
            Projects
          </p>
          <h2 className="mt-2 font-display text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl">
            Selected work & repositories
          </h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
            Tap a card or “View Project” to open the matching GitHub repository.
          </p>
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-2">
          {projectFilters.map((f) => {
            const active = filter === f
            return (
              <button
                key={f}
                type="button"
                onClick={() => setFilter(f)}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                  active
                    ? 'bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white shadow-md shadow-violet-500/25'
                    : 'border border-slate-300/70 bg-white/40 text-slate-700 hover:bg-white/70 dark:border-white/10 dark:bg-slate-900/40 dark:text-slate-200 dark:hover:bg-slate-900/60'
                }`}
              >
                {f}
              </button>
            )
          })}
        </div>

        <motion.div layout className="mt-10 grid gap-6 sm:grid-cols-2">
          {filtered.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}

function ProjectCard({ project, index }) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.45, delay: index * 0.04 }}
      className="group relative overflow-hidden rounded-2xl border border-white/20 bg-white/10 shadow-xl backdrop-blur-xl dark:border-white/10 dark:bg-slate-900/35"
    >
      <a
        href={project.github}
        target="_blank"
        rel="noreferrer noopener"
        className="absolute inset-0 z-20 rounded-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
        aria-label={`Open ${project.title} on GitHub`}
      >
        <span className="sr-only">Open {project.title} on GitHub</span>
      </a>

      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={project.image}
          alt={`${project.title} preview`}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          loading="lazy"
          decoding="async"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/10 to-transparent" />
        <span className="pointer-events-none absolute left-4 top-4 rounded-full bg-white/15 px-3 py-1 text-xs font-semibold text-white backdrop-blur-md">
          {project.category}
        </span>
      </div>

      <div className="relative z-10 space-y-3 p-5">
        <h3 className="font-display text-xl font-semibold text-slate-900 dark:text-white">
          {project.title}
        </h3>
        <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span
              key={t}
              className="rounded-full bg-slate-900/5 px-2.5 py-1 text-xs font-semibold text-slate-700 dark:bg-white/10 dark:text-slate-200"
            >
              {t}
            </span>
          ))}
        </div>
        <div className="relative z-30 flex flex-wrap gap-3 pt-1">
          <span className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-600 px-4 py-2 text-sm font-semibold text-white shadow-md shadow-violet-500/20">
            <FaGithub className="h-4 w-4" />
            View Project
          </span>
        </div>
      </div>
    </motion.article>
  )
}

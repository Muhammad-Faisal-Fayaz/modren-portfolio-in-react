import { motion } from 'framer-motion'
import {
  FaArrowDown,
  FaEnvelope,
  FaGithub,
  FaGlobe,
} from 'react-icons/fa6'
import { useTypingEffect } from '../../hooks/useTypingEffect'
import { SITE } from '../../data/site'
import profileImage from '../../assets/profile.jpg'

const heroPhrases = [
  'I craft responsive, user-friendly interfaces with React & Tailwind.',
  'I build modern websites with HTML, CSS, JavaScript, and PHP.',
  'I turn ideas into polished experiences that feel great on every device.',
]

export function Hero() {
  const typed = useTypingEffect(heroPhrases, 48, 2000, 32)

  return (
    <section
      id="home"
      className="relative z-10 scroll-mt-28 overflow-hidden pt-28 sm:pt-32"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 pb-16 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:pb-24">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-violet-500/20 bg-violet-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-violet-700 dark:text-violet-200">
            Available for projects
          </p>
          <h1 className="font-display text-4xl font-bold leading-tight tracking-tight text-slate-900 dark:text-white sm:text-5xl lg:text-6xl">
            Hi, I&apos;m{' '}
            <span className="gradient-text">{SITE.name}</span>
          </h1>
          <p className="mt-4 text-lg font-medium text-slate-700 dark:text-slate-200 sm:text-xl">
            {SITE.title}
          </p>
          <p className="mt-6 min-h-[4.5rem] text-base leading-relaxed text-slate-600 dark:text-slate-300 sm:text-lg">
            {typed}
            <span className="ml-1 inline-block h-5 w-0.5 translate-y-0.5 animate-pulse bg-violet-500 align-middle" />
          </p>

          <div className="mt-4 flex flex-wrap items-center gap-3">
            <a
              href={SITE.livePortfolio}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-2 text-sm font-semibold text-violet-700 underline-offset-4 hover:underline dark:text-violet-300"
            >
              <FaGlobe className="h-4 w-4" />
              Interactive portfolio (live)
            </a>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-500/25"
            >
              View Projects
              <FaArrowDown className="h-4 w-4 opacity-90" />
            </motion.a>
            <motion.a
              href={SITE.cvPath}
              download
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300/80 bg-white/50 px-5 py-3 text-sm font-semibold text-slate-900 backdrop-blur-md dark:border-white/10 dark:bg-slate-900/40 dark:text-white"
            >
              Download CV
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-transparent bg-slate-900 px-5 py-3 text-sm font-semibold text-white shadow-lg dark:bg-white dark:text-slate-900"
            >
              <FaEnvelope className="h-4 w-4" />
              Contact Me
            </motion.a>
          </div>

          <div className="mt-8 flex items-center gap-4 text-sm text-slate-600 dark:text-slate-400">
            <a
              href={SITE.github}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-2 rounded-xl border border-white/30 bg-white/20 px-3 py-2 font-medium text-slate-800 backdrop-blur-md transition hover:-translate-y-0.5 dark:border-white/10 dark:bg-slate-900/40 dark:text-slate-100"
            >
              <FaGithub className="h-4 w-4" />
              GitHub
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto flex max-w-md justify-center lg:mx-0 lg:max-w-none lg:justify-end"
        >
          <div className="relative">
            <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-tr from-violet-500/40 via-fuchsia-500/30 to-cyan-400/30 blur-2xl" />
            <div className="glass relative overflow-hidden rounded-[2rem] p-3 shadow-2xl ring-1 ring-white/40 dark:ring-white/10">
              <img
                src={profileImage}
                width={420}
                height={420}
                alt={`${SITE.name} — portfolio profile`}
                className="h-auto w-full max-w-sm rounded-[1.4rem] bg-gradient-to-br from-white to-slate-100 object-cover dark:from-slate-900 dark:to-slate-800"
                loading="eager"
                decoding="async"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

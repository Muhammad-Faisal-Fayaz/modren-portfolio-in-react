import { motion } from 'framer-motion'
import { useState } from 'react'
import { FaBars, FaXmark } from 'react-icons/fa6'
import { ThemeToggle } from '../ui/ThemeToggle'
import { SITE } from '../../data/site'

const links = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#certificates', label: 'Certificates' },
  { href: '#contact', label: 'Contact' },
]

export function Navbar() {
  const [open, setOpen] = useState(false)

  const close = () => setOpen(false)

  return (
    <header className="fixed inset-x-0 top-0 z-40">
      <div className="mx-auto max-w-6xl px-4 pt-4 sm:px-6 lg:px-8">
        <nav className="glass flex items-center justify-between gap-4 rounded-2xl px-4 py-3 sm:px-5">
          <a
            href="#home"
            onClick={close}
            className="font-display text-lg font-semibold tracking-tight text-slate-900 dark:text-white"
          >
            <span className="gradient-text">Muhammad Faisal</span>
          </a>

          <ul className="hidden items-center gap-1 lg:flex">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="rounded-xl px-3 py-2 text-sm font-medium text-slate-600 transition hover:bg-white/40 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-white/5 dark:hover:text-white"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <motion.a
              href={SITE.livePortfolio}
              target="_blank"
              rel="noreferrer noopener"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="hidden rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-600 px-3 py-2 text-sm font-semibold text-white shadow-md shadow-violet-500/25 sm:inline-flex"
            >
              Live Portfolio
            </motion.a>
            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/30 bg-white/15 text-slate-800 backdrop-blur-md dark:border-white/10 dark:bg-slate-900/50 dark:text-white lg:hidden"
              aria-label="Toggle menu"
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <FaXmark className="h-5 w-5" /> : <FaBars className="h-5 w-5" />}
            </button>
          </div>
        </nav>

        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="glass mt-2 rounded-2xl p-3 lg:hidden"
          >
            <ul className="flex flex-col gap-1">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={close}
                    className="block rounded-xl px-3 py-2 text-sm font-medium text-slate-700 hover:bg-white/40 dark:text-slate-200 dark:hover:bg-white/5"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={SITE.livePortfolio}
                  target="_blank"
                  rel="noreferrer noopener"
                  onClick={close}
                  className="mt-1 block rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-600 px-3 py-2 text-center text-sm font-semibold text-white"
                >
                  Live Portfolio
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </div>
    </header>
  )
}

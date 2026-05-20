import { FaGithub, FaLinkedin, FaXTwitter } from 'react-icons/fa6'
import { SITE } from '../../data/site'

const quick = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#certificates', label: 'Certificates' },
  { href: '#contact', label: 'Contact' },
]

export function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="relative z-10 border-t border-white/20 bg-white/30 py-10 backdrop-blur-xl dark:border-white/10 dark:bg-slate-950/40">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <div>
          <p className="font-display text-lg font-semibold text-slate-900 dark:text-white">
            {SITE.name}
          </p>
          <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
            © {year} Muhammad Faisal Fayaz. All rights reserved.
          </p>
        </div>
        <nav aria-label="Footer" className="flex flex-wrap gap-x-4 gap-y-2 text-sm font-semibold text-slate-700 dark:text-slate-200">
          {quick.map((q) => (
            <a key={q.href} href={q.href} className="hover:text-violet-700 dark:hover:text-violet-300">
              {q.label}
            </a>
          ))}
          <a
            href={SITE.livePortfolio}
            target="_blank"
            rel="noreferrer noopener"
            className="hover:text-violet-700 dark:hover:text-violet-300"
          >
            Live portfolio
          </a>
        </nav>
        <div className="flex items-center gap-3">
          <a
            href={SITE.github}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="GitHub"
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/30 bg-white/20 text-slate-900 backdrop-blur-md transition hover:-translate-y-0.5 dark:border-white/10 dark:bg-slate-900/50 dark:text-white"
          >
            <FaGithub className="h-5 w-5" />
          </a>
          <a
            href={SITE.linkedin}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="LinkedIn"
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/30 bg-white/20 text-slate-900 backdrop-blur-md transition hover:-translate-y-0.5 dark:border-white/10 dark:bg-slate-900/50 dark:text-white"
          >
            <FaLinkedin className="h-5 w-5" />
          </a>
          <a
            href={SITE.twitter}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="X"
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/30 bg-white/20 text-slate-900 backdrop-blur-md transition hover:-translate-y-0.5 dark:border-white/10 dark:bg-slate-900/50 dark:text-white"
          >
            <FaXTwitter className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  )
}

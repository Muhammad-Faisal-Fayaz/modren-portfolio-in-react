import { motion } from 'framer-motion'
import { useState } from 'react'
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaLocationDot,
  FaPaperPlane,
  FaXTwitter,
} from 'react-icons/fa6'
import { SITE } from '../../data/site'
import { submitContactForm } from '../../services/contactForm'

const inputClass =
  'mt-2 w-full rounded-xl border border-slate-200/80 bg-white/70 px-4 py-3 text-sm text-slate-900 outline-none ring-violet-500/30 placeholder:text-slate-400 focus:ring-4 dark:border-white/10 dark:bg-slate-950/40 dark:text-white'

export function Contact() {
  const [status, setStatus] = useState('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const onSubmit = async (e) => {
    e.preventDefault()
    const form = e.currentTarget

    setStatus('submitting')
    setErrorMessage('')

    const result = await submitContactForm(form)

    if (result.ok) {
      setStatus('success')
      form.reset()
      setTimeout(() => setStatus('idle'), 5000)
      return
    }

    setStatus('error')
    setErrorMessage(result.message)
  }

  const isSubmitting = status === 'submitting'

  return (
    <section id="contact" className="relative z-10 scroll-mt-28 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-violet-600 dark:text-violet-300">
            Get in touch
          </p>
          <h2 className="mt-2 font-display text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl">
            Contact Me
          </h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
            Have a project, collaboration idea, or question? Send a message and it will land
            directly in my inbox.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-5">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            className="glass space-y-4 rounded-2xl p-6 lg:col-span-2"
          >
            <div>
              <p className="text-sm font-semibold text-slate-500 dark:text-slate-400">Email</p>
              <a
                href={`mailto:${SITE.email}`}
                className="mt-1 inline-flex items-center gap-2 text-lg font-semibold text-slate-900 hover:text-violet-700 dark:text-white dark:hover:text-violet-300"
              >
                <FaEnvelope className="h-5 w-5" />
                {SITE.email}
              </a>
            </div>

            <div className="flex flex-col gap-3">
              <a
                href={SITE.github}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-2 rounded-xl border border-white/30 bg-white/20 px-4 py-3 text-sm font-semibold text-slate-900 backdrop-blur-md transition hover:-translate-y-0.5 dark:border-white/10 dark:bg-slate-900/40 dark:text-white"
              >
                <FaGithub className="h-5 w-5" />
                GitHub profile
              </a>
              <a
                href={SITE.linkedin}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-2 rounded-xl border border-white/30 bg-white/20 px-4 py-3 text-sm font-semibold text-slate-900 backdrop-blur-md transition hover:-translate-y-0.5 dark:border-white/10 dark:bg-slate-900/40 dark:text-white"
              >
                <FaLinkedin className="h-5 w-5" />
                LinkedIn
              </a>
              <a
                href={SITE.twitter}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-2 rounded-xl border border-white/30 bg-white/20 px-4 py-3 text-sm font-semibold text-slate-900 backdrop-blur-md transition hover:-translate-y-0.5 dark:border-white/10 dark:bg-slate-900/40 dark:text-white"
              >
                <FaXTwitter className="h-5 w-5" />
                X (Twitter)
              </a>
              <a
                href={SITE.livePortfolio}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-600 px-4 py-3 text-sm font-semibold text-white shadow-md shadow-violet-500/25 transition hover:-translate-y-0.5"
              >
                Open interactive portfolio
              </a>
            </div>

            <p className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400">
              <FaLocationDot className="mt-0.5 h-4 w-4 shrink-0 text-violet-600 dark:text-violet-300" />
              Remote-friendly · Open to ML, frontend, and full-stack collaboration.
            </p>
          </motion.div>

          <motion.form
            action="https://api.web3forms.com/submit"
            method="POST"
            onSubmit={onSubmit}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ delay: 0.05 }}
            className="glass rounded-2xl p-6 lg:col-span-3"
            noValidate={false}
          >
            <input type="hidden" name="access_key" value={SITE.web3formsAccessKey} />
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="sm:col-span-1">
                <span className="text-sm font-semibold text-slate-700 dark:text-slate-200">
                  Name
                </span>
                <input
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  disabled={isSubmitting}
                  className={inputClass}
                  placeholder="Your name"
                />
              </label>
              <label className="sm:col-span-1">
                <span className="text-sm font-semibold text-slate-700 dark:text-slate-200">
                  Email
                </span>
                <input
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  disabled={isSubmitting}
                  className={inputClass}
                  placeholder="you@example.com"
                />
              </label>
              <label className="sm:col-span-2">
                <span className="text-sm font-semibold text-slate-700 dark:text-slate-200">
                  Subject
                </span>
                <input
                  name="subject"
                  type="text"
                  required
                  disabled={isSubmitting}
                  className={inputClass}
                  placeholder="Project inquiry, collaboration, etc."
                />
              </label>
              <label className="sm:col-span-2">
                <span className="text-sm font-semibold text-slate-700 dark:text-slate-200">
                  Message
                </span>
                <textarea
                  name="message"
                  required
                  rows={5}
                  disabled={isSubmitting}
                  className={`${inputClass} resize-y`}
                  placeholder="Tell me about your project, timeline, and goals."
                />
              </label>
            </div>

            <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={isSubmitting ? undefined : { scale: 1.02 }}
                whileTap={isSubmitting ? undefined : { scale: 0.98 }}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-500/25 disabled:cursor-not-allowed disabled:opacity-70"
              >
                <FaPaperPlane className="h-4 w-4" />
                {isSubmitting ? 'Sending…' : 'Submit'}
              </motion.button>

              {status === 'success' && (
                <p className="text-sm font-medium text-emerald-700 dark:text-emerald-300">
                  Message sent! I&apos;ll get back to you soon.
                </p>
              )}
              {status === 'error' && (
                <p className="text-sm font-medium text-rose-700 dark:text-rose-300" role="alert">
                  {errorMessage}
                </p>
              )}
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  )
}

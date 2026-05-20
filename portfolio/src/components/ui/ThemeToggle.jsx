import { motion } from 'framer-motion'
import { FaMoon, FaSun } from 'react-icons/fa6'
import { useTheme } from '../../context/ThemeContext'

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <motion.button
      type="button"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={toggleTheme}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/30 bg-white/15 text-slate-800 shadow-sm backdrop-blur-md dark:border-white/10 dark:bg-slate-900/50 dark:text-amber-200"
    >
      {isDark ? <FaSun className="h-4 w-4" /> : <FaMoon className="h-4 w-4" />}
    </motion.button>
  )
}

import { motion } from 'framer-motion'

export function GlassCard({ children, className = '', hover = true }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      whileHover={hover ? { y: -4, scale: 1.01 } : undefined}
      className={`glass rounded-2xl p-6 ${className}`}
    >
      {children}
    </motion.div>
  )
}

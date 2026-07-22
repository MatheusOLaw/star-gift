import { motion } from 'framer-motion'

/**
 * Botão discreto e elegante — linha fina, sem preenchimento sólido,
 * para não competir com a atmosfera contemplativa das telas.
 */
export default function ElegantButton({ children, onClick, type = 'button', className = '' }) {
  return (
    <motion.button
      type={type}
      onClick={onClick}
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ letterSpacing: '0.22em', borderColor: 'rgba(168, 85, 247, 0.6)' }}
      whileTap={{ scale: 0.98 }}
      className={`border border-white/25 px-8 py-3 font-body text-[0.75rem] uppercase tracking-[0.18em] text-white/80 transition-colors duration-700 hover:text-white ${className}`}
    >
      {children}
    </motion.button>
  )
}

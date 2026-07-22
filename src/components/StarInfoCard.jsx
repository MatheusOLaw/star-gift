import { motion } from 'framer-motion'

/**
 * Uma linha do "dossiê" da estrela — rótulo, valor e uma pequena descrição.
 * Um fio vertical violeta muito discreto marca cada entrada.
 */
export default function StarInfoCard({ label, value, description, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.9, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="relative border-l border-white/10 py-4 pl-6"
    >
      <span className="absolute left-0 top-5 h-px w-3 bg-violet-light/50" />
      <p className="font-body text-[0.68rem] uppercase tracking-[0.2em] text-white/40">{label}</p>
      <p className="mt-1 font-display text-2xl text-white/95">{value}</p>
      <p className="mt-1 font-body text-sm italic text-white/45">{description}</p>
    </motion.div>
  )
}

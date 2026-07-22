import { motion } from 'framer-motion'

/**
 * Página de um pequeno livro — margens generosas, tipografia elegante.
 * O texto é recebido via children, para ser substituído com a carta real.
 */
export default function Letter({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
      className="page-texture mx-auto flex min-h-[70vh] w-full max-w-xl flex-col justify-center border border-white/10 bg-obsidian/40 px-8 py-14 sm:px-14 sm:py-20"
    >
      <span className="mx-auto mb-8 h-px w-10 bg-violet-light/40" aria-hidden="true" />
      <div className="space-y-6 font-body text-[1.05rem] leading-[2] text-white/85 sm:text-lg">
        {children}
      </div>
      <span className="mx-auto mt-10 h-px w-10 bg-violet-light/40" aria-hidden="true" />
    </motion.div>
  )
}

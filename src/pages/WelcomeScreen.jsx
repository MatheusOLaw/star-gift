import { motion } from 'framer-motion'
import ElegantButton from '../components/ElegantButton'

export default function WelcomeScreen({ onNext }) {
  return (
    <div className="flex w-full max-w-lg flex-col items-center text-center">
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 0.2 }}
        className="mb-6 font-body text-[0.65rem] uppercase tracking-widest2 text-white/40"
      >
        79 anos-luz de distância
      </motion.span>

      <motion.h1
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="glow-title font-display text-5xl font-medium tracking-wide text-white sm:text-6xl"
      >
        A Nossa Estrela
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.8, delay: 1.3 }}
        className="mt-6 font-body text-base italic text-white/55 sm:text-lg"
      >
        Uma pequena história escrita nas estrelas.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 2.2 }}
        className="mt-14"
      >
        <ElegantButton onClick={onNext}>Começar</ElegantButton>
      </motion.div>
    </div>
  )
}

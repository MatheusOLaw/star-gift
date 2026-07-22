import { motion } from 'framer-motion'
import StarInfoCard from '../components/StarInfoCard'
import ElegantButton from '../components/ElegantButton'
import { REGULUS, STELLARIUM_URL } from '../utils/starData'

export default function StarInfoScreen({ onNext }) {
  function openStellarium() {
    window.open(STELLARIUM_URL, '_blank', 'noopener,noreferrer')
  }

  return (
    <div className="flex w-full max-w-2xl flex-col items-center overflow-y-auto">
      <motion.h2
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        className="mb-2 text-center font-display text-3xl text-white sm:text-4xl"
      >
        {REGULUS.name}
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.3 }}
        className="mb-10 text-center font-body text-sm italic text-white/45"
      >
        um pequeno dossiê sobre a nossa estrela
      </motion.p>

      <div className="w-full border border-white/10 bg-obsidian/40 px-6 py-8 sm:px-10 sm:py-10">
        <div className="grid grid-cols-1 gap-x-10 sm:grid-cols-2">
          {REGULUS.facts.map((fact, i) => (
            <StarInfoCard
              key={fact.label}
              label={fact.label}
              value={fact.value}
              description={fact.description}
              index={i}
            />
          ))}
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.8 }}
        className="mt-12 flex flex-col items-center gap-4"
      >
        <ElegantButton onClick={openStellarium}>Encontrar nossa estrela</ElegantButton>
        <button
          type="button"
          onClick={onNext}
          className="font-body text-xs italic text-white/35 underline decoration-white/20 underline-offset-4 transition-colors duration-700 hover:text-white/60"
        >
          seguir para o próximo capítulo
        </button>
      </motion.div>
    </div>
  )
}

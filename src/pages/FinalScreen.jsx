import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import ElegantButton from '../components/ElegantButton'

export default function FinalScreen({ onRestart }) {
  const [showRestart, setShowRestart] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setShowRestart(true), 5000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="flex w-full max-w-lg flex-col items-center text-center">
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2.4, ease: [0.22, 1, 0.36, 1] }}
        className="font-display text-2xl leading-relaxed text-white/90 sm:text-3xl"
      >
        Enquanto houver estrelas no céu,
        <br />
        sempre existirá um lugar onde nossa história estará escrita.
      </motion.p>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 2.2 }}
        className="glow-title mt-10 font-display text-3xl text-violet-light sm:text-4xl"
      >
        Je t'aime,
        <br />
        Mon Amour.
        <br />
        <span aria-hidden="true">💜</span>
      </motion.p>

      {showRestart && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.6 }}
          className="mt-16"
        >
          <ElegantButton onClick={onRestart} className="!border-white/10 !text-white/40">
            Recomeçar
          </ElegantButton>
        </motion.div>
      )}
    </div>
  )
}

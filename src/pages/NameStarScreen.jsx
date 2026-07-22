import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import ElegantButton from '../components/ElegantButton'
import Particles from '../components/Particles'
import { useLocalStorage } from '../hooks/useLocalStorage'
import { STAR_NAME_STORAGE_KEY } from '../utils/starData'

export default function NameStarScreen({ onNext }) {
  const [savedName, setSavedName] = useLocalStorage(STAR_NAME_STORAGE_KEY, '')
  const [draft, setDraft] = useState('')
  const [registered, setRegistered] = useState(Boolean(savedName))

  function handleSubmit(e) {
    e.preventDefault()
    const trimmed = draft.trim()
    if (!trimmed) return
    setSavedName(trimmed)
    setRegistered(true)
  }

  return (
    <div className="relative flex w-full max-w-lg flex-col items-center text-center">
      <Particles count={registered ? 22 : 0} />

      <AnimatePresence mode="wait">
        {!registered ? (
          <motion.div
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.9 }}
            className="flex w-full flex-col items-center"
          >
            <p className="font-display text-3xl text-white sm:text-4xl">
              Agora existe apenas uma missão.
            </p>
            <p className="mt-4 font-body italic text-white/55">
              Dar um nome para a nossa estrela.
            </p>

            <form onSubmit={handleSubmit} className="mt-12 flex w-full flex-col items-center gap-6">
              <input
                type="text"
                value={draft}
                onChange={(e) => setDraft(e.target.value)}
                placeholder="Digite aqui o nome da nossa estrela."
                className="w-full max-w-sm border-b border-white/25 bg-transparent px-2 py-3 text-center font-body text-lg text-white placeholder:text-white/30 focus:border-violet-light/70"
              />
              <ElegantButton type="submit">Registrar</ElegantButton>
            </form>
          </motion.div>
        ) : (
          <motion.div
            key="reveal"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.3, ease: [0.22, 1, 0.36, 1] }}
            className="flex w-full flex-col items-center"
          >
            <p className="font-body text-sm uppercase tracking-[0.2em] text-white/45">
              Nossa estrela agora também será conhecida como
            </p>
            <motion.p
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.4, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="glow-title mt-4 font-display text-4xl text-white sm:text-5xl"
            >
              {savedName}
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.2, delay: 1.6 }}
              className="mt-14"
            >
              <ElegantButton onClick={onNext}>Continuar</ElegantButton>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

import { motion } from 'framer-motion'
import RegulusPortrait from '../components/RegulusPortrait'
import ElegantButton from '../components/ElegantButton'

export default function StarPhotoScreen({ onNext }) {
  return (
    <div className="flex w-full max-w-4xl flex-col items-center">
      <RegulusPortrait />

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.4, delay: 0.5 }}
        className="mt-8 text-center"
      >
        <h2 className="font-display text-3xl tracking-[0.15em] text-white sm:text-4xl">
          REGULUS
        </h2>
        <p className="mt-2 font-body text-sm italic text-white/45">α Leonis</p>
        <p className="mt-4 max-w-md font-body text-white/60">
          O coração da constelação de Leão.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 1.1 }}
        className="mt-12"
      >
        <ElegantButton onClick={onNext}>Conhecer nossa estrela</ElegantButton>
      </motion.div>
    </div>
  )
}

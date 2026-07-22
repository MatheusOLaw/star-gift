import { useState, useCallback } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import StarsBackground from './components/StarsBackground'
import WelcomeScreen from './pages/WelcomeScreen'
import LetterScreen from './pages/LetterScreen'
import StarPhotoScreen from './pages/StarPhotoScreen'
import StarInfoScreen from './pages/StarInfoScreen'
import NameStarScreen from './pages/NameStarScreen'
import FinalScreen from './pages/FinalScreen'

// A experiência é uma sequência linear de telas cheias — nunca tudo de uma vez.
const SCREENS = [WelcomeScreen, LetterScreen, StarPhotoScreen, StarInfoScreen, NameStarScreen, FinalScreen]

const screenVariants = {
  initial: { opacity: 0, filter: 'blur(8px)' },
  animate: { opacity: 1, filter: 'blur(0px)' },
  exit: { opacity: 0, filter: 'blur(8px)' },
}

export default function App() {
  const [step, setStep] = useState(0)

  const goNext = useCallback(() => {
    setStep((s) => Math.min(s + 1, SCREENS.length - 1))
  }, [])

  const restart = useCallback(() => {
    setStep(0)
  }, [])

  const CurrentScreen = SCREENS[step]

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-void text-white">
      <StarsBackground />

      {/* leve gradiente para dar profundidade sem tornar o roxo predominante */}
      <div
        className="pointer-events-none fixed inset-0 z-[1]"
        style={{
          background:
            'radial-gradient(ellipse at 50% 0%, rgba(49,46,129,0.16), transparent 60%), radial-gradient(ellipse at 50% 100%, rgba(9,9,11,0.6), transparent 70%)',
        }}
        aria-hidden="true"
      />

      <AnimatePresence mode="wait">
        <motion.main
          key={step}
          variants={screenVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10 flex min-h-screen w-full items-center justify-center px-6 py-16 sm:px-10"
        >
          <CurrentScreen onNext={goNext} onRestart={restart} />
        </motion.main>
      </AnimatePresence>
    </div>
  )
}

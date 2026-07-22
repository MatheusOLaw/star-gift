import { motion } from 'framer-motion'
import Letter from '../components/Letter'
import ElegantButton from '../components/ElegantButton'

export default function LetterScreen({ onNext }) {
  return (
    <div className="flex w-full flex-col items-center">
      <Letter>
        {/*
          TODO: substitua o parágrafo abaixo pelo texto real da carta.
          Cada <p> vira um parágrafo com o mesmo respiro e tipografia.
        */}
        <p>Minha querida,</p>
        <p>
          Antes de qualquer palavra, existe o silêncio de uma noite estrelada — e foi nesse
          silêncio que decidi começar esta pequena história para você.
        </p>
        <p>
          O que vem a seguir não é um site. É uma carta que se abre aos poucos, como as
          páginas de um livro que só nós dois conhecemos.
        </p>
        <p className="text-right italic text-white/60">— com todo o meu amor</p>
      </Letter>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.6 }}
        className="mt-10"
      >
        <ElegantButton onClick={onNext}>Continuar</ElegantButton>
      </motion.div>
    </div>
  )
}

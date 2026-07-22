import { motion } from 'framer-motion'
import { useMemo } from 'react'
import regulusPhoto from '../assets/regulus.jpg'

/**
 * Retrato artístico de Regulus, feito inteiramente em CSS (gradientes + linhas
 * de difração), para que a experiência nunca dependa de uma imagem externa que
 * pode quebrar ou demorar a carregar no dia da surpresa.
 *
 * Para usar uma fotografia real da estrela, basta colocar o arquivo em
 * src/assets/regulus.jpg e trocar o conteúdo deste componente por:
 *   <img src={regulusPhoto} alt="Fotografia da estrela Regulus" ... />
 */
export default function RegulusPortrait() {
  const scatteredStars = useMemo(
    () =>
      Array.from({ length: 36 }, () => ({
        left: Math.random() * 100,
        top: Math.random() * 100,
        size: Math.random() * 1.6 + 0.6,
        delay: Math.random() * 4,
      })),
    [],
  )

  return (
    <motion.div
      initial={{ opacity: 0, scale: 1.05 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 2.2, ease: [0.22, 1, 0.36, 1] }}
      className="relative aspect-[16/10] w-full overflow-hidden border border-white/10 bg-black sm:aspect-[21/9]"
    >
      {/* fotografia real da estrela, com zoom lento contínuo */}
<motion.img
  src={regulusPhoto}
  alt="Fotografia da estrela Regulus"
  className="absolute inset-0 h-full w-full object-cover"
  animate={{ scale: [1, 1.06, 1] }}
  transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
/>

{/* leve véu escuro sobre a foto, pra manter a paleta e o clima do site */}
<div
  className="absolute inset-0"
  style={{
    background:
      'linear-gradient(to bottom, rgba(0,0,0,0.15), rgba(0,0,0,0.55)), radial-gradient(ellipse at 50% 50%, rgba(91,33,182,0.12), transparent 70%)',
  }}
/>

      {/* estrelas de fundo esparsas, mais densas nas bordas */}
      {scatteredStars.map((star, i) => (
        <span
          key={i}
          className="absolute animate-twinkle rounded-full bg-white"
          style={{
            left: `${star.left}%`,
            top: `${star.top}%`,
            width: star.size,
            height: star.size,
            animationDelay: `${star.delay}s`,
          }}
        />
      ))}

      {/* vinheta para reforçar a sensação de fotografia */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{ boxShadow: 'inset 0 0 120px 40px rgba(0,0,0,0.75)' }}
      />
    </motion.div>
  )
}

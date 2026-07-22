import { motion } from 'framer-motion'
import { useMemo } from 'react'

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
      {/* fundo profundo com leve névoa violeta, quase imperceptível */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse at 50% 50%, rgba(91,33,182,0.10), #000000 62%)',
        }}
      />

      {/* núcleo brilhante da estrela, com zoom lento contínuo */}
      <motion.div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        animate={{ scale: [1, 1.06, 1] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div
          className="h-40 w-40 rounded-full sm:h-56 sm:w-56"
          style={{
            background:
              'radial-gradient(circle, #ffffff 0%, #d6c7fb 18%, #A855F7 38%, rgba(124,58,237,0.35) 60%, transparent 75%)',
            boxShadow: '0 0 120px 40px rgba(168,85,247,0.18)',
          }}
        />
        {/* linhas de difração, como em fotografias astronômicas reais */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <span className="absolute h-[2px] w-[420px] bg-gradient-to-r from-transparent via-white/50 to-transparent sm:w-[560px]" />
          <span className="absolute h-[420px] w-[2px] bg-gradient-to-b from-transparent via-white/50 to-transparent sm:h-[560px]" />
        </div>
      </motion.div>

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

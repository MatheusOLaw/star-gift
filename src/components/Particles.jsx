import { motion } from 'framer-motion'
import { useMemo } from 'react'

/**
 * Pequenas partículas brilhantes que sobem lentamente — usadas no momento
 * em que o nome da nossa estrela é revelado, na Tela 5.
 */
export default function Particles({ count = 18 }) {
  const particles = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 1.8,
        duration: 2.4 + Math.random() * 1.6,
        size: Math.random() * 2.2 + 1.2,
        violet: Math.random() < 0.4,
      })),
    [count],
  )

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {particles.map((p) => (
        <motion.span
          key={p.id}
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: [0, 0.9, 0], y: -120 }}
          transition={{ duration: p.duration, delay: p.delay, ease: 'easeOut' }}
          style={{
            position: 'absolute',
            left: `${p.left}%`,
            bottom: '10%',
            width: p.size,
            height: p.size,
            borderRadius: '9999px',
            backgroundColor: p.violet ? '#A855F7' : '#FFFFFF',
            boxShadow: p.violet
              ? '0 0 6px rgba(168, 85, 247, 0.8)'
              : '0 0 4px rgba(255, 255, 255, 0.8)',
          }}
        />
      ))}
    </div>
  )
}

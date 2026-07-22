import { useEffect, useRef } from 'react'

/**
 * Campo estelar desenhado em Canvas — estrelas piscando muito lentamente,
 * com um paralaxe discreto ao mover o mouse. Sem Three.js, apenas Canvas 2D.
 * Fica fixo atrás de todas as telas, criando continuidade entre elas.
 */
export default function StarsBackground() {
  const canvasRef = useRef(null)
  const starsRef = useRef([])
  const mouseRef = useRef({ x: 0, y: 0 })
  const frameRef = useRef(0)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    let width = window.innerWidth
    let height = window.innerHeight

    function resize() {
      width = window.innerWidth
      height = window.innerHeight
      canvas.width = width * window.devicePixelRatio
      canvas.height = height * window.devicePixelRatio
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`
      ctx.setTransform(window.devicePixelRatio, 0, 0, window.devicePixelRatio, 0, 0)
    }

    function createStars() {
      const total = Math.min(220, Math.max(90, Math.round((width * height) / 8500)))
      starsRef.current = Array.from({ length: total }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 1.1 + 0.25,
        baseAlpha: Math.random() * 0.5 + 0.25,
        phase: Math.random() * Math.PI * 2,
        speed: Math.random() * 0.0006 + 0.00018,
        // uma pequena fração das estrelas ganha um tom violeta discreto
        tint: Math.random() < 0.06,
      }))
    }

    resize()
    createStars()

    function onResize() {
      resize()
      createStars()
    }

    function onMouseMove(e) {
      mouseRef.current.x = (e.clientX / width - 0.5) * 2
      mouseRef.current.y = (e.clientY / height - 0.5) * 2
    }

    window.addEventListener('resize', onResize)
    if (!prefersReducedMotion) {
      window.addEventListener('mousemove', onMouseMove)
    }

    let start = performance.now()

    function draw(now) {
      const elapsed = now - start
      ctx.clearRect(0, 0, width, height)

      const parallaxX = mouseRef.current.x * 6
      const parallaxY = mouseRef.current.y * 6

      for (const star of starsRef.current) {
        const twinkle = prefersReducedMotion
          ? star.baseAlpha
          : star.baseAlpha + Math.sin(elapsed * star.speed + star.phase) * 0.28
        const alpha = Math.max(0.05, Math.min(1, twinkle))

        ctx.beginPath()
        ctx.fillStyle = star.tint
          ? `rgba(168, 85, 247, ${alpha * 0.8})`
          : `rgba(255, 255, 255, ${alpha})`
        ctx.arc(star.x + parallaxX, star.y + parallaxY, star.radius, 0, Math.PI * 2)
        ctx.fill()
      }

      frameRef.current = requestAnimationFrame(draw)
    }

    frameRef.current = requestAnimationFrame(draw)

    return () => {
      cancelAnimationFrame(frameRef.current)
      window.removeEventListener('resize', onResize)
      window.removeEventListener('mousemove', onMouseMove)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0"
    />
  )
}

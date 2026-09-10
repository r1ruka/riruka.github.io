import { useRef, useEffect, useCallback } from 'react'
import { motion, useInView } from 'framer-motion'
import confetti from 'canvas-confetti'
import FloatingParticles from './FloatingParticles'
import { content } from '../data/birthdayContent'

/* ── Confetti launcher ────────────────────── */
function launchConfetti(colors) {
  const fire = (origin, opts) =>
    confetti({ spread: 70, ticks: 200, gravity: 0.9, decay: 0.92, startVelocity: 35, colors, ...opts, origin })

  fire({ x: 0.25, y: 0.7 }, { angle: 65,  particleCount: 50 })
  fire({ x: 0.75, y: 0.7 }, { angle: 115, particleCount: 50 })
  setTimeout(() => fire({ x: 0.5, y: 0.6 }, { angle: 90, particleCount: 80, spread: 120 }), 300)
}

/* ── Final Section ────────────────────────── */
export default function FinalSurprise() {
  const { final } = content
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.4 })

  // Auto-launch when section enters view
  useEffect(() => {
    if (inView) {
      setTimeout(() => launchConfetti(final.confettiColors), 600)
    }
  }, [inView, final.confettiColors])

  const handleRepeat = useCallback(() => {
    launchConfetti(final.confettiColors)
  }, [final.confettiColors])

  /* Stagger children */
  const container = {
    hidden:  {},
    visible: { transition: { staggerChildren: 0.18, delayChildren: 0.3 } },
  }
  const child = {
    hidden:  { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } },
  }

  return (
    <section className="final-section" ref={ref}>
      {/* Ambient particles */}
/*      <FloatingParticles count={40} color="201, 169, 110" /> */
/*      <FloatingParticles count={20} color="196, 132, 138" /> */

      <motion.div
        variants={container}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
      >
        {/* "Happy Birthday," */}
        <motion.p className="final-announcement" variants={child}>
          {final.announcement}
        </motion.p>

        {/* BIG NAME */}
        <motion.h1 className="final-name" variants={child}>
          {final.name}
        </motion.h1>

        {/* Message */}
        <motion.p className="final-message" variants={child}>
          {final.message}
        </motion.p>

        {/* Gold rule */}
        <motion.div className="final-divider" variants={child} />

        {/* Quote */}
        <motion.blockquote className="final-quote" variants={child}>
          {final.quote}
        </motion.blockquote>

        <motion.p className="final-quote-author" variants={child}>
          {final.quoteAuthor}
        </motion.p>

        {/* Repeat confetti button */}
        <motion.button
          className="final-confetti-btn"
          variants={child}
          onClick={handleRepeat}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
        >
          <span>✦</span>
          <span>Celebrate again</span>
          <span>✦</span>
        </motion.button>
      </motion.div>
    </section>
  )
}

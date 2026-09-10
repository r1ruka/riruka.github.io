import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { content } from '../data/birthdayContent'

export default function WhyYoureSpecial() {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.4 })

  // Split sentence into individual words
  const words = content.specialReveal.split(' ')

  return (
    <section className="special-section">
      {/* Subtle background glow */}
      <div
        aria-hidden="true"
        style={{
          position:   'absolute',
          inset:      0,
          background: 'radial-gradient(ellipse 50% 40% at 50% 50%, rgba(201,169,110,0.04) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <p className="special-quote" ref={ref}>
        {words.map((word, i) => (
          <motion.span
            key={i}
            className="special-word"
            initial={{ opacity: 0, y: 20, filter: 'blur(4px)' }}
            animate={
              inView
                ? { opacity: 1, y: 0, filter: 'blur(0px)' }
                : { opacity: 0, y: 20, filter: 'blur(4px)' }
            }
            transition={{
              delay:    i * 0.055,
              duration: 0.7,
              ease:     [0.16, 1, 0.3, 1],
            }}
          >
            {word}{' '}
          </motion.span>
        ))}
      </p>
    </section>
  )
}

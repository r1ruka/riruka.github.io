import { motion } from 'framer-motion'
import FloatingParticles from './FloatingParticles'
import { content } from '../data/birthdayContent'

// Parent stagger container
const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.22, delayChildren: 0.5 },
  },
}

// Each child fades + rises
const item = {
  hidden:  { opacity: 0, y: 36 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.1, ease: [0.16, 1, 0.3, 1] } },
}

export default function Hero({ onOpen }) {
  const { hero, recipient } = content

  return (
    <section className="hero">
      {/* Ambient particles */}

      {/* Ghost large year in background */}
      <div
        aria-hidden="true"
        style={{
          position:     'absolute',
          bottom:       '6%',
          right:        '4%',
          fontFamily:   'var(--font-display)',
          fontSize:     'clamp(5rem, 16vw, 13rem)',
          fontWeight:   300,
          color:        'rgba(201,169,110,0.04)',
          lineHeight:   1,
          userSelect:   'none',
          pointerEvents:'none',
          zIndex:       1,
        }}
      >
        {new Date().getFullYear()}
      </div>

      {/* Main content */}
      <motion.div
        className="hero__content"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {/* Eyebrow label */}
        <motion.p className="hero__eyebrow" variants={item}>
          {content.date} &nbsp;·&nbsp; For {recipient}
        </motion.p>

        {/* Big italic title */}
        <motion.h1 className="hero__title" variants={item}>
          {hero.greeting}
        </motion.h1>

        {/* Handwritten subtitle */}
        <motion.p className="hero__subtitle" variants={item}>
          {hero.subtitle}
        </motion.p>

        {/* Decorative divider */}
        <motion.div className="hero__divider" variants={item}>
          ✦
        </motion.div>

        {/* CTA button */}
        <motion.div variants={item}>
          <button className="hero__btn" onClick={onOpen}>
            <span>{hero.buttonText}</span>
            <svg
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.5 2v11M2.5 8l5 5 5-5"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </motion.div>
      </motion.div>

      {/* Fade to next section */}
      <div className="hero__bottom-fade" />
    </section>
  )
}

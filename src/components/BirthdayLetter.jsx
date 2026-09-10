import { useState, useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { content } from '../data/birthdayContent'

/* ── Typewriter hook (for signature only) ─── */
function useTypewriter(text, speed = 60, start = false) {
  const [displayed, setDisplayed] = useState('')

  useEffect(() => {
    if (!start) return
    let i = 0
    setDisplayed('')
    const id = setInterval(() => {
      if (i < text.length) {
        setDisplayed(text.slice(0, ++i))
      } else {
        clearInterval(id)
      }
    }, speed)
    return () => clearInterval(id)
  }, [text, speed, start])

  return displayed
}

/* ── Paragraph stagger variants ───────────── */
const list = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.28 } },
}
const para = {
  hidden:  { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } },
}

/* ── Main Component ───────────────────────── */
export default function BirthdayLetter() {
  const { birthdayLetter } = content

  const sectionRef   = useRef(null)
  const signatureRef = useRef(null)

  const sectionInView   = useInView(sectionRef,   { once: true, amount: 0.2 })
  const signatureInView = useInView(signatureRef, { once: true, amount: 1 })

  const typedClosing   = useTypewriter(birthdayLetter.closing,   55, signatureInView)
  const typedSignature = useTypewriter(birthdayLetter.signature, 80, signatureInView && typedClosing.length === birthdayLetter.closing.length)

  const showClosingCursor   = signatureInView && typedClosing.length   < birthdayLetter.closing.length
  const showSignatureCursor = signatureInView && typedSignature.length < birthdayLetter.signature.length

  return (
    <section className="bletter-section" ref={sectionRef}>
      <div className="bletter-glow" aria-hidden="true" />

      <div className="bletter-container">
        {/* Section heading */}
        <motion.div
          className="bletter-header"
          initial={{ opacity: 0, y: 24 }}
          animate={sectionInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="bletter-header-title">{birthdayLetter.title}</h2>
          <div className="bletter-header-rule" />
        </motion.div>

        {/* Paper card */}
        <motion.div
          className="bletter-paper"
          initial={{ opacity: 0, y: 60 }}
          animate={sectionInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 1.3, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Paragraphs — staggered fade-in */}
          <motion.div variants={list} initial="hidden" animate={sectionInView ? 'visible' : 'hidden'}>
            {birthdayLetter.paragraphs.map((text, i) => (
              <motion.p key={i} className="bletter-paragraph" variants={para}>
                {text}
              </motion.p>
            ))}
          </motion.div>

          {/* Closing + Signature — typewriter */}
          <div className="bletter-closing" ref={signatureRef}>
            <span className="bletter-closing-text">
              {typedClosing}
              {showClosingCursor && <span className="cursor" />}
            </span>
            <span className="bletter-signature">
              {typedSignature}
              {showSignatureCursor && <span className="cursor" />}
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

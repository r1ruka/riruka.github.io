import { motion } from 'framer-motion'
import { content } from '../data/birthdayContent'

/* ── Wax Seal ─────────────────────────────── */
function WaxSeal({ initial }) {
  return (
    <div className="wax-seal">
      <div className="wax-seal__outer">
        <span className="wax-seal__initial">{initial}</span>
      </div>
    </div>
  )
}

/* ── Vintage Stamp ────────────────────────── */
function VintageStamp({ text }) {
  return (
    <div className="vintage-stamp">
      <span className="stamp-icon">✉</span>
      <span className="stamp-text">{text}</span>
    </div>
  )
}

/* ── Letter Section ───────────────────────── */
export default function Letter() {
  const { letter } = content

  return (
    <section className="letter-section">
      {/* Warm glow behind the paper card */}
      <div className="letter-glow" aria-hidden="true" />

      <div className="letter-container">
        {/* Paper card entrance */}
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 1.3, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="letter-paper">
            <WaxSeal initial={letter.sealInitial} />
            <VintageStamp text={letter.stampText} />

            {/* Salutation */}
            <motion.p
              className="letter-salutation"
              initial={{ opacity: 0, x: -18 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.35, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            >
              {letter.salutation}
            </motion.p>

            {/* Body paragraphs */}
            {letter.paragraphs.map((para, i) => (
              <motion.p
                key={i}
                className="letter-paragraph"
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{
                  delay: 0.2 + i * 0.18,
                  duration: 0.9,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                {para}
              </motion.p>
            ))}

            {/* Closing */}
            <motion.div
              className="letter-closing"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.55, duration: 0.9 }}
            >
              <span className="letter-closing__text">{letter.closing}</span>
              <span className="letter-signature">{letter.signature}</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

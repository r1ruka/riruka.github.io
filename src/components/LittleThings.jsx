import { motion } from 'framer-motion'
import { content } from '../data/birthdayContent'

/* Stagger variants for the grid */
const grid = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
}

const card = {
  hidden:  { opacity: 0, y: 28, scale: 0.97 },
  visible: {
    opacity: 1,
    y:       0,
    scale:   1,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
}

export default function LittleThings() {
  const { littleThings, littleThingsTitle, littleThingsSubtitle } = content

  return (
    <section className="things-section">
      {/* Header */}
      <motion.div
        className="things-header"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      >
        <h2 className="things-title">{littleThingsTitle}</h2>
        <span className="things-subtitle">{littleThingsSubtitle}</span>
      </motion.div>

      {/* Cards grid */}
      <motion.div
        className="things-grid"
        variants={grid}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
      >
        {littleThings.map((thing, i) => (
          <motion.div key={i} className="thing-card" variants={card}>
            <p className="thing-text">{thing}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}

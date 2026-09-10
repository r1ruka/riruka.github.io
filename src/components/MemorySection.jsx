import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function MemorySection({ memory, index }) {
  const ref = useRef(null)

  // Parallax: background moves at a slower rate than scroll
  const { scrollYProgress } = useScroll({
    target:  ref,
    offset: ['start end', 'end start'],
  })
  const bgY = useTransform(scrollYProgress, [0, 1], ['-8%', '8%'])

  const alignRight = memory.align === 'right'

  return (
    <section className="memory-section" ref={ref}>
      {/* Parallax background */}
      <motion.div className="memory-bg" style={{ y: bgY }}>
        <div
          className="memory-bg-img"
          style={
            memory.image
              ? {
                  backgroundImage: `url(${memory.image})`,
                  backgroundSize:  'cover',
                  backgroundPosition: 'center',
                }
              : { background: memory.gradient }
          }
        />
        <div className="memory-overlay" />
      </motion.div>

      {/* Ghost year */}
      <div className="memory-year" aria-hidden="true">
        {memory.year}
      </div>

      {/* Text content */}
      <div
        style={{
          width:       '100%',
          display:     'flex',
          justifyContent: alignRight ? 'flex-end' : 'flex-start',
          padding:     '0 clamp(1.5rem, 6vw, 5rem)',
        }}
      >
        <motion.div
          className="memory-content"
          initial={{ opacity: 0, x: alignRight ? 40 : -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="memory-eyebrow">{memory.eyebrow}</p>

          <div className="memory-rule" />

          <h2 className="memory-title">{memory.title}</h2>

          <p className="memory-body">{memory.body}</p>
        </motion.div>
      </div>
    </section>
  )
}

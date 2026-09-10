import { motion } from 'framer-motion'
import { content } from '../data/birthdayContent'

/* ── Single Polaroid Card ─────────────────── */
function Polaroid({ photo, index }) {
  return (
    <motion.div
      className="polaroid-card"
      style={{ rotate: photo.rotation }}
      initial={{ opacity: 0, y: 50, rotate: photo.rotation }}
      whileInView={{ opacity: 1, y: 0, rotate: photo.rotation }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{
        delay:    index * 0.12,
        duration: 0.9,
        ease:     [0.16, 1, 0.3, 1],
      }}
      whileHover={{
        rotate:    0,
        scale:     1.06,
        zIndex:    10,
        boxShadow: '0 20px 60px rgba(0,0,0,0.55)',
        transition: { duration: 0.35, ease: 'easeOut' },
      }}
    >
      {/* Image area — shows photo or gradient placeholder */}
      <div
        className="polaroid-img"
        style={{ '--gradient': photo.gradient }}
      >
        {photo.src ? (
          <img
            src={photo.src}
            alt={photo.caption}
            loading="lazy"
            onError={(e) => { e.currentTarget.style.display = 'none' }}
          />
        ) : (
          <span style={{ opacity: 0.35, letterSpacing: '0.1em', fontSize: '0.6rem' }}>
            add photo
          </span>
        )}
      </div>

      {/* Caption below image (inside white polaroid border) */}
      <p className="polaroid-caption">{photo.caption}</p>
    </motion.div>
  )
}

/* ── Gallery Section ──────────────────────── */
export default function PolaroidGallery() {
  const { photos, galleryTitle, gallerySubtitle } = content

  return (
    <section className="gallery-section">
      {/* Section header */}
      <motion.div
        className="gallery-header"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      >
        <h2 className="gallery-title">{galleryTitle}</h2>
        <p className="gallery-subtitle">{gallerySubtitle}</p>
      </motion.div>

      {/* Polaroid grid */}
      <div className="gallery-grid">
        {photos.map((photo, i) => (
          <Polaroid key={i} photo={photo} index={i} />
        ))}
      </div>
    </section>
  )
}

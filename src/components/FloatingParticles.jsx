import { useMemo } from 'react'

export default function FloatingParticles({ count = 45, color = '201, 169, 110' }) {
  const particles = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        id:    i,
        left:  `${Math.random() * 100}%`,
        top:   `${Math.random() * 80 + 10}%`,
        size:  Math.random() * 2 + 0.5,
        dur:   Math.random() * 16 + 12,
        delay: -(Math.random() * 28),
        op:    Math.random() * 0.45 + 0.05,
        drift: (Math.random() - 0.5) * 70,
      })),
    [count]
  )

  return (
    <div className="particles-layer" aria-hidden="true">
      {particles.map((p) => (
        <div
          key={p.id}
          className="particle"
          style={{
            left:       p.left,
            top:        p.top,
            width:      `${p.size}px`,
            height:     `${p.size}px`,
            background: `rgba(${color}, ${p.op})`,
            '--dur':    `${p.dur}s`,
            '--delay':  `${p.delay}s`,
            '--drift':  `${p.drift}px`,
            '--max-op': p.op,
          }}
        />
      ))}
    </div>
  )
}

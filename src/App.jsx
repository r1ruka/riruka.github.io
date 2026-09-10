import { useEffect, useRef } from 'react'
import { motion, useScroll } from 'framer-motion'
import Hero from './components/Hero'
import Letter from './components/Letter'
import MemorySection from './components/MemorySection'
import PolaroidGallery from './components/PolaroidGallery'
import WhyYoureSpecial from './components/WhyYoureSpecial'
import BirthdayLetter from './components/BirthdayLetter'
import FinalSurprise from './components/FinalSurprise'
import MusicToggle from './components/MusicToggle'
import Background3D from './components/Background3D'
import { content } from './data/birthdayContent'

export default function App() {
  const letterRef = useRef(null)
  const { scrollYProgress } = useScroll()

  // Mouse tracking → CSS variable → cursor glow in body::before
  useEffect(() => {
    const move = (e) => {
      document.documentElement.style.setProperty('--mouse-x', `${e.clientX}px`)
      document.documentElement.style.setProperty('--mouse-y', `${e.clientY}px`)
    }
    window.addEventListener('mousemove', move, { passive: true })
    return () => window.removeEventListener('mousemove', move)
  }, [])

  const scrollToLetter = () => {
    letterRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <>
      {/* 3D Background Layer */}
      <Background3D />

      {/* Scroll progress line at top */}
      <div className="scroll-progress">
        <motion.div className="scroll-progress__bar" style={{ scaleX: scrollYProgress }} />
      </div>

      <Hero onOpen={scrollToLetter} />

      <div ref={letterRef}>
        <Letter />
      </div>

      {content.memories.map((memory, i) => (
        <MemorySection key={memory.id} memory={memory} index={i} />
      ))}

      <PolaroidGallery />
      <WhyYoureSpecial />
      <BirthdayLetter />
      <FinalSurprise />

      {content.music.enabled && <MusicToggle />}
    </>
  )
}
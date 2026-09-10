import { useState, useRef, useEffect } from 'react'
import { content } from '../data/birthdayContent'

export default function MusicToggle() {
  const [playing,  setPlaying]  = useState(false)
  const [hasMusic, setHasMusic] = useState(true)
  const audioRef = useRef(null)

  useEffect(() => {
    const audio = new Audio(content.music.src)
    audio.loop   = true
    audio.volume = 0.45

    audio.addEventListener('error', () => {
      // Music file not found — hide the button silently
      setHasMusic(false)
    })

    audioRef.current = audio
    return () => { audio.pause(); audio.src = '' }
  }, [])

  if (!hasMusic) return null

  const toggle = () => {
    const audio = audioRef.current
    if (!audio) return
    if (playing) {
      audio.pause()
      setPlaying(false)
    } else {
      audio.play().then(() => setPlaying(true)).catch(() => setPlaying(false))
    }
  }

  return (
    <div className="music-toggle" title={playing ? 'Pause music' : 'Play music'}>
      <button className="music-btn" onClick={toggle} aria-label={playing ? 'Pause music' : 'Play music'}>
        {playing ? (
          /* Animated equalizer bars */
          <span className={`music-bars ${playing ? '' : 'paused'}`} aria-hidden="true">
            <span className="music-bar" />
            <span className="music-bar" />
            <span className="music-bar" />
          </span>
        ) : (
          /* Play icon */
          <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor">
            <path d="M3 2.5l9 4.5-9 4.5V2.5z" />
          </svg>
        )}
      </button>
    </div>
  )
}

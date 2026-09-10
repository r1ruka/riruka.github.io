import { Canvas } from '@react-three/fiber'
import { Sparkles, Stars } from '@react-three/drei'

export default function Background3D() {
  return (
    <div 
      aria-hidden="true" 
      style={{ 
        position: 'fixed', 
        inset: 0, 
        zIndex: 1, /* Changed to 1 so it appears over the dark backgrounds */
        pointerEvents: 'none' 
      }}
    >
      <Canvas camera={{ position: [0, 0, 1] }}>
        {/* Subtle, slow-moving 3D stars */}
        <Stars 
          radius={50} 
          depth={50} 
          count={1600} 
          factor={2} 
          saturation={0} 
          fade 
          speed={0.5} 
        />
        
        {/* 3D golden dust floating towards the camera */}
        <Sparkles 
          count={300} 
          scale={12} 
          size={1.5} 
          speed={0.3} 
          opacity={0.35} 
          color="#c9a96e" 
        />
      </Canvas>
    </div>
  )
}
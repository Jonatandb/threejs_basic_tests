// https://r3f.docs.pmnd.rs/getting-started/your-first-scene

import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Sparkles } from '@react-three/drei'
import { useRef } from 'react'

const RotatingCube = () => {
  const meshRef = useRef()

  useFrame(() => {
    if (!meshRef.current) return
    meshRef.current.rotation.x += 0.01
    meshRef.current.rotation.y += 0.01
  })

  return (
    <mesh ref={meshRef}>
      <cylinderGeometry args={[1, 1, 1]} />
      <meshLambertMaterial color='#468585' emissive='#468585' />

      <Sparkles
        count='100'
        scale='1.5'
        size='2'
        speed='0.001'
        noise='0.1'
        color='yellow'
      />
    </mesh>
  )
}

const App = () => {
  return (
    <Canvas
      style={{
        height: '100vh',
        width: '100vw',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <OrbitControls enableZoom enablePan enableRotate />

      <directionalLight position={[1, 1, 1]} intensity={10} color={0x9cdba6} />

      <color attach={'background'} args={[0xf0f0f0]} />

      <RotatingCube />
    </Canvas>
  )
}

export default App


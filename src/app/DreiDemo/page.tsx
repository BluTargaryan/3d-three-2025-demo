'use client'

import React from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import RotatingCube from '../components/RotatingCube'

const DreiDemo = () => {
  return (
    <Canvas style={{height: '100vh', width: '100vw', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <OrbitControls enableZoom enablePan enableRotate/>
        <directionalLight position={[1, 1, 1]} intensity={10} color={0x9cdba6}/>
        <color attach='background' args={['#f0f0f0']}/>

        <RotatingCube/>
    </Canvas>
  )
}

export default DreiDemo
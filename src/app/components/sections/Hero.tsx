'use client'

import { OrbitControls, PerspectiveCamera} from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React, { Suspense } from 'react'
import HackerRoom from '../HackerRoom'
import CanvasLoader from '../CanvasLoader'
import { Leva } from 'leva'
import { useControls } from 'leva'
import { useMediaQuery } from 'react-responsive'
import { calculateSizes } from '@/constants'
const Hero = () => {
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' })
    const isTablet = useMediaQuery({ query: '(min-width: 768px) and (max-width: 1024px)' })
    const isSmallScreen = useMediaQuery({ query: '(max-width: 480px)' })

    const sizes = calculateSizes(isSmallScreen, isMobile, isTablet)

    const x = useControls('hackerRoom', {
        positionX: {
            value: 2.5,
            min: -10,
            max: 10
        },
        positionY: {
            value: 2.5,
            min: -10,
            max: 10
        },
        positionZ: {
            value: 2.5,
            min: -10,
            max: 10
        },
        rotationX: {
            value: 0,
            min: -10,
            max: 10
        },
        rotationY: {
            value: 0,
            min: -10,
            max: 10
        },
        rotationZ: {
            value: 0,
            min: -10,
            max: 10
        },
        scaleX: {
            value: 0.1,
            min: -10,
            max: 10
        },
        scaleY: {
            value: 0.1,
            min: -10,
            max: 10
        },
        scaleZ: {
            value: 0.1,
            min: -10,
            max: 10
        },
    });
  return (
    <section className='min-h-screen border-2 border-blue-500 w-full flex flex-col relative'>
      <div className='w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3'>
        <p
        className='sm:text-3xl text-xl
        font-medium text-white text-center
        '
        >Hi, I am Peace <span className='waving-hand'>👋</span></p>
      <p className='hero-tag text_gray_gradient'>
        Building Exceptional User Experiences
      </p>
      </div>

      <div className='w-full h-full inset-0 absolute'>
        {/* <Leva/> */}
       <Canvas>
        <Suspense fallback={<CanvasLoader />}>        
        <PerspectiveCamera makeDefault position={[0, 0, 20]} />
        <HackerRoom 
        // scale={0.1} 
        // position={[0, 0, 0]} 
        // rotation={[0, 0.0x.positionX, x.positionY, x.positionZ7, 0]}
        scale={isMobile ? 0.07 : 0.1}
        position={[2, -8, 2]} 
        rotation={[0, -Math.PI, 0]}/>
        <ambientLight intensity={1} />
        <directionalLight position={[10, 10, 10]} intensity={0.5} />
        </Suspense>
       </Canvas>     
      </div>
    </section>
  )
}

export default Hero
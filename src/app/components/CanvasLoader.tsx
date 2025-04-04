'use client'
import React, { useEffect, useState } from 'react'
import { Html, useProgress } from '@react-three/drei'

const CanvasLoader = () => {
  const { progress } = useProgress()
  const [displayProgress, setDisplayProgress] = useState(0)

  useEffect(() => {
    setDisplayProgress(progress)
  }, [progress])

  return (
    <Html as='div' center style={{display:'flex', justifyContent:'center', alignItems:'center', flexDirection:'column'}}>
        <span className='canvas-loader'/>
        <p style={{fontSize:14, color:'#F1F1F1', fontWeight:'bold', marginTop:40}}>{displayProgress && `${displayProgress.toFixed(2)}%`}</p>
    </Html>
  )
}

export default CanvasLoader
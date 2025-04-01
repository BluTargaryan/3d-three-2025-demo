'use client'

import React, { useEffect, useRef }  from 'react'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

const ReactTestDemo = () => {

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

      const canvas:HTMLCanvasElement = document.getElementById('canvas') as HTMLCanvasElement
    
    const scene = new THREE.Scene()
    scene.background = new THREE.Color(0xf0f0f0)

    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    camera.position.z=5

    const geometry: THREE.DodecahedronGeometry = new THREE.DodecahedronGeometry(1, 1)
    const material: THREE.MeshLambertMaterial = new THREE.MeshLambertMaterial({color:0x480585, emissive:0x480585})
    const dodecahedron: THREE.Mesh = new THREE.Mesh(geometry, material)
    
    const boxgeometry:THREE.BoxGeometry = new THREE.BoxGeometry(2, 0.1, 2)
    const boxmaterial:THREE.MeshBasicMaterial = new THREE.MeshBasicMaterial({color:0x480585})
    const box:THREE.Mesh = new THREE.Mesh(boxgeometry, boxmaterial)

    box.position.y = -1.5

    scene.add(dodecahedron)
    scene.add(box)

    const light:THREE.DirectionalLight = new THREE.DirectionalLight(0x006769, 100)
    light.position.set(1, 1, 1)
    scene.add(light)


    const renderer: THREE.WebGLRenderer = new THREE.WebGLRenderer({canvas})
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setPixelRatio(window.devicePixelRatio)

    const controls = new OrbitControls(camera, renderer.domElement)
    controls.enableDamping = true
    controls.dampingFactor = 0.05
    controls.enableZoom = true
    controls.enablePan = true

    const animate = () => {
      requestAnimationFrame(animate)
      dodecahedron.rotation.x += 0.01
      dodecahedron.rotation.y += 0.01

      box.rotation.x += 0.05
      box.rotation.y += 0.05

      controls.update()
      renderer.render(scene, camera)
    }

    animate()

    window.addEventListener('resize', () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    })

    return () => {
      containerRef.current?.removeChild(renderer.domElement);
    };

  }, []);

  return (
    <div ref={containerRef}>
        <canvas id='canvas'>

        </canvas>
    </div>
  )
}

export default ReactTestDemo
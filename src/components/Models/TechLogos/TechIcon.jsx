import React, { useEffect } from 'react'
import { Float } from '@react-three/drei'
import '@react-three/fiber'

import { Environment, useGLTF } from '@react-three/drei'

const TechIcon = ({ model }) => {
  const { scene } = useGLTF(model.path);

  useEffect(() => {
    if(model.name === "Interactive Developer"){
        scene.scene.traverse((child) => {
            if(child.isMesh && child.name === 'object_5'){
                child.material = new THREE.MeshStandardMaterial({
                    color: 'white',})
            }
        })
    }
    },[scene])
  return (
    <canvas>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5,5,5]}/>
        <Environment preset="city" />

        <OrbitControls enableZoom={false} enablePan={false} enableRotate={true} />

        <Float speed={5.5} rotationIntensity={0.5} floatIntensity={0.9}/>
        <group scale={model.scale} rotation={model.rotation}>
        <primitive object={scene}/>
        </group>
    </canvas>
  )
}

export default TechIcon

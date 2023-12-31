import { createRoot } from 'react-dom/client'
import React, { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Handle, Position } from 'reactflow'

function Box(props) {
  // This reference will give us direct access to the mesh
  const meshRef = useRef()
  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false)
  const [active, setActive] = useState(false)
  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => (meshRef.current.rotation.x += delta))
  // Return view, these are regular three.js elements expressed in JSX
  return (
    <mesh
      {...props}
      ref={meshRef}
      scale={active ? 1.5 : 1}
      onClick={(event) => setActive(!active)}
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
    </mesh>
  )
}

createRoot(document.getElementById('root')).render(
  <Canvas>
    <ambientLight />
    <pointLight position={[10, 10, 10]} />
    <Box position={[-1.2, 0, 0]} />
    <Box position={[1.2, 0, 0]} />
  </Canvas>,
)

export function Output({data}){
    return (
        <div className='=h-80 w-70 rounded-md bg-black overflow-hidden border border solid border-black'>
            <Handle type="target" position={Position.Left} id="p" style={{top:60}}>
                <div className='text-white relative-left-3 bottom-3'>p</div>
            </Handle>
            <Handle type="target" position={Position.Left} id="p" style={{top:60}}>
                <div className='text-white relative-left-3 bottom-3'>r</div>
            </Handle>
            <Handle type="target" position={Position.Left} id="p" style={{top:60}}>
                <div className='text-white relative-left-3 bottom-3'>s</div>
            </Handle>
            <div className="p-4 bg-orange-500 z-10 text-white">Output</div>
            </div>
            
    )
}
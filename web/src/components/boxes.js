import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Box from 'src/components/Box';
import ReactDOM from 'react-dom';
import React, { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';

export default function BoxesPage() {
    function Box(props) {
        // This reference will give us direct access to the mesh
        const mesh = useRef();

        useFrame((state, delta) => (mesh.current.rotation.x += 0.01));

        // Set up state for the hovered and active state
        const [hovered, setHover] = useState(false);
        const [active, setActive] = useState(false);
        // Subscribe this component to the render-loop, rotate the mesh every frame
        useFrame((state, delta) => (mesh.current.rotation.x += 0.01));
        // Return view, these are regular three.js elements expressed in JSX
        return (
            <mesh
                {...props}
                ref={mesh}
                scale={active ? 1.5 : 1}
                onClick={() => setActive(!active)}
                onPointerOver={() => setHover(true)}
                onPointerOut={() => setHover(false)}>
                <boxGeometry args={[5, 5, 5]} />
                <meshStandardMaterial color={hovered ? 'grey' : 'orange'} />
            </mesh>
        );
    }

    return (
        <div style={{ width: '100vw', height: '100vh' }}>
            <Canvas camera={{ position: [0, 0, 3.5] }}>
                <ambientLight intensity={2} />
                <pointLight position={[4, 4, 4]} />
                <Box position={[10, 0, 0]} />
                <Box position={[-10, 0, 0]} />
                <Box position={[0, 10, 0]} />
                <Box position={[0, -10, 0]} />
                <OrbitControls />
            </Canvas>
        </div>
    );
}

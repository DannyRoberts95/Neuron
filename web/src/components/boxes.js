import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import React, { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { useTheme } from '@emotion/react';

export default function BoxesPage() {
    const theme = useTheme();

    function Box(props) {
        // This reference will give us direct access to the mesh
        const mesh = useRef();
        useFrame(() => (mesh.current.rotation.x += 0.01));
        // Set up state for the hovered and active state
        const [hovered, setHover] = useState(false);
        const [active, setActive] = useState(false);
        // Subscribe this component to the render-loop, rotate the mesh every frame
        useFrame(() => (mesh.current.rotation.y += 0.01));
        // Return view, these are regular three.js elements expressed in JSX
        return (
            <mesh
                {...props}
                ref={mesh}
                scale={hovered ? 1.05 : 1}
                onClick={() => setActive(!active)}
                onPointerOver={() => setHover(true)}
                onPointerOut={() => setHover(false)}>
                <boxGeometry args={[5, 5, 5]} />
                <meshStandardMaterial
                    color={hovered ? theme.palette.primary.main : theme.palette.text.primary}
                    wireframe
                />
            </mesh>
        );
    }

    return (
        <div style={{ width: '100vw', height: '100vh' }}>
            <Canvas camera={{ position: [0, 0, 5] }}>
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

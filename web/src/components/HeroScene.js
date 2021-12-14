import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import React, { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { useTheme } from '@emotion/react';

export default function BoxesPage() {
    const theme = useTheme();

    return (
        <div style={{ width: '100vw', height: '100vh' }}>
            <Canvas frameloop="demand">
                <ambientLight intensity={0.1} />
                <directionalLight color="red" position={[0, 0, 5]} />
                <mesh
                    visible
                    userData={{ hello: 'world' }}
                    position={[1, 2, 3]}
                    rotation={[Math.PI / 2, 0, 0]}
                    onClick={(e) => console.log('click')}>
                    <sphereGeometry args={[1, 64, 64]} />
                    <meshStandardMaterial color="hotpink" transparent />
                </mesh>
                <OrbitControls />
            </Canvas>
        </div>
    );
}

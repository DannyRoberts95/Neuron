import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Box from 'src/components/Box';

export default function BoxesPage() {
    return (
        <div style={{ width: '100vw', height: '100vh' }}>
            <Canvas camera={{ position: [0, 0, 35] }}>
                <ambientLight intensity={2} />
                <pointLight position={[40, 40, 40]} />
                <Box position={[10, 0, 0]} />
                <Box position={[-10, 0, 0]} />
                <Box position={[0, 10, 0]} />
                <Box position={[0, -10, 0]} />
                {/* <OrbitControls /> */}
            </Canvas>
        </div>
    );
}

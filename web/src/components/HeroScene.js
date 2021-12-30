import { Canvas } from '@react-three/fiber';
import { Environment, Html, OrbitControls } from '@react-three/drei';
import React, { useRef, useState, useEffect, Suspense } from 'react';
import { useFrame } from '@react-three/fiber';
import { useTheme } from '@emotion/react';
import client from '@/client';
import groq from 'groq';
import { useRouter } from 'next/router';
import { BoxGeometry } from 'three';
import { Group } from 'three';
import { Fade, Paper, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { EffectComposer, Outline, SSAO } from '@react-three/postprocessing';

const Neuron = (props) => {
    const theme = useTheme();
    const router = useRouter();

    const { post, pos, size, rot } = props;
    const { slug, title, description } = post;

    const group = useRef();

    const [hovered, setHovered] = useState(false);
    const [hidden, setHidden] = useState(false);

    const handleClick = () => {
        router.push(`/post/${slug.current}`);
    };

    const handleFrame = () => {
        group.current.rotation.x += 0.01;
    };

    useFrame(handleFrame);

    

    return (
        <group ref={group} rotation={rot} onClick={handleClick}>
            <mesh
                visible
                position={pos}
                onPointerOver={() => setHovered(true)}
                onPointerOut={() => setHovered(false)}
            >
                <sphereGeometry args={[size, 24, 24]} />
                <meshStandardMaterial
                    wireframe={hovered}
                    metalness={0.5}
                    roughness={0.2}
                    color={'orange'}
                />
                {/* <Html>
                    <Fade in={hovered} timeout={200}>
                        <Box sx={{ p: 2, minWidth: 200 }} component={Paper} elevation={12}>
                            <Typography variant="h6">{title}</Typography>
                        </Box>
                    </Fade>
                </Html> */}
            </mesh>
        </group>
    );
};

export default function BoxesPage() {
    const theme = useTheme();

    const [postData, setPostData] = useState(null);
    const [error, setError] = useState(null);
    const [fetching, setFetching] = useState(true);

    const [hovered, onHover] = useState(null);
    const selected = hovered ? [hovered] : undefined;

    const query = groq`
    *[_type == "post" && publishedAt < now()]{ title,
    slug,
    description,
    "categories": categories[]->title,
    "mainImage": mainImage=>image,
    publishedAt,
    }|order(publishedAt desc)[0...5]
    `;

    const getPostData = async () => {
        await client
            .fetch(query)
            .then((res) => {
                if (res) {
                    setPostData(res);
                } else {
                    setError(true);
                }
            })
            .then(() => setFetching(false));
    };

    useEffect(async () => {
        getPostData();
    }, []);

    const buildNeurons = () => {
        if (error || fetching) return;
        const neurons = [...postData].map((post, i) => {
        // const neurons = [postData[0]].map((post, i) => {
            const size = 1;
            const spacing = 4;
            const x = i * spacing - (postData.length * spacing) / 2;
            return (
                <Neuron
                    key={post.slug.current + i}
                    post={post}
                    pos={[x, 0, 0]}
                    size={size}
                    // rot={[(Math.PI / 7) * i, 0, 0]}
                />
            );
        });
        console.log(neurons);
        return neurons;
    };

    if (fetching) return null;

    if (error) return null;

    return (
        <div style={{ width: '100vw', height: '100vh' }}>
            <Canvas frameloop="demand" camera={{ position: [0, 0, 15] }}>
                {/* <color attach="background" args={['#f0f0f0']} /> */}
                <fog attach="fog" args={['red', 60, 110]} />
                <ambientLight intensity={1.5} />
                <pointLight position={[100, 10, -50]} intensity={20} castShadow />
                <pointLight position={[-100, -100, -100]} intensity={10} color="red" />

                {buildNeurons()}

                <OrbitControls />

                <EffectComposer multisampling={0}>
                    <SSAO
                        samples={31}
                        radius={10}
                        intensity={20}
                        luminanceInfluence={0.1}
                        color="white"
                    />
                </EffectComposer>
                <Suspense fallback={null}>
                    <Environment preset="city" />
                </Suspense>
            </Canvas>
        </div>
    );
}

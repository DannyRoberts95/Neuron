import React from 'react';
import ReactFullpage from '@fullpage/react-fullpage';

import Link from 'next/link';
import groq from 'groq';
import client from '../client';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Box from 'src/components/Box';

const Index = (props) => {
    const { posts = [] } = props;
    const { projects = [] } = props;

    const postLinks = posts.map(
        ({ _id, title = '', slug = '', _updatedAt = '' }) =>
            slug && (
                <li key={_id}>
                    <Link href="/post/[slug]" as={`/post/${slug.current}`}>
                        <a>{title}</a>
                    </Link>{' '}
                    ({new Date(_updatedAt).toDateString()})
                </li>
            )
    );

    const projectLinks = projects.map(
        ({ _id, title = '', slug = '', _updatedAt = '' }) =>
            slug && (
                <li key={_id}>
                    <Link href="/project/[slug]" as={`/project/${slug.current}`}>
                        <a>{title}</a>
                    </Link>{' '}
                    ({new Date(_updatedAt).toDateString()})
                </li>
            )
    );

    function BoxesPage() {
        return (
            <div style={{ width: '100vw', height: '100vh' }}>
                <Canvas camera={{ position: [0, 0, 35] }}>
                    <ambientLight intensity={1} />
                    <pointLight position={[10, 10, 10]} />
                    <Box position={[2, 0, 0]} />
                    <Box position={[-2, 0, 0]} />
                    <Box position={[0, 2, 0]} />
                    <Box position={[0, -2, 0]} />
                    <Box position={[0, 0, 2]} />
                    <Box position={[0, 0, -2]} />
                    <OrbitControls />
                </Canvas>
            </div>
        );
    }

    return (
        <ReactFullpage
            scrollOverflow={true}
            onLeave={() => console.log('scroll')}
            // afterLoad={() => console.log("scroll")}
            render={({ fullpageApi }) => {
                return (
                    <div>
                        <div className="section" style={{ backgroundColor: 'white' }}>
                            <BoxesPage />
                        </div>
                        <div className="section" style={{ backgroundColor: 'red' }}>
                            {projectLinks}
                        </div>
                        <div className="section" style={{ backgroundColor: 'blue' }}>
                            {postLinks}
                        </div>
                        <div className="section" style={{ backgroundColor: 'purple' }}>
                            section 3
                        </div>
                        <div className="section" style={{ backgroundColor: 'yellow' }}>
                            <h3>Section 3</h3>
                            <button onClick={() => fullpageApi.moveTo(1, 0)}>Move top</button>
                        </div>
                    </div>
                );
            }}
        />
    );
};

Index.getInitialProps = async () => ({
    posts: await client.fetch(groq`
      *[_type == "post" && publishedAt < now()]|order(publishedAt desc)
    `),
    projects: await client.fetch(groq`
      *[_type == "project" && publishedAt < now()]|order(publishedAt desc)
    `)
});

export default Index;

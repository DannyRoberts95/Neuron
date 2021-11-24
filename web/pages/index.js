import React from 'react';
import Link from 'next/link';
import groq from 'groq';
import client from '../client';
import BoxesPage from './boxes';

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

    return (
        <div>
            <div className="section">
                <BoxesPage />
            </div>
            <div className="section">{projectLinks}</div>
            <div className="section">{postLinks}</div>
        </div>
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

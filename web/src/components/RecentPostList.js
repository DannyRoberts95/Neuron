import React, { useEffect, useState } from 'react';
import { Grid, Typography, Box, Button } from '@mui/material';
import PostCard from './PostCard';
import groq from 'groq';
import Link from '@/components/Link';

import client from '@/client';

const RecentPostList = (props) => {
    const { category = null, amount = 3, ...others } = props;
    const [postData, setPostData] = useState(null);
    const [error, setError] = useState(null);
    const [fetching, setFetching] = useState(true);

    const buildQuery = () => {
        console.log(`title == "${category}"`);
        return !category
            ? groq`
            *[_type == "post" && publishedAt < now()]{
                    title,
                    slug,
                    "categories": categories[]->title,
                    "mainImage": mainImage=>image,
                    publishedAt,
                }|order(publishedAt desc)[0...${amount}]
                `
            : groq`*[_type == 'post'&&
                 publishedAt < now() &&
                *[_type == "category" &&
                title == "${category}"][0]._id in categories[]._ref]{
                    title,
                    slug,
                    "categories": categories[]->title,
                    "mainImage": mainImage=>image,
                    publishedAt,
                }|order(publishedAt desc)[0...${amount}]`;
    };

    const getPostData = async () => {
        await client
            .fetch(buildQuery())
            .then((res) => {
                console.log(res);
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
    }, [category]);

    const header = () => {
        return `${category || 'Recent Posts'}`;
    };

    if (fetching || error || !postData) return null;

    return (
        <Grid item container spacing={2} {...others}>
            <Grid item container justifyContent={'space-between'}>
                <Typography variant="h6" gutterBottom>
                    {header()}
                </Typography>
                <Button component={Link} href={category ? `/posts?category=${category}` : '/posts'}>
                    View All
                </Button>
            </Grid>
            {postData.map((post, i) => (
                <Grid
                    key={post.slug.current + i + 'recent_post'}
                    item
                    flexBasis="100%"
                    xs={12}
                    sm={4}
                >
                    <PostCard post={post} />
                </Grid>
            ))}
        </Grid>
    );
};

export default RecentPostList;

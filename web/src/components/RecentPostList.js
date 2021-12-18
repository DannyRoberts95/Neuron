import React, { useEffect, useState } from 'react';
import { Grid, Typography, Box, Button } from '@mui/material';
import PostCard from './PostCard';
import groq from 'groq';
import Link from '@/components/Link';


import client from '@/client';

const RecentPostList = (props) => {
    const { ...others } = props;
    const [postData, setPostData] = useState(null);
    const [error, setError] = useState(null);
    const [fetching, setFetching] = useState(true);

    const getPostData = async () => {
        await client
            .fetch(
                groq`
*[_type == "post" && publishedAt < now()]{ title,
slug,
"categories": categories[]->title,
"mainImage": mainImage=>image,
publishedAt,
}|order(publishedAt desc)[0...3]
`
            )
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
    }, []);

    if (fetching || error) return null;
    else
        return (
            <Grid item container spacing={2} {...others}>

                <Grid item container justifyContent={'space-between'}>
                    <Typography variant="h6" gutterBottom>
                        More Posts
                    </Typography>
                    <Button component={Link} href="/posts">
                        All Posts
                    </Button>
                </Grid>
                {postData.map((post, i) => (
                    <Grid
                        key={post.slug.current + i + 'recent_post'}
                        item
                        flexBasis="100%"
                        xs={12}
                        sm={4}>
                        <PostCard post={post} />
                    </Grid>
                ))}
            </Grid>
        );
};

export default RecentPostList;

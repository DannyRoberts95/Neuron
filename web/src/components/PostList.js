import React from 'react';
import { Grid, Grow } from '@mui/material';
import PostCard from './PostCard';

export default function QuiltedImageList(props) {
    const { posts, categoryFilters = [], ...others } = props;

    const displayCards = posts
        .filter((post) => {
            if (categoryFilters.length == 0 || categoryFilters.includes("all")) return true;
            return post.categories.some((category) => categoryFilters.includes(category));
        })
        .map((post, i) => {
            return (
                <Grow in timeout={Math.min(250 + 250 * i, 1500)}>
                    <Grid item flexBasis={'100%'} xs={12} md={6} lg={4} {...others}>
                        <PostCard
                            key={post.title + i}
                            post={post}
                            timeout={Math.min(150 + 250 * i, 1500)}
                        />
                    </Grid>
                </Grow>
            );
        });

    return (
        <Grid sx={{ p: 2 }} container spacing={2}>
            {displayCards}
        </Grid>
    );
}

import React from 'react';
import { Grid, Grow, ImageList, useMediaQuery, useTheme } from '@mui/material';
import PostCard from './PostCard';

export default function QuiltedImageList(props) {
    const { posts, ...others } = props;

    const theme = useTheme();

    const images = [...posts, ...posts, ...posts, ...posts].map((post, i) => {
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
            {images}
        </Grid>
    );
}

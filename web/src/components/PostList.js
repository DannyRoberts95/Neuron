import React from 'react';
import { Grid } from '@mui/material';
import PostCard from './PostCard';

const PostList = (props) => {
    const { posts = [] } = props;

    const postLinks = posts.map((post, i) => (
        <Grid key={post.name + i} item xs={12} sm={6} lg={4}>
            <PostCard post={post} />
        </Grid>
    ));

    return (
        <Grid container direction="row" spacing={2}>
            {postLinks}
        </Grid>
    );
};

export default PostList;

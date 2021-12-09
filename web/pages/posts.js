import React from 'react';
import groq from 'groq';
import client from '../src/client';
import PostList from '@/components/PostList';
import Layout from '@/Layouts/Layout';
import { Container, Grid, ImageList, Typography } from '@mui/material';
import CenteredContent from '@/components/CenteredContent';
import PostCard from '@/components/PostCard';

const Posts = (props) => {
    const { posts = [] } = props;

    return <PostList posts={posts} />;
    // <CenteredContent>
    // <Typography variant="h3" component="h1" gutterBottom>
    //     Posts
    // </Typography>

    {
        /* <Grid item container spacing={2} >
                {posts.map((post, i) => (
                    <Grid key={post.name + i} item flexBasis="100%" xs={12} sm={6} md={4}>
                        <PostCard post={post} />
                    </Grid>
                ))}
            </Grid> */
    }

    {
        /* </CenteredContent> */
    }
};

Posts.getInitialProps = async () => ({
    posts: await client.fetch(groq`
    *[_type == "post" && publishedAt < now()]{ title,
        slug,
      "name": author->name,
      "categories": categories[]->title,
      "authorImage": author->image,
      "mainImage": mainImage=>image,
      publishedAt,
      _updatedAt,
      }|order(publishedAt desc)
  `)
});

Posts.Layout = Layout;

export default Posts;

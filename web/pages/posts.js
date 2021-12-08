import React from 'react';
import groq from 'groq';
import client from '../src/client';
import PostList from '@/components/PostList';
import Layout from '@/Layouts/Layout';
import { Container, Grid, Typography } from '@mui/material';
import CenteredContent from '@/components/CenteredContent';
import PostCard from '@/components/PostCard';

const Posts = (props) => {
    const { posts = [] } = props;

    const latestPosts = posts.slice(posts.length - 4, posts.length) || null;
    console.log(latestPosts)


    return (
        <Container maxWidth={false}>
            <CenteredContent>
                <Typography variant="h1" gutterBottom>
                    Posts
                </Typography>
                <Grid container>
                    <Grid id="latestPost" item xs={12} md={8}>
                        <PostCard post={latestPosts[0]} />
                    </Grid>
                </Grid>
                <PostList posts={posts} />
            </CenteredContent>
        </Container>
    );
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

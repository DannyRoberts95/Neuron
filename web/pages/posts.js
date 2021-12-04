import React from 'react';
import groq from 'groq';
import client from '../client';
import PostList from '@/components/PostList';
import Layout from '@/Layouts/Layout';
import { Container, Typography } from '@mui/material';

const Posts = (props) => {
    const { posts = [] } = props;
    return (
        <Container maxWidth={false}>
            <Typography variant="h1" gutterBottom>
                Posts
            </Typography>
            <PostList posts={posts} />
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

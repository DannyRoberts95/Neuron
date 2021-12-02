import React from 'react';
import groq from 'groq';
import client from '../client';
import PostList from '@/components/PostList';
import Layout from '@/Layouts/Layout';
import { Box } from '@mui/system';
import { Typography } from '@mui/material';

const Posts = (props) => {
    const { posts = [] } = props;
    return (
        <Box sx={{ backgroundColor: 'background.default' }} p={2}>
            <Typography variant="h1" gutterBottom>
                Posts
            </Typography>
            <PostList posts={posts} />
        </Box>
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
      body}|order(publishedAt desc)
  `),
    projects: await client.fetch(groq`
      *[_type == "project" && publishedAt < now()]|order(publishedAt desc)
    `)
});

Posts.Layout = Layout;

export default Posts;

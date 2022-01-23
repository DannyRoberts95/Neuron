// [slug].js

import groq from 'groq';
import imageUrlBuilder from '@sanity/image-url';
import client from '../../src/client';
import StyledBlockedContent from '@/components/StyledBlockedContent';
import PageBaseContainer from '@/components/PageBaseContainer';
import CenteredContent from '@/components/CenteredContent';
import TagStack from '@/components/TagStack';
import Author from '@/components/Author';
import { Button, Divider, Fade, Stack, Typography, useMediaQuery } from '@mui/material';
import { Box } from '@mui/system';
import Layout from '@/Layouts/Layout';
import { format } from 'date-fns';

import HeroImage from '@/components/HeroImage';
import SocialButtons from '@/components/SocialShareButtons';
import { useTheme } from '@emotion/react';
import PostList from "@/components/PostList"
import Meta from '@/components/PageMeta';
import CreatedDate from '@/components/CreatedDate';

function urlFor(source) {
    return imageUrlBuilder(client).image(source);
}

const Post = (props) => {
    const { recentPosts, post } = props;

    const {
        title = 'Missing title',
        name = 'Missing name',
        description = '',
        publishedAt,
        categories,
        authorImage,
        mainImage,
        mainImageCaption = ' ',
        body = []
    } = post;

    const theme = useTheme();
    const isSm = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <PageBaseContainer>
            <Meta title={title} description={description} keywords={categories.join(' ')} />
            <HeroImage image={mainImage} caption={mainImageCaption} />
            <CenteredContent maxWidth="lg" sx={{ padding: 2 }}>
                <Box>
                    <Stack
                        display="flex"
                        direction="row"
                        justifyContent="space-between"
                        alignitems="center"
                    >
                        <CreatedDate date={publishedAt} />
                        <TagStack tags={categories} />
                    </Stack>

                    <Typography variant="h1" gutterBottom>
                        {title}
                    </Typography>

                    <Stack
                        display="flex"
                        direction={isSm ? 'column' : 'row'}
                        spacing={2}
                        justifyContent="space-between"
                        alignitems="flex-end"
                    >
                        <Author author={name} src={urlFor(authorImage).width(50).url()} />
                        <SocialButtons />
                    </Stack>

                    <Box my={2}>
                        <Divider />
                    </Box>

                    <StyledBlockedContent body={body} />

                    <Box mb={2}>
                        <SocialButtons />
                    </Box>

                    <Box my={2}>
                        <Divider />
                    </Box>

                    <PostList posts={recentPosts} sx={{p:0}} />
                </Box>
            </CenteredContent>
        </PageBaseContainer>
    );
};

Post.getInitialProps = async function (context) {
    const { slug = '' } = context.query;

    const post = await client.fetch(
        groq`*[_type == "post" && slug.current == $slug][0]{
        title,
        "name": author->name,
        "categories": categories[]->title,
        "authorImage": author->image,
        "mainImage": mainImage=>image,
        description,
        mainImageCaption,
        publishedAt,
        _updatedAt,
        body
      }`,
        { slug }
    );

    const cats = post.categories.map(item=>`title == "${item}"`).join(" || ")


    const recentPosts = await client.fetch(
        groq`*[_type == 'post'&&
        publishedAt < now() &&
       *[_type == "category" &&
       ${cats}][0]._id in categories[]._ref]{
           title,
           slug,
           "categories": categories[]->title,
           "mainImage": mainImage=>image,
           publishedAt,
       }|order(publishedAt desc)[0...4]`
    );

    return {
        post,
        recentPosts
    };
};

Post.Layout = Layout;
export default Post;

// [slug].js

import groq from 'groq';
import imageUrlBuilder from '@sanity/image-url';
import client from '../../client';
import StyledBlockedContent from '@/components/StyledBlockedContent';
import PageBaseContainer from '@/components/PageBaseContainer';
import CenteredContent from '@/components/CenteredContent';
import TagStack from '@/components/TagStack';
import Author from '@/components/Author';
import { Divider, Fade, Stack, Typography, useMediaQuery } from '@mui/material';
import { Box } from '@mui/system';
import Layout from '@/Layouts/Layout';
import { format } from 'date-fns';

import HeroImage from '@/components/HeroImage';
import SocialButtons from '@/components/SocialButtons';
import { useTheme } from '@emotion/react';
import RecentPostList from '@/components/RecentPostList';

function urlFor(source) {
    return imageUrlBuilder(client).image(source);
}

const Post = (props) => {
    const {
        title = 'Missing title',
        name = 'Missing name',
        publishedAt,
        categories,
        authorImage,
        mainImage,
        mainImageCaption = ' ',
        body = []
    } = props;

    const theme = useTheme();
    const isSm = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <PageBaseContainer>
            <HeroImage image={mainImage} caption={mainImageCaption} />
            <CenteredContent maxWidth="md" sx={{ padding: 2 }}>
                <Fade in timeout={1000}>
                    <Box>
                        <Stack
                            display="flex"
                            direction="row"
                            justifyContent="space-between"
                            alignitems="center"
                        >
                            <Typography variant="overline">
                                {format(new Date(publishedAt), 'dd.MM.yy')}
                            </Typography>
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
                        <Box mb={2}>
                            <Typography variant="h6" gutterBottom>
                                More Posts
                            </Typography>
                            <RecentPostList />
                        </Box>
                    </Box>
                </Fade>
            </CenteredContent>
        </PageBaseContainer>
    );
};

const query = groq`*[_type == "post" && slug.current == $slug][0]{
  title,
  "name": author->name,
  "categories": categories[]->title,
  "authorImage": author->image,
  "mainImage": mainImage=>image,
  mainImageCaption,
  publishedAt,
  _updatedAt,
  body
}`;

Post.getInitialProps = async function (context) {
    const { slug = '' } = context.query;
    return await client.fetch(query, { slug });
};

Post.Layout = Layout;
export default Post;

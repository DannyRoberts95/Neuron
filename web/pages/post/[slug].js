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
import SocialButtons from '@/components/SocialButtons';
import { useTheme } from '@emotion/react';
import RecentPostList from '@/components/RecentPostList';
import Meta from '@/components/PageMeta';
import { AccessTime } from '@mui/icons-material';

function urlFor(source) {
    return imageUrlBuilder(client).image(source);
}

const Post = (props) => {
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
    } = props;

    const theme = useTheme();
    const isSm = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <PageBaseContainer>
            <Meta title={title} description={description} keywords={categories.join(' ')} />
            <HeroImage image={mainImage} caption={mainImageCaption} />
            <CenteredContent maxWidth="md" sx={{ padding: 2 }}>
                <Fade in timeout={1000}>
                    <Box>
                        <Stack
                            display="flex"
                            direction="row"
                            justifyContent="space-between"
                            alignitems="center">
                            <Typography variant="overline" display={'flex'} alignItems="center">
                                <AccessTime sx={{ mr: 1 }} />{' '}
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
                            alignitems="flex-end">
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

                        

                        <RecentPostList />
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
  description,
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

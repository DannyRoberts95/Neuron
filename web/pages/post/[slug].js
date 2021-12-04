// [slug].js

import groq from 'groq';
import imageUrlBuilder from '@sanity/image-url';
import client from '../../client';
import StyledBlockedContent from '@/components/StyledBlockedContent';
import PageBaseContainer from '@/components/PageBaseContainer';
import CenteredContent from '@/components/CenteredContent';
import TagStack from '@/components/TagStack';
import Author from '@/components/Author';
import { Divider, Fade, Typography } from '@mui/material';
import { Box } from '@mui/system';
import Layout from '@/Layouts/Layout';
import { format } from 'date-fns';

import HeroImage from '@/components/HeroImage';

function urlFor(source) {
    return imageUrlBuilder(client).image(source);
}

const Post = (props) => {
    console.log(props);
    const {
        title = 'Missing title',
        name = 'Missing name',
        publishedAt,
        categories,
        authorImage,
        mainImage,
        body = []
    } = props;

    return (
        <PageBaseContainer>
            <HeroImage image={mainImage} caption="Lorem Ipsum" />
            <CenteredContent maxWidth="md" sx={{ padding: 2 }}>
                <Fade in timeout={1000}>
                    <Box>
                        <Typography variant="h1">{title}</Typography>
                        <Typography variant="body2">
                            {format(new Date(publishedAt), 'dd.MM.yy')}
                        </Typography>

                        <Author author={name} src={urlFor(authorImage).width(50).url()} />
                        <TagStack tags={categories} />
                        <Box my={4}>
                            <Divider />
                        </Box>
                        <StyledBlockedContent body={body} />
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

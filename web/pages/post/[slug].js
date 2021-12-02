// [slug].js

import groq from 'groq';
import imageUrlBuilder from '@sanity/image-url';
import client from '../../client';
import StyledBlockedContent from '@/components/StyledBlockedContent';
import PageBaseContainer from '@/components/PageBaseContainer';
import CenteredContent from '@/components/CenteredContent';
import TagStack from '@/components/TagStack';
import Author from '@/components/Author';
import { Divider, Typography } from '@mui/material';
import { Box } from '@mui/system';
import Layout from '@/Layouts/Layout';
import { format } from 'date-fns';

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
            <article width="100%">
                {mainImage && (
                    <div>
                        <figure
                            style={{
                                margin: 0,
                                overflow: 'hidden',
                                maxWidth: '100%'
                            }}>
                            <img
                                alt={title}
                                width="100%"
                                height={'100%'}
                                src={urlFor(mainImage[0])
                                    // .height(Math.floor((9 / 16) * 2000))
                                    .fit('crop')
                                    .auto('format')
                                    .url()}
                            />
                        </figure>
                    </div>
                )}

                <CenteredContent maxWidth="md" sx={{ padding: 2 }}>
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
                </CenteredContent>
            </article>
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
    // It's important to default the slug so that it doesn't return "undefined"
    const { slug = '' } = context.query;
    return await client.fetch(query, { slug });
};

Post.Layout = Layout;
export default Post;

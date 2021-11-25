import React from 'react';
import Link from 'next/link';
import { Button, Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
import groq from 'groq';
import Stack from '@mui/material/Stack';

import imageUrlBuilder from '@sanity/image-url';
import client from '../../client';
import StyledBlockedContent from '@/components/StyledBlockedContent';
import PageBaseContainer from '@/components/PageBaseContainer';
import CenteredContent from '@/components/CenteredContent';
import { Body2, H1 } from '@/components/Typography';
import TagStack from '@/components/TagStack';
import Author from '@/components/Author';
import { Divider } from '@mui/material';
import { Box } from '@mui/system';
import SanityNextImage from './SanityNextImage';
import format from 'date-fns/format';

import Reorder from '@mui/icons-material/Reorder';
// import groq from 'groq';
// import client from '../client';
// import BoxesPage from './boxes';

function urlFor(source) {
    return imageUrlBuilder(client).image(source);
}

const PostCard = (props) => {
    console.log(props.post);
    const { _id, title = '', slug, publishedAt = '', mainImage, categories } = props.post;

    return (
        slug && (
            <Card raised component={Link} naked href={`/post/${slug.current}`}>
                <CardActionArea sx={{ maxWidth: 345 }}>
                    <SanityNextImage img={mainImage[0]} alt={`${title}_main_image`} quality={75} />
                    <CardContent>
                        <Typography variant="body2" color="text.secondary" gutterBottom>
                            {format(new Date(publishedAt), 'dd.MM.yy')}
                        </Typography>

                        <Typography variant="h6" component="div">
                            {title}
                        </Typography>
                        <TagStack tags={categories} />

                        <Stack direction="row-reverse" spacing={1}>
                            <Typography gutterBottom variant="button">
                                READ
                            </Typography>
                            <Reorder />
                        </Stack>
                    </CardContent>
                </CardActionArea>
            </Card>
        )
    );
};

const PostList = (props) => {
    const { posts = [] } = props;

    const postLinks = posts.map((post) => <PostCard key={post._id} post={post} />);

    return (
        <div>
            <Stack direction="row" spacing={1}>
                {postLinks}
            </Stack>
        </div>
    );
};

export default PostList;

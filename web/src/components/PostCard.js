import React from 'react';
import Link from 'next/link';
import { Card, CardActionArea, CardContent, Typography } from '@mui/material';
import Stack from '@mui/material/Stack';

import TagStack from '@/components/TagStack';
import SanityNextImage from './SanityNextImage';
import format from 'date-fns/format';

import Reorder from '@mui/icons-material/Reorder';

const PostCard = (props) => {

    const { title = '', slug, publishedAt = '', mainImage, categories } = props.post;

    return (
        slug && (
            <Card raised component={Link} naked href={`/post/${slug.current}`}>
                <CardActionArea>
                    <SanityNextImage
                        img={mainImage[0]}
                        alt={`${title}_main_image`}
                        quality={75}
                        height={150}
                        width={225}
                    />
                    <CardContent>
                        <Typography variant="body2" color="text.secondary" gutterBottom>
                            {format(new Date(publishedAt), 'dd.MM.yy')}
                        </Typography>

                        <Typography variant="h6" component="div">
                            {title}
                        </Typography>
                        <TagStack tags={categories} />

                        {/* <Stack direction="row-reverse" spacing={1}>
                            <Typography gutterBottom variant="button">
                                READ
                            </Typography>
                            <Reorder />
                        </Stack> */}
                    </CardContent>
                </CardActionArea>
            </Card>
        )
    );
};

export default PostCard;

import React, { useState } from 'react';
import Link from 'next/link';
import { Card, CardActionArea, CardContent, Stack, Typography } from '@mui/material';

import TagStack from '@/components/TagStack';
import SanityNextImage from './SanityNextImage';
import format from 'date-fns/format';
import { Reorder } from '@mui/icons-material';

const PostCard = (props) => {
    const { post, ...others } = props;
    const { title = '', slug, publishedAt = '', mainImage, categories } = post;
    const [hovered, setHovered] = useState(false);

    // console.log(props);
    return (
        slug && (
            <Link naked href={`/post/${slug.current}`}>
                <Card
                    sx={{
                        transition: 'all 0.1s',
                        color: hovered ? 'primary.main' : 'inherit'
                    }}
                    {...others}>
                    <CardActionArea
                        onMouseEnter={() => setHovered(true)}
                        onMouseLeave={() => setHovered(false)}>
                        <SanityNextImage
                            img={mainImage[0]}
                            alt={`${title}_main_image`}
                            quality={50}
                            height={75}
                            width={130}
                            layout="responsive"
                        />
                        <CardContent sx={{ mb: 2, height: '100%' }}>
                            <Typography variant="body2" gutterBottom>
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
            </Link>
        )
    );
};

export default PostCard;

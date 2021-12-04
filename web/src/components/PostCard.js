import React, { useState } from 'react';
import Link from 'next/link';
import { Card, CardActionArea, CardContent, Stack, Typography } from '@mui/material';

import TagStack from '@/components/TagStack';
import SanityNextImage from './SanityNextImage';
import format from 'date-fns/format';
import { Reorder } from '@mui/icons-material';
import { Box } from '@mui/system';

const PostCard = (props) => {
    const { title = '', slug, publishedAt = '', mainImage, categories } = props.post;
    const [hovered, setHovered] = useState(false);

    // console.log(props);
    return (
        slug && (
            <Link naked href={`/post/${slug.current}`}>
                <Card
                    sx={{
                        transition: 'all 0.1s',
                        color: hovered ? 'primary.main' : 'inherit'
                    }}>
                    <CardActionArea
                        onMouseEnter={() => setHovered(true)}
                        onMouseLeave={() => setHovered(false)}>
                        <Box>
                            <SanityNextImage
                                img={mainImage[0]}
                                alt={`${title}_main_image`}
                                quality={50}
                                height={150}
                                width={225}
                            />
                            <CardContent>
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
                        </Box>
                    </CardActionArea>
                </Card>
            </Link>
        )
    );
};

export default PostCard;

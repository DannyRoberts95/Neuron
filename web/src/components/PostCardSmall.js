import React, { useState } from 'react';
import Link from 'next/link';
import { Card, CardActionArea, CardContent, Skeleton, Stack, Typography } from '@mui/material';

import TagStack from '@/components/TagStack';
import SanityNextImage from './SanityNextImage';
import format from 'date-fns/format';
import { Reorder } from '@mui/icons-material';

const PostCard = (props) => {
    const { post, loading = false, ...others } = props;

    if (loading) {
        return (
            <Stack spacing={1} sx={{ width: '100%' }}>
                <Skeleton variant="rectangular" width={'100%'} height={200} />
                <Typography variant="body2" component="div">
                    <Skeleton variant="text" />
                </Typography>
                <Typography variant="h6" component="div">
                    <Skeleton variant="text" />
                </Typography>
            </Stack>
        );
    }

    const { title = '', slug, publishedAt = '', categories } = post;
    const [hovered, setHovered] = useState(false);

    return (
        slug && (
            <Link naked href={`/post/${slug.current}`}>
                <Card
                    elevation={1}
                    sx={{
                        transition: 'all 0.1s',
                        color: hovered ? 'primary.main' : 'inherit'
                    }}
                    {...others}
                >
                    <CardActionArea
                        onMouseEnter={() => setHovered(true)}
                        onMouseLeave={() => setHovered(false)}
                    >
                        <CardContent sx={{  height: '100%' }}>
                            <Typography variant="body2" gutterBottom>
                                {format(new Date(publishedAt), 'dd.MM.yy')}
                            </Typography>

                            <Typography variant="subtitle1" component="div">
                                {title}
                            </Typography>

                            <TagStack tags={categories} />

                        </CardContent>
                    </CardActionArea>
                </Card>
            </Link>
        )
    );
};

export default PostCard;

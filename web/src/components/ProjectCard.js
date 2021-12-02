import React, { useState } from 'react';
import Link from 'next/link';
import { Card, CardActionArea, CardContent, Stack, Typography } from '@mui/material';

import TagStack from '@/components/TagStack';
import SanityNextImage from './SanityNextImage';
import format from 'date-fns/format';
import { Reorder } from '@mui/icons-material';

const ProjectCard = (props) => {
    const { title = '', slug, publishedAt = '', mainImage, categories } = props.project;
    const [hovered, setHovered] = useState(false);

    return (
        slug && (
            <Card
                variant="elevation"
                elevation={2}
                component={Link}
                naked
                href={`/project/${slug.current}`}>
                <CardActionArea
                    onMouseEnter={() => setHovered(true)}
                    onMouseLeave={() => setHovered(false)}>
                    <SanityNextImage
                        img={mainImage[0]}
                        alt={`${title}_main_image`}
                        quality={75}
                        height={150}
                        width={225}
                    />
                    <CardContent
                        sx={{
                            backgroundColor: 'background.paper',
                            transition: 'all 0.25s',
                            color: hovered ? 'primary.main' : 'inherit'
                        }}>
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
        )
    );
};

export default ProjectCard;

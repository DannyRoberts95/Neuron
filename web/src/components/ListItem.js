import React, { useState } from 'react';
import Link from 'next/link';
import {
    ImageListItem,
    useMediaQuery,
    Typography,
    useTheme,
    ButtonBase,
    Fade,
    Grow
} from '@mui/material';
import { Box } from '@mui/system';

import TagStack from '@/components/TagStack';
import SanityNextImage from './SanityNextImage';
import format from 'date-fns/format';

export default function ListItem(props) {
    const theme = useTheme();
    const isSm = useMediaQuery(theme.breakpoints.down('sm'));
    const [hovered, setHovered] = useState(false);
    const { post, ...others } = props;
    const { title = '', slug, publishedAt = '', mainImage, categories } = post;

    return (
        <Link naked href={`/post/${slug.current}`}>
            <Grow
                in
                timeout={props.timeout}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}>
                <ImageListItem
                    sx={{ overflow: 'hidden', cursor: 'hidden', textAlign: 'left' }}
                    component={ButtonBase}
                    {...others}>
                    <SanityNextImage
                        img={mainImage[0]}
                        alt={`${title}_main_image`}
                        quality={50}
                        height={900 / 3}
                        width={1600 / 3}
                        layout="responsive"
                    />
                    <Fade in={hovered || isSm}>
                        <Box
                            display="flex"
                            flexDirection="column"
                            p={2}
                            sx={{
                                position: 'absolute',
                                bottom: '0px',
                                width: '100%',
                                color: 'white',
                                backgroundColor: 'rgba(0, 0, 0, 0.3)',
                                opacity: '0.3'
                            }}>
                            <Typography variant="body2" gutterBottom>
                                {format(new Date(publishedAt), 'dd.MM.yy')}
                            </Typography>

                            <Typography variant="subtitle2" text="">
                                {title}
                            </Typography>

                            <TagStack tags={categories} />
                        </Box>
                    </Fade>
                </ImageListItem>
            </Grow>
        </Link>
    );
}

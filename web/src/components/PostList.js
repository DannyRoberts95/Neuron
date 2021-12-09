import React, { useState } from 'react';
import Link from 'next/link';
import {
    ImageList,
    ImageListItem,
    Typography,
    useMediaQuery,
    useTheme,
    Fade,
    ButtonBase,
} from '@mui/material';
import { Box } from '@mui/system';

import TagStack from '@/components/TagStack';
import SanityNextImage from './SanityNextImage';
import format from 'date-fns/format';

const ListItem = (props) => {
    const theme = useTheme();
    const isSm = useMediaQuery(theme.breakpoints.down('sm'));

    const [hovered, setHovered] = useState(false);
    const { post, ...others } = props;
    const { title = '', slug, publishedAt = '', mainImage, categories } = post;

    return (
        <Link naked href={`/post/${slug.current}`}>
            <ImageListItem
                sx={{ overflow: 'hidden', cursor: 'hidden', textAlign: 'left' }}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
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
        </Link>
    );
};

export default function QuiltedImageList(props) {
    const { posts, ...others } = props;

    const theme = useTheme();
    const isXs = useMediaQuery(theme.breakpoints.down('xs'));
    const isSm = useMediaQuery(theme.breakpoints.down('sm'));
    const isMd = useMediaQuery(theme.breakpoints.down('md'));

    const images = [...posts, ...posts, ...posts, ...posts].map((post, i) => {
        const cols = () => {
            if (i === 0) return isSm ? 1 : 2;
            else return 1;
        };
        const rows = () => {
            if (i === 0) return isSm ? 1 : 2;
            else return 1;
        };

        return <ListItem key={post.title + i} post={post} cols={cols()} rows={rows()} />;
    });

    return (
        <ImageList sx={{ m: 0, p: 1 }} variant="quilted" cols={isXs ? 1 : 3} gap={8}>
            {images}
        </ImageList>
    );
}

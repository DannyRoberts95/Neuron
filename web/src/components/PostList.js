import React from 'react';
import { ImageList, useMediaQuery, useTheme } from '@mui/material';
import ListItem from './ListItem';

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

        return (
            <ListItem
                key={post.title + i}
                post={post}
                cols={cols()}
                rows={rows()}
                timeout={Math.min(150 + 250 * i, 1500)}
            />
        );
    });

    return (
        <ImageList sx={{ m: 0, p: 1 }} variant="quilted" cols={isXs ? 1 : 3} gap={8}>
            {images}
        </ImageList>
    );
}

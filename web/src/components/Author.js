import * as React from 'react';
import Stack from '@mui/material/Stack';
import { Body2 } from './Typography';
import { Box } from '@mui/system';

export default function Author(props) {
    const { author, src } = props;
    return (
        <Box p={2}>
            <Stack direction="row" alignItems="center">
                <Box sx={{ borderRadius: '50%' }} overflow="hidden" mr={2}>
                    <img alt="authorImage" src={src} />
                </Box>
                <Body2>By {author}</Body2>
            </Stack>
        </Box>
    );
}

import * as React from 'react';
import Stack from '@mui/material/Stack';

import { Box } from '@mui/system';
import { Typography } from '@mui/material';

export default function Author(props) {
    const { author, src } = props;
    return (
        <Box p={2}>
            <Stack direction="row" alignItems="center">
                <Box sx={{ borderRadius: '50%' }} overflow="hidden" mr={2}>
                    <img alt="authorImage" src={src} />
                </Box>
                <Typography variant="body2">By {author}</Typography>
            </Stack>
        </Box>
    );
}

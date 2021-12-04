import * as React from 'react';
import Stack from '@mui/material/Stack';

import { Box } from '@mui/system';
import { Typography } from '@mui/material';

export default function Author(props) {
    const { author, src } = props;
    return (
        <Box>
            <Stack direction="row" alignItems="center">
                <Box sx={{ borderRadius: 1 }}  mr={2}>
                    <img alt="authorImage" src={src} width="40px" height="40px" />
                </Box>
                <Typography variant="body2">8Y {author}</Typography>
            </Stack>
        </Box>
    );
}

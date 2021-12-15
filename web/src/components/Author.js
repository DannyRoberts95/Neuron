import React, { useState } from 'react';
import Stack from '@mui/material/Stack';

import { Box } from '@mui/system';
import { Typography } from '@mui/material';
import Link from 'src/components/Link';

export default function Author(props) {
    const { author, src } = props;
    const [hovered, setHovered] = useState(false);
    return (
        <Box
            component={Link}
            href={`/about?a=${author}`}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            sx={{ textDecoration: 'none', color: hovered ? 'primary.main' : 'inherit' }}>
            <Stack direction="row" alignItems="center">
                <Box sx={{ borderRadius: 1 }} mr={2}>
                    <img alt="authorImage" src={src} width="40px" height="40px" />
                </Box>
                <Typography variant="body2">{author}</Typography>
            </Stack>
        </Box>
    );
}

import * as React from 'react';
import { Chip, Box } from '@mui/material';
import Stack from '@mui/material/Stack';
import { Typography } from '@mui/material';

export default function TagStack(props) {
    const { tags, ...others } = props;

    const bull = (
        <Box component="span" sx={{ display: 'inline-block', mx: '2px', transform: 'scale(1)' }}>
            •
        </Box>
    );

    return (
        <Stack direction="row" spacing={1} {...others}>
            {tags.map((tag, i) => (
                <Typography key={tag} variant="overline" color="inherit">
                    {tag}
                    {i !== tags.length - 1 && bull}
                </Typography>
            ))}
        </Stack>
    );
}

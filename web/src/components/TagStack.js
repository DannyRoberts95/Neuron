import * as React from 'react';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

export default function TagStack(props) {
    const { tags, ...others } = props;
    return (
        <Stack direction="row" spacing={1} {...others}>
            {tags.map((tag) => (
                <Chip key={tag} label={tag} color="primary" variant="outlined" />
            ))}
        </Stack>
    );
}

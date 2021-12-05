//REACT
import { Box } from '@mui/system';
import React from 'react';

export default function PageBaseContainer({ sx, children, ...others }) {
    return (
        <Box
            sx={{
                overflow: 'hidden',
                minHeight: '100vh',
                width: '100%',
                ...sx
            }}
            display="flex"
            flexDirection="column"
            justifyContent="flex-start"
            alignItems="center"
            {...others}
        >
            {children}
        </Box>
    );
}

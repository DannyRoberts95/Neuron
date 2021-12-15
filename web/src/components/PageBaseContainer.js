//REACT
import { Fade } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

export default function PageBaseContainer({ sx, children, ...others }) {
    return (
        <Fade in timeout={500}>
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
        </Fade>
    );
}

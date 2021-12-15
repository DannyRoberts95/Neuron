// [slug].js
import React from 'react';
import { Fade } from '@mui/material';
import { Box } from '@mui/system';

export default function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <Fade in={value === index} timeout={750} mountOnEnter unmountOnExit>
            <Box
                role="tabpanel"
                id={`tabpanel-${index}`}
                aria-labelledby={`-tab-${index}`}
                {...other}>
                {value === index && children}
            </Box>
        </Fade>
    );
}

import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import Link from './Link';

const LogoLink = ({ width = '125px', ...others }) => {
    return (
        <Box width={width} {...others}>
            {/* <img
                width={width}
                src="/assets/branding/name_black.svg"
                alt="logo"
            /> */}
            <Typography
                component={Link}
                href="/"
                naked
                variant="h6"
                align="center"
                color="textPrimary"
                sx={{
                    transition: 'all 0.5s',
                    textDecoration: 'none',
                    '&:hover': { color: 'primary.main' }
                }}
            >
                N3UR0N
            </Typography>
        </Box>
    );
};
export default LogoLink;

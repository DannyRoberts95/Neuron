import { Box } from '@mui/system';
import React from 'react';
import Link from './Link';

const LogoLink = ({ width = '125px', ...others }) => {
    return (
        <Box width={width} component={Link} href="/" {...others}>
            <img
                width={width}
                src="/assets/branding/name_black.svg"
                alt="logo"
            />
        </Box>
    );
};
export default LogoLink;

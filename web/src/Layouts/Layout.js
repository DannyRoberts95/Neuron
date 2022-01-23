import * as React from 'react';
import { Box } from '@mui/system';
import AppBarMenu from '@/components/AppBarMenu';

export default function Layout(props) {
    const { children } = props;
    return (
        <Box>
            <AppBarMenu />
            {children}
        </Box>
    );
}

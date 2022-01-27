import * as React from 'react';
import { Box } from '@mui/system';
import AppBarMenu from '@/components/AppBarMenu';
import Footer from '@/components/Footer';

export default function Layout(props) {
    const { children } = props;
    return (
        <Box>
            <AppBarMenu />
            {children}
            <Footer/>
        </Box>
    );
}

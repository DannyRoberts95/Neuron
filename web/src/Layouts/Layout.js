import * as React from 'react';
import { Box } from '@mui/system';
import ApplicationBar from '@/components/Menu';

export default function Layout(props) {
    const { children } = props;
    return (
        <Box>
            <ApplicationBar />
            {children}
        </Box>
    );
}

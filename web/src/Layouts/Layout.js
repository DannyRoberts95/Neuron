import * as React from 'react';
import { Box } from '@mui/system';
import ApplicationBar from '@/components/ApplicationBar';

export default function Layout(props) {
    const { children } = props;
    return (
        <Box p={2}>
            <ApplicationBar />
            {children}
        </Box>
    );
}

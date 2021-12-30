import { AccessTime } from '@mui/icons-material';
import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import { format } from "date-fns";
import React from 'react';

export default function CreatedDate(props) {
    const { date = new Date(), ...others } = props;
    return (
        <Box display="flex" alignitems="center" {...others}>
            <Typography variant="overline" display={'flex'} alignItems="center">
                <AccessTime sx={{ mr: 1 }} /> {format(new Date(date), 'dd.MM.yy')}
            </Typography>
        </Box>
    );
}

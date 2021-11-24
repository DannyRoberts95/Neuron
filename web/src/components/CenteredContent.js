//REACT
import { Container, Grid } from '@mui/material';
import React from 'react';

export default function CenteredContent(props) {
    const { sx, children, maxWidth = 'lg', ...others } = props;
    return (
        <Grid
            sx={{ width: '100%', padding: 0, ...sx }}
            container
            justifyContent="center"
            alignItems="flex-start"
            {...others}>
            <Container sx={{ padding: 0 }} maxWidth={maxWidth}>
                {children}
            </Container>
        </Grid>
    );
}

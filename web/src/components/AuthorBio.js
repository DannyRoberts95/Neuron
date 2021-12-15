import { Grid, Paper, Typography, Grow } from '@mui/material';
import React from 'react';
import Image from 'next/image';
import { Box } from '@mui/system';
import StyledBlockedContent from './StyledBlockedContent';

export default function AuthorBio(props) {
    const { author } = props;
    const { name, bio, authorImage } = author;
    return (
        <Grid container item alignItems={'center'} direction={'column'} sx={{ p: 2 }}>
            <Typography variant="h1" align='center' gutterBottom>
                {name}
            </Typography>

            <Grow in timeout={750}>
                <Box
                    width={250}
                    height={250}
                    component={Paper}
                    elevation={5}
                    mb={4}
                    sx={{ position: 'relative', borderRadius: '50%', overflow: 'hidden' }}>
                    <Image alt="authorImage" src={authorImage} layout="fill" />
                </Box>
            </Grow>

            <Typography variant="h6" gutterBottom align="center">
                Bio
            </Typography>

            <Box textAlign="justify" component="span">
                <StyledBlockedContent body={bio} />
            </Box>
        </Grid>
    );
}

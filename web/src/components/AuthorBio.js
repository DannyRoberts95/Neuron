import { Grid } from '@mui/material';
import React from 'react';
import Image from 'next/image';

export default function AuthorBio(props) {
    const { author } = props;
    console.log(author);
    const { name, age, bio, authorImage } = author;
    return (
        <Grid container item>
            <Image alt="authorImage" src={authorImage} width="40px" height="40px" />
        </Grid>
    );
}

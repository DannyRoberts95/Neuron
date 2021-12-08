// [slug].js

import groq from 'groq';
import imageUrlBuilder from '@sanity/image-url';
import client from '../src/client';
import StyledBlockedContent from '@/components/StyledBlockedContent';
import PageBaseContainer from '@/components/PageBaseContainer';
import CenteredContent from '@/components/CenteredContent';
import TagStack from '@/components/TagStack';
import Author from '@/components/Author';
import { Divider, Fade, Grid, Stack, Typography, useMediaQuery } from '@mui/material';
import { Box } from '@mui/system';
import Layout from '@/Layouts/Layout';
import { format } from 'date-fns';

import HeroImage from '@/components/HeroImage';
import SocialButtons from '@/components/SocialButtons';
import { useTheme } from '@emotion/react';
import RecentPostList from '@/components/RecentPostList';

function urlFor(source) {
    return imageUrlBuilder(client).image(source);
}

const AboutPage = (props) => {
    console.log(props);
    const theme = useTheme();
    const isSm = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <PageBaseContainer>
            <CenteredContent maxWidth="md">
                <Fade in timeout={1000}>
                    <Grid container>
                        <Grid item>
                            <Grid item>Photo</Grid>
                            <Grid item>Header</Grid>
                        </Grid>
                        <Grid item> body </Grid>
                    </Grid>
                </Fade>
            </CenteredContent>
        </PageBaseContainer>
    );
};

AboutPage.getInitialProps = async () => ({
    authors: await client.fetch(groq`*[_type == "author"]{
        name,
        age,
        nationality,
        bio,
        offences,
        "authorImage": image.asset->url
    }`)
});

AboutPage.Layout = Layout;
export default AboutPage;

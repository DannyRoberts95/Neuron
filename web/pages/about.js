// [slug].js
import React, { useState } from 'react';
import groq from 'groq';
import imageUrlBuilder from '@sanity/image-url';
import client from '../src/client';
import StyledBlockedContent from '@/components/StyledBlockedContent';
import PageBaseContainer from '@/components/PageBaseContainer';
import CenteredContent from '@/components/CenteredContent';
import TagStack from '@/components/TagStack';
import Author from '@/components/Author';
import { Divider, Fade, Grid, Stack, Typography, useMediaQuery, Tabs, Tab } from '@mui/material';
import { Box } from '@mui/system';
import Layout from '@/Layouts/Layout';
import { useTheme } from '@emotion/react';
import TabPanel from '@/components/TabPanel';
import AuthorBio from '@/components/AuthorBio';

const AboutPage = (props) => {
    console.log(props);
    const { authors } = props;
    const theme = useTheme();
    const [tabValue, setTabValue] = useState(0);

    const authorTabs = (
        <Tabs value={tabValue} centered>
            {authors.map((author, i) => (
                <Tab
                    id={`author-tab-${i}`}
                    onClick={() => setTabValue(i)}
                    label={author.name}
                    aria-controls={`author-tabpanel-${i}`}
                />
            ))}
        </Tabs>
    );

    const authorTabPanels = authors.map((author, i) => (
        <TabPanel index={i} value={tabValue}>
            <AuthorBio author={author} />
        </TabPanel>
    ));

    return (
        <PageBaseContainer>
            <CenteredContent maxWidth="md">
                <Grid container>
                    {authorTabs}
                </Grid>
                <Grid container>{authorTabPanels}</Grid>
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

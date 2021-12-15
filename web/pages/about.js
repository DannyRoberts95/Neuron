// [slug].js
import React, { useState } from 'react';
import groq from 'groq';
import client from '../src/client';
import PageBaseContainer from '@/components/PageBaseContainer';
import CenteredContent from '@/components/CenteredContent';
import { Tabs, Tab, IconButton } from '@mui/material';
import { Box } from '@mui/system';
import Layout from '@/Layouts/Layout';
import { useTheme } from '@emotion/react';
import TabPanel from '@/components/TabPanel';
import AuthorBio from '@/components/AuthorBio';
import { NavigateBefore, NavigateNext } from '@mui/icons-material';
import { useRouter } from 'next/router';

const AboutPage = (props) => {
    const { authors } = props;
    const theme = useTheme();
    const router = useRouter();

    const { a } = router.query;

    const initalTabVal = () => {
        if (!a) return 0;
        return authors.map((item) => item.name).indexOf(a);
    };

    const [tabValue, setTabValue] = useState(initalTabVal());

    const handleNext = () => {
        if (tabValue + 1 > authors.length - 1) {
            setTabValue(0);
        } else setTabValue(tabValue + 1);
    };
    const handlePrev = () => {
        if (tabValue - 1 < 0) {
            setTabValue(authors.length - 1);
        } else setTabValue(tabValue - 1);
    };

    const authorTabs = (
        <Tabs value={tabValue} centered sx={{borderBottom:"1px solid text.secondary"}}>
            {authors.map((author, i) => (
                <Tab
                    key={author.name + 'tab'}
                    id={`author-tab-${i}`}
                    onClick={() => setTabValue(i)}
                    label={author.name}
                    aria-controls={`author-tabpanel-${i}`}
                />
            ))}
        </Tabs>
    );

    const authorTabPanels = authors.map((author, i) => (
        <TabPanel key={author.name + 'panel'} index={i} value={tabValue}>
            <AuthorBio author={author} />
        </TabPanel>
    ));

    const tabButtons = (
        <Box width="100%" display="flex" justifyContent={'space-between'}>
            <IconButton
                color="primary"
                size="large"
                sx={{ position: 'fixed', top: '50%', left: theme.spacing(1) }}
                onClick={handlePrev}>
                <NavigateBefore />
            </IconButton>

            <IconButton
                size="large"
                color="primary"
                sx={{ position: 'fixed', top: '50%', right: theme.spacing(1) }}
                onClick={handleNext}>
                <NavigateNext />
            </IconButton>
        </Box>
    );

    return (
        <PageBaseContainer sx={{ p: 2 }}>
            {tabButtons}
            <CenteredContent maxWidth="sm">
                {authorTabs}
                {authorTabPanels}
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

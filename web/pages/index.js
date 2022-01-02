import React, { useEffect, useState } from 'react';
import Layout from '@/Layouts/Layout';
import { useRouter } from 'next/router';
import groq from 'groq';
import client from '@/client';
import { Container, Divider, Fade, Tab, Tabs } from '@mui/material';
import PostList from '@/components/PostList';
import HeroPost from '@/components/HeroPost';
import PageBaseContainer from '@/components/PageBaseContainer';
import { Box } from '@mui/system';

const Index = (props) => {
    const { posts = [], postCategories = [] } = props;
    const router = useRouter();

    useEffect(() => {
        router.prefetch('/post/[slug]', '/posts');
    }, []);

    const [tabValue, setTabValue] = useState(0);
    const [displayList, setDisplayList] = useState(true);

    const allCategories = ['all', ...postCategories.map((item) => item.title)];

    const handleTabSelect = (val) => {
        setTabValue(val);
        setDisplayList(false);
    };

    const tabs = allCategories.map((item, i) => (
        <Tab
            key={item + 'tab' + i}
            id={`filter-tab-${i}`}
            onClick={()=>handleTabSelect(i)}
            label={item}
            aria-controls={`filter-tabpanel-${i}`}
        />
    ));

    return (
        <PageBaseContainer>
            <HeroPost post={posts[0]} />
            <Container maxWidth="lg" sx={{p:0}}>
                <Box sx={{ mx: 2, my: 1 }}>
                    <Tabs value={tabValue} variant="scrollable" scrollButtons="auto">
                        {tabs}
                    </Tabs>
                    <Divider />
                </Box>

                <Fade in={displayList} onExited={() => setDisplayList(true)} mountOnEnter>
                    <Box component="span">
                        <PostList
                            posts={posts.slice(1, posts.length)}
                            categoryFilters={[allCategories[tabValue]]}
                        />
                    </Box>
                </Fade>
            </Container>
        </PageBaseContainer>
    );
};

Index.getInitialProps = async () => ({
    postCategories: await client.fetch(
        groq`*[_type == 'category']{
            title,
          }`
    ),
    posts: await client.fetch(
        groq`*[_type == "post" && publishedAt < now()]{ title,
            slug,
            "name": author->name,
            "categories": categories[]->title,
            "authorImage": author->image,
            "mainImage": mainImage=>image,
            publishedAt,
            _updatedAt,
            }|order(publishedAt desc)
        `
    )
});

Index.Layout = Layout;

export default Index;

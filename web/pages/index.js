import React, { useEffect } from 'react';
import Layout from '@/Layouts/Layout';
import { useRouter } from 'next/router';
import PageBaseContainer from '@/components/PageBaseContainer';
import groq from 'groq';
import client from '@/client';
import HeroImage from '@/components/HeroImage';
import { Box, useTheme } from '@mui/system';
import { ButtonBase, Container, Fade, Grid, Paper, Stack, Typography } from '@mui/material';
import TagStack from '@/components/TagStack';
import CreatedDate from '@/components/CreatedDate';
import Link from '@/components/Link';
import RecentPostList from '@/components/RecentPostList';
const Index = (props) => {
    console.log(props);
    const { slug, mainImage, title, categories, publishedAt } = props;

    const router = useRouter();
    const theme = useTheme();

    useEffect(() => {
        router.prefetch('/post/[slug]', '/posts');
    }, []);

    return (
        <div>
            <ButtonBase
                sx={{ color: theme.palette.primary.main }}
                LinkComponent={Link}
                naked
                href={`/post/${slug.current}`}
            >
                <Box width={'100%'} position="relative" mb={5}>
                    <HeroImage image={mainImage} interactive={false} />

                    <Fade in>
                        <Box
                            width="100%"
                            component={Paper}
                            square
                            elevation={4}
                            sx={{
                                position: 'absolute',
                                bottom: 0,
                                backgroundColor: 'rgb(18, 18, 18,0.66)'
                            }}
                        >
                            <Container sx={{ p: 4 }}>
                                <Stack
                                    display="flex"
                                    direction="row"
                                    justifyContent="space-between"
                                    alignitems="center"
                                >
                                    <TagStack tags={categories} />
                                    <CreatedDate date={publishedAt} />
                                </Stack>
                                <Typography
                                    variant={'h2'}
                                    gutterBottom
                                    color="textPrimary"
                                    component={Link}
                                    href={`/post/${slug.current}`}
                                    sx={{ textDecoration: 'none' }}
                                >
                                    {title}
                                </Typography>
                            </Container>
                        </Box>
                    </Fade>
                </Box>
            </ButtonBase>

            <PageBaseContainer>
                <Container>
                    <Grid container spacing={4}>
                        <Grid item container>
                            <RecentPostList category={'Web'} />
                        </Grid>
                        <Grid item container>
                            <RecentPostList category={'Frontend'} />
                        </Grid>
                        <Grid item container>
                            <RecentPostList category={'Video'} />
                        </Grid>
                        <Grid item container>
                            <RecentPostList category={'Scenography'} />
                        </Grid>
                    </Grid>
                </Container>
            </PageBaseContainer>
        </div>
    );
};

const query = groq`*[_type == "post"][0]{
    title,
    slug,
    "name": author->name,
    "categories": categories[]->title,
    "mainImage": mainImage=>image,
    description,
    publishedAt,
    _updatedAt,
}`;

Index.getInitialProps = async function (context) {
    return await client.fetch(query);
};
Index.Layout = Layout;

export default Index;

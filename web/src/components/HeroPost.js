import React from 'react';
import HeroImage from '@/components/HeroImage';
import { Box, useTheme } from '@mui/system';
import { ButtonBase, Container, Fade, Paper, Stack, Typography } from '@mui/material';
import TagStack from '@/components/TagStack';
import CreatedDate from '@/components/CreatedDate';
import Link from '@/components/Link';

export default function HeroPost(props) {
    const theme = useTheme();

    const { post, ...others } = props;
    const { slug, mainImage, title, categories, publishedAt } = post;
    return (
        <ButtonBase
            sx={{ color: theme.palette.primary.main, width: '100%' }}
            LinkComponent={Link}
            href={`/post/${slug.current}`}
            {...others}
        >
            <Box width={'100%'} position="relative">
                <HeroImage image={mainImage} interactive={false} />

                <Fade in>
                    <Box
                        width="100%"
                        sx={{
                            position: 'absolute',
                            color: 'white',
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
                                <TagStack tags={['Latest', categories]} />
                                <CreatedDate date={publishedAt} />
                            </Stack>
                            <Typography
                                variant={'h2'}
                                gutterBottom
                                color="inherit"
                                sx={[
                                    {
                                        color: 'inherit',
                                        '&:hover': {
                                            color: 'primary.main'
                                        }
                                    },
                                    { textDecoration: 'none', transition: 'all 0.3s' }
                                ]}
                            >
                                {title}
                            </Typography>
                        </Container>
                    </Box>
                </Fade>
            </Box>
        </ButtonBase>
    );
}

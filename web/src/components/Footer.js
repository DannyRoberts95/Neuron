import React, { useState } from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Slide from '@mui/material/Slide';
import {
    Button,
    Drawer,
    Fab,
    Grow,
    IconButton,
    Stack,
    useMediaQuery,
    Fade,
    Grid
} from '@mui/material';
import CenteredContent from './CenteredContent';
import SocialButtons from './SocialShareButtons';
import { useTheme } from '@mui/material';
import { useRouter } from 'next/router';
import { Close, Menu } from '@mui/icons-material';
import links from '@/Consts/SITE_LINKS';
import Link from '@/components/Link';
import LogoLink from './LogoLink';

export default function Footer(props) {
    const theme = useTheme();
    const router = useRouter();
    const isSm = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <CenteredContent sx={{ borderTop: '1px solid black' }}>
            <Stack
                direction="column"
                justifyContent={'center'}
                alignItems={'center'}
                spacing={5}
                sx={{ my: 10 }}
            >
                <LogoLink width={125} />

                <SocialButtons />

                <Stack spacing={2}>
                    {links.map((link, i) => (
                        <Typography
                            sx={{
                                textDecoration: 'none',
                                textTransform: 'uppercase'
                            }}
                            align="center"
                            variant={'body1'}
                            component={Link}
                            href={link.href}
                        >
                            {link.title}
                        </Typography>
                    ))}
                </Stack>

                <Typography variant='body1'>
                © {new Date().getFullYear} Neuron all rights reserved
                </Typography>

            </Stack>
        </CenteredContent>
    );
}

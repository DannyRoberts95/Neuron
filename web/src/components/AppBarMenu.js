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
import { Button, Drawer, Fab, Grow, IconButton, Stack, useMediaQuery, Fade } from '@mui/material';
import CenteredContent from './CenteredContent';
import SocialButtons from './SocialShareButtons';
import { useTheme } from '@mui/material';
import { useRouter } from 'next/router';
import { Close, Menu } from '@mui/icons-material';
import links from '@/Consts/SITE_LINKS';
import Link from '@/components/Link';

import LogoLink from "src/components/LogoLink"

function HideOnScroll(props) {
    const { children } = props;

    const trigger = useScrollTrigger({
        threshold: 0
        // target: window ? window() : undefined
    });

    return (
        <Fade appear={false} in={!trigger}>
            {children}
        </Fade>
    );
}

export default function HideAppBar(props) {
    const theme = useTheme();
    const router = useRouter();
    const isSm = useMediaQuery(theme.breakpoints.down('sm'));

    const [menuOpen, setMenuOpen] = useState(false);

    const handleOpen = () => {
        setMenuOpen(true);
    };

    const handleClose = () => {
        setMenuOpen(false);
    };

    const drawerTransitionTime = 400;

    return (
        <React.Fragment>
            <HideOnScroll>
                <AppBar elevation={0} sx={{ backgroundColor: 'background.paper' }}>
                    {/* <Toolbar> */}
                        <CenteredContent>
                            <Box
                                display="flex"
                                width="100%"
                                justifyContent={'space-between'}
                                alignItems={'center'}
                            >
                                <LogoLink sx={{px:2}}/>

                                <IconButton
                                    size="large"
                                    onClick={menuOpen ? handleClose : handleOpen}
                                    aria-label="menu"
                                >
                                    {menuOpen ? <Close /> : <Menu />}
                                </IconButton>
                            </Box>
                        </CenteredContent>
                    {/* </Toolbar> */}
                </AppBar>
            </HideOnScroll>
            {/* <Toolbar /> */}

            <Drawer
                anchor={'right'}
                open={menuOpen}
                transitionDuration={drawerTransitionTime}
                onClose={handleClose}
            >
                <Box
                    sx={{
                        positon: 'relative',
                        width: isSm ? '100vw' : '340px',
                        height: '100vh'
                    }}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                >
                    <IconButton
                        sx={{ position: 'absolute', right: 16, top: 16 }}
                        onClick={handleClose}
                    >
                        <Close />
                    </IconButton>

                    <SocialButtons sx={{ position: 'absolute', bottom: 16 }} />

                    <Fade in={menuOpen}>
                        <Stack justifyContent="center" spacing={4}>

                            <LogoLink width={150} />

                            {links.map((link, i) => (
                                <Grow
                                    key={link.title + i}
                                    in={menuOpen}
                                    timeout={Math.min(
                                        drawerTransitionTime + i * drawerTransitionTime,
                                        1250
                                    )}
                                >
                                    <Typography
                                        sx={{
                                            textDecoration: 'none',
                                            textTransform: 'uppercase'
                                        }}
                                        variant={'body1'}
                                        component={Link}
                                        align="center"
                                        onClick={handleClose}
                                        href={link.href}
                                    >
                                        {link.title}
                                    </Typography>
                                </Grow>
                            ))}
                        </Stack>
                    </Fade>
                </Box>
            </Drawer>
        </React.Fragment>
    );
}

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
import { Button, Drawer, Fab, Grow, IconButton, Stack, useMediaQuery } from '@mui/material';
import CenteredContent from './CenteredContent';
import SocialButtons from './SocialShareButtons';
import { useTheme } from '@mui/material';
import { useRouter } from 'next/router';
import { Close, Menu } from '@mui/icons-material';
import links from '@/Consts/SITE_LINKS';
import Link from '@/components/Link';

function HideOnScroll(props) {
    const { children } = props;

    const trigger = useScrollTrigger({
        // target: window ? window() : undefined
    });

    return (
        <Slide appear={false} direction="down" in={!trigger}>
            {children}
        </Slide>
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

    const LogoLink = ({ width = '125px', ...others }) => {
        return (
            <Box width={width} component={Link} href="/" {...others}>
                <img width="100%" height="100%" src="/assets/branding/name_black.svg" />
                {/* <Typography color="textPrimary" variant="h5" sx={{textDecoration:"none"}}>Neuron</Typography> */}
            </Box>
        );
    };

    return (
        <React.Fragment>
            <AppBar
                elevation={4}
                sx={{ backgroundColor: 'background.paper' }}
            >
                <Toolbar>
                <CenteredContent>
                    <Box display="flex" width="100%" justifyContent={'space-between'} alignItems={"center"}>
                        <LogoLink />

                        <IconButton
                            size="large"
                            onClick={menuOpen ? handleClose : handleOpen}
                            aria-label="menu"
                        >
                            {menuOpen ? <Close /> : <Menu />}
                        </IconButton>
                    </Box>
                </CenteredContent>
                </Toolbar>
            </AppBar>
            <Toolbar />

            <Drawer
                anchor={'right'}
                open={menuOpen}
                transitionDuration={drawerTransitionTime}
                onClose={handleClose}
            >
                <Box
                    sx={{
                        positon: 'relative',
                        width: '100vw',
                        height: '100vh',
                        backgroundColor: 'background.default'
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

                    <Stack justifyContent="center" spacing={4}>
                        <LogoLink width="200px" onClick={handleClose} />

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
                                    sx={{ textDecoration: 'none', textTransform: 'uppercase' }}
                                    variant={'h6'}
                                    align="center"
                                    component={Link}
                                    onClick={handleClose}
                                    href={link.href}
                                >
                                    {link.title}
                                </Typography>
                            </Grow>
                        ))}

                        <SocialButtons sx={{ pt: 5 }} />
                    </Stack>
                </Box>
            </Drawer>
        </React.Fragment>
    );
}

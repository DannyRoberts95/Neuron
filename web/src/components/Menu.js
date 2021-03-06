import React, { Fragment, useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import Fab from '@mui/material/Fab';

import { Box, Drawer, Grow, Stack, Typography, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material';
import { ArrowBack, Close } from '@mui/icons-material';
import Link from '@/components/Link';
import links from '@/Consts/SITE_LINKS';
import SocialButtons from './SocialShareButtons';
import { useRouter } from 'next/router';
import CenteredContent from './CenteredContent';

export default function ApplicationBar() {
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

    const fabMenuIcon = (
        <Fragment>
            <CenteredContent>
                <Box display="flex" width="100%" justifyContent={"space-between"}>
                    <Box
                        sx={{
                            // position: 'fixed',
                            // zIndex: theme.zIndex.modal + 1,
                            // left: 16,
                            // ...(isSm ? { bottom: theme.spacing(2) } : { top: theme.spacing(2) }),
                            width: 150
                        }}
                    >
                        <img src="/assets/branding/name_white.svg" width={'100%'} height={'100%'} />
                    </Box>

                    <Fab
                        size="small"
                        sx={{
                            borderRadius: '50%',
                            // position: 'fixed',
                            // zIndex: theme.zIndex.modal + 1,
                            // right: 16,
                            ...(isSm ? { bottom: theme.spacing(2) } : { top: theme.spacing(2) })
                        }}
                        onClick={menuOpen ? handleClose : handleOpen}
                        color="primary"
                        aria-label="menu"
                    >
                        {menuOpen ? <Close /> : <MenuIcon />}
                    </Fab>
                </Box>
            </CenteredContent>

            {/* <Fab
                size="small"
                sx={{
                    borderRadius: '50%',
                    position: 'fixed',
                    zIndex: theme.zIndex.modal + 1,
                    left: 16,
                    ...(isSm ? { bottom: theme.spacing(2) } : { top: theme.spacing(2) })
                }}
                onClick={router.back}
                color="primary"
                aria-label="back">
                <ArrowBack />
            </Fab> */}

            <Drawer
                anchor={'right'}
                open={menuOpen}
                transitionDuration={drawerTransitionTime}
                onClose={handleClose}
            >
                <Box
                    sx={{ width: '100vw', height: '100vh', backgroundColor: 'background.default' }}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                >
                    <Stack justifyContent="center" spacing={4}>
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
                                    variant={'subtitle1'}
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
        </Fragment>
    );

    return fabMenuIcon;
}

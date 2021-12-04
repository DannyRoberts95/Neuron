import React, { Fragment, useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import Fab from '@mui/material/Fab';

import { Box, Drawer, Grow, Stack, Typography, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material';
import { Close } from '@mui/icons-material';
import Link from '@/components/Link';
import links from '@/Consts/SITE_LINKS';

export default function ApplicationBar(props) {
    const theme = useTheme();
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
            <Fab
                size="small"
                sx={{
                    borderRadius: 1,
                    position: 'fixed',
                    zIndex: theme.zIndex.modal + 1,
                    right: 16,
                    ...(isSm ? { bottom: 16 } : { top: 16 })
                }}
                onClick={menuOpen ? handleClose : handleOpen}
                color="primary"
                aria-label="add">
                {menuOpen ? <Close /> : <MenuIcon />}
            </Fab>

            <Drawer
                anchor={'right'}
                open={menuOpen}
                transitionDuration={drawerTransitionTime}
                onClose={handleClose}>
                <Box
                    sx={{ width: '100vw', height: '100vh', backgroundColor: 'background.default' }}
                    display="flex"
                    alignItems="center"
                    justifyContent="center">
                    <Stack justifyContent="center" spacing={4}>
                        {links.map((link, i) => (
                            <Grow
                                key={link.title + i}
                                in={menuOpen}
                                timeout={Math.min(
                                    drawerTransitionTime + i * drawerTransitionTime,
                                    1250
                                )}>
                                <Typography
                                    sx={{ textDecoration: 'none', textTransform: 'uppercase' }}
                                    variant={'subtitle1'}
                                    align="center"
                                    component={Link}
                                    onClick={handleClose}
                                    href={link.href}>
                                    {link.title}
                                </Typography>
                            </Grow>
                        ))}
                    </Stack>
                </Box>
            </Drawer>
        </Fragment>
    );

    return fabMenuIcon;
}

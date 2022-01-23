import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mui/system';
import SanityNextImage from './SanityNextImage';
import { CameraAlt, Close } from '@mui/icons-material';
import { Fade, Hidden, IconButton, Stack, Typography } from '@mui/material';
import { useTheme } from '@emotion/react';

function HeroImage(props) {
    const theme = useTheme();
    const { image, caption = '', interactive = true, sx, ...others } = props;
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const escHandler = (event) => event.keyCode === 27 && setOpen(false);
        document.addEventListener('keydown', escHandler, false);
        return () => {
            document.removeEventListener('keydown', escHandler, false);
        };
    }, []);

    if (!image)
        return (
            <Box
                sx={{
                    background: 'rgb(131,58,180)',
                    backgroundImage: `linear-gradient(147deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)`,
                    maxHeight: open ? '100vh' : '66vh',
                    ...sx
                }}
                width="100%"
                overflow="hidden"
                {...others}
            />
        );
    return (
        <Box
            sx={{
                width: '100%',
                transition: 'max-height 0.5s ease-out',
                maxHeight: open ? '100vh' : '66vh',
                overflow: 'hidden',
                position: 'relative',
                ...sx
            }}
            {...others}
        >
            <Box
                height="100%"
                sx={{
                    height: open ? '100vh' : '66vh',
                    transition: 'all 0.5s ease-out',
                    zIndex: open ? theme.zIndex.modal : 0,
                }}
            >
                <SanityNextImage img={image[0]} objectFit={'cover'} layout="fill" quality={100} />
            </Box>
            {interactive && (
                <Hidden smDown>
                    <Stack
                        sx={{
                            position: 'absolute',
                            bottom: 1,
                            left: 1,
                            color: '#fff'
                        }}
                        spacing={1}
                        alignItems="center"
                        direction="row"
                    >
                        <IconButton
                            onClick={() => setOpen(!open)}
                            sx={{ color: 'inherit', fontSize: 20 }}
                        >
                            {open ? <Close /> : <CameraAlt />}
                        </IconButton>
                        <Fade in={Boolean(open && caption)}>
                            <Typography variant="body1" sx={{ pr: 2 }}>
                                {caption}
                            </Typography>
                        </Fade>
                    </Stack>
                </Hidden>
            )}
        </Box>
    );
}

HeroImage.propTypes = { image: PropTypes.array };

export default HeroImage;

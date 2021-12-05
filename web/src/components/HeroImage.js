import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mui/system';
import SanityNextImage from './SanityNextImage';
import { CameraAlt, Close } from '@mui/icons-material';
import { Fade, Hidden, IconButton, Stack, Typography } from '@mui/material';

function HeroImage(props) {
    const { image, caption = '' } = props;
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
                    backgroundImage: `linear-gradient(147deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)`
                }}
                width="100%"
                height="60vh"
                overflow="hidden"
            />
        );
    return (
        <Box
            sx={{
                width: '100%',
                transition: 'max-height 0.25s ease-out',
                maxHeight: open ? '100vh' : '60vh',
                overflow: 'hidden',
                position: 'relative'
            }}
        >
            <SanityNextImage
                style={{ position: 'absolute', top: '50%', left: '50%' }}
                img={image[0]}
                layout="responsive"
                quality={100}
                width={1280}
                height={720}
            />
            <Hidden smDown>
                <Stack
                    sx={{ position: 'absolute', bottom: 1, left: 1, color: '#fff' }}
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
                    <Fade in={open && caption}>
                        <Typography variant="body1">{caption}</Typography>
                    </Fade>
                </Stack>
            </Hidden>
        </Box>
    );
}

HeroImage.propTypes = { image: PropTypes.array };

export default HeroImage;

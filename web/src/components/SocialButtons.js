import { Email, FacebookOutlined, Reddit, Twitter, WhatsApp } from '@mui/icons-material';
import { Stack, Typography } from '@mui/material';

import React from 'react';
import {
    EmailShareButton,
    FacebookShareButton,
    RedditShareButton,
    TwitterShareButton,
    WhatsappShareButton
} from 'react-share';

export default function SocialButtons(props) {
    if (typeof window == 'undefined') return null;
    const { url = window ? window.location.href : '' } = props;
    const hashTags = '#neuron';
    return (
        <Stack>
            <Typography variant="overline">Dissiminate</Typography>
            <Stack direction="row" spacing={2}>
                <TwitterShareButton url={url} hashtag={hashTags}>
                    <Twitter />
                </TwitterShareButton>
                <FacebookShareButton url={url} hashtag={hashTags}>
                    <FacebookOutlined />
                </FacebookShareButton>
                <WhatsappShareButton url={url} hashtag={hashTags}>
                    <WhatsApp />
                </WhatsappShareButton>
                <RedditShareButton url={url} hashtag={hashTags}>
                    <Reddit />
                </RedditShareButton>
                <EmailShareButton url={url} hashtag={hashTags}>
                    <Email />
                </EmailShareButton>
            </Stack>
        </Stack>
    );
}

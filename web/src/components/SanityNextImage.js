import React from 'react';
import client from '../client';
import Image from 'next/image';
import { useNextSanityImage } from 'next-sanity-image';

export default function SanityNextImage(props) {
    const { img } = props;
    if (!img) return null;
    const imageProps = useNextSanityImage(client, img);
    return <Image {...imageProps}  {...props} />;
}

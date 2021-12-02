import React from 'react';
import { Typography } from '@mui/material';

export function H1(props) {
    return <Typography color="textPrimary" variant="h1" gutterBottom {...props} />;
}

const genericProps = { marginBottom: 2, marginTop: 1 };
const borderLeftProps = { borderLeft: `4px solid`, borderColor: 'primary.main', paddingLeft: 2 };

export function H2(props) {
    return (
        <Typography
            sx={{
                ...genericProps,
                ...borderLeftProps
            }}
            color="textPrimary"
            variant="h2"
            gutterBottom
            {...props}
        />
    );
}
export function H3(props) {
    return (
        <Typography
            sx={{
                ...genericProps,
                ...borderLeftProps
            }}
            color="textPrimary"
            variant="h3"
            gutterBottom
            {...props}
        />
    );
}
export function H4(props) {
    return (
        <Typography
            sx={{
                ...genericProps,
                ...borderLeftProps
            }}
            color="textPrimary"
            variant="h4"
            gutterBottom
            {...props}
        />
    );
}
export function H5(props) {
    return (
        <Typography
            sx={{
                ...genericProps,
                ...borderLeftProps
            }}
            color="textPrimary"
            variant="h5"
            gutterBottom
            {...props}
        />
    );
}
export function H6(props) {
    return (
        <Typography
            sx={{
                ...genericProps,
                ...borderLeftProps
            }}
            color="textPrimary"
            variant="h6"
            gutterBottom
            {...props}
        />
    );
}
export function Subtitle1(props) {
    return (
        <Typography
            sx={{
                ...genericProps,
                ...borderLeftProps
            }}
            color="textPrimary"
            variant="subtitle1"
            gutterBottom
            {...props}
        />
    );
}
export function Subtitle2(props) {
    return (
        <Typography
            sx={{
                ...genericProps,
                ...borderLeftProps
            }}
            color="textPrimary"
            variant="subtitle2"
            gutterBottom
            {...props}
        />
    );
}
export function Body1(props) {
    return <Typography color="textPrimary" variant="body1" gutterBottom {...props} />;
}
export function Body2(props) {
    return <Typography color="textPrimary" variant="body2" gutterBottom {...props} />;
}
export function Caption(props) {
    return <Typography color="textPrimary" variant="caption" gutterBottom {...props} />;
}
export function Overline(props) {
    return (
        <Typography
            sx={{
                ...borderLeftProps
            }}
            color="textPrimary"
            variant="overline"
            gutterBottom
            {...props}
        />
    );
}

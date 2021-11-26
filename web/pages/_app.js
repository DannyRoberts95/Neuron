import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import theme from 'src/themes/theme';

function MyApp({ Component, pageProps }) {
    const Layout = Component.Layout ? Component.Layout : React.Fragment;

    return (
        <ThemeProvider theme={theme}>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </ThemeProvider>
    );
}

export default MyApp;

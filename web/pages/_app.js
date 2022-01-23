import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import theme from 'src/themes/theme';
import Meta from '@/components/PageMeta';

function MyApp({ Component, pageProps }) {
    const Layout = Component.Layout ? Component.Layout : React.Fragment;

    return (
        <ThemeProvider theme={theme}>
            <Meta title={'Neuron'} description={'description'} />

            <Layout>
                <Component {...pageProps} />
            </Layout>
        </ThemeProvider>
    );
}

export default MyApp;

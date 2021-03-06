import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import theme from 'src/themes/theme';
import Meta from '@/components/PageMeta';
class MyDocument extends Document {
    render() {
        return (
            <Html lang="en">
                {/* <HeadSEO
                    metaTitle={'Neuron'}
                    siteTitle={'Neuron'}
                    metaDesc={
                        'Welcome, The dumping ground for all things creative, useless, pointless, idiotic and technological.'
                    }
                    shareDesc={`The dumping ground for all things creative, useless, pointless, idiotic and technological`}
                /> */}

                <Head>
                    <meta charSet="utf-8" />
                    <meta name="theme-color" content={theme.palette.primary.main} />
                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
                    <link
                        href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;700&family=Source+Code+Pro:wght@300;700&display=swap"
                        rel="stylesheet"
                    />
                </Head>

                <body
                    style={{
                        margin: 0,
                        backgroundColor: theme.palette.background.default,
                        color: theme.palette.text.primary
                    }}
                >
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

// `getInitialProps` belongs to `_document` (instead of `_app`),
// it's compatible with server-side generation (SSG).
// MyDocument.getInitialProps = async (ctx) => {
//   // Resolution order
//   //
//   // On the server:
//   // 1. app.getInitialProps
//   // 2. page.getInitialProps
//   // 3. document.getInitialProps
//   // 4. app.render
//   // 5. page.render
//   // 6. document.render
//   //
//   // On the server with error:
//   // 1. document.getInitialProps
//   // 2. app.render
//   // 3. page.render
//   // 4. document.render
//   //
//   // On the client
//   // 1. app.getInitialProps
//   // 2. page.getInitialProps
//   // 3. app.render
//   // 4. page.render

//   // Render app and page and get the context of the page with collected side effects.
//   const sheets = new ServerStyleSheets()
//   const originalRenderPage = ctx.renderPage

//   ctx.renderPage = () =>
//     originalRenderPage({
//       enhanceApp: (App) => (props) => sheets.collect(<App {...props} />),
//     })

//   const initialProps = await Document.getInitialProps(ctx)

//   return {
//     ...initialProps,
//     // Styles fragment is rendered after the app and page rendering finish.
//     styles: [
//       ...React.Children.toArray(initialProps.styles),
//       sheets.getStyleElement(),
//     ],
//   }
// }

export default MyDocument;

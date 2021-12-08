import Head from 'next/head';
import React from 'react';

const Meta = (props) => {
    const { title="Neuron", canonical, desc="", keywords="" } = props;
    return (
        <Head>
            <title>{title}</title>
            <meta name="description" content={desc} />
            {/* OG PROTOCOL */}
            <meta property="og:type" content="website" />
            <meta name="og:title" property="og:title" content={title} />
            <meta name="keywords" content={keywords} />
            <meta name="og:description" property="og:description" content={desc} />
            <meta property="og:Aikido Finance" content="Proper Noun" />
            <meta property="og:url" content={`${canonical}`} />
            <meta property="og:image:width" content="1200"></meta>
            <meta property="og:image:height" content="627"></meta>
            <meta property="og:image:alt" content="Aikido Company Logo"></meta>
            {/* TWITTER PROTOCOL */}
            <meta name="twitter:card" content="summary" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={desc} />
            <meta name="twitter:site" content="@AikidoFinance" />
            <meta name="twitter:creator" content="@AikidoFinance" />
            <link rel="icon" type="image/png" href="../public/favicon.png" />
            <link rel="apple-touch-icon" href="/public/favicon.png" />

            {/* <meta
                property="og:image"
                content="https://aikido-finance.s3-eu-west-1.amazonaws.com/public/openGraphPreview.jpg"
            />
            <meta
                name="twitter:image"
                content="https://aikido-finance.s3-eu-west-1.amazonaws.com/public/openGraphPreview.jpg"
            /> */}

            {canonical && <link rel="canonical" href={`${canonical}`} />}
        </Head>
    );
};
export default Meta;

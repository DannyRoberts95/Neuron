// [slug].js
import React, { useState } from 'react';
import PageBaseContainer from '@/components/PageBaseContainer';
import CenteredContent from '@/components/CenteredContent';
import Layout from '@/Layouts/Layout';
import Script from 'next/script';

const SketchPage = (props) => {
    const [scriptsLoaded, setScriptsLoaded] = useState(false);

    const handleLoadingDone = (e) => {
        console.log('Loading Script Complete');
        console.log(e);
        setScriptsLoaded(true);
    };

    return (
        <>
            <Script
                id='"P5_script'
                src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.0.0/p5.min.js"
                onLoad={handleLoadingDone}
            />
            {!scriptsLoaded ? <p>Loading...</p> : <p>Loaded</p>}
        </>
    );
};

// AboutPage.getInitialProps = async () => ({

// });

SketchPage.Layout = Layout;
export default SketchPage;

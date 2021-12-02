// [slug].js

import { Box } from '@mui/system';
import BlockContent from '@sanity/block-content-to-react';
import client from '../../client';
import SanityNextImage from './SanityNextImage';

import { H1, H2, H3, H4, H5, H6, Subtitle1, Body1, Body2 } from './BockContentTypography';

const StyledBlockedContent = (props) => {
    const { body, imageOptions } = props;

    const overrides = {
        h1: (props) => <H1 {...props} />,
        h2: (props) => <H2 {...props} />,
        h3: (props) => <H3 {...props} />,
        h4: (props) => <H4 {...props} />,
        h5: (props) => <H5 {...props} />,
        h6: (props) => <H6 {...props} />,
        normal: (props) => <Body1 sx={{ marginBottom: 4 }} {...props} />,
        blockquote: (props) => <Subtitle1 sx={{ marginBottom: 4 }} {...props} />,
        bullet: (props) => <Body2 {...props} />
    };

    const serializers = {
        types: {
            block: (props) =>
                overrides[props.node.style]
                    ? overrides[props.node.style]({ children: props.children })
                    : BlockContent.defaultSerializers.types.block(props),
            image: (props) => {
                console.log('props', props);
                return (
                    <Box sx={{ my: 4 }} width={'66%'}>
                        <SanityNextImage img={props.node} />
                    </Box>
                );
            }
        }
    };

    return (
        <BlockContent
            blocks={body}
            serializers={serializers}
            imageOptions={imageOptions}
            {...client.config()}
        />
    );
};

export default StyledBlockedContent;

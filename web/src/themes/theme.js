import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import { orange, green } from '@mui/material/colors';

const primaryColor = green['600'];

const headerFont = 'Orbitron, monospace';
const bodyFont = 'Source Code Pro, monospace';

let defaultTheme = createTheme();

let theme = createTheme({
    palette: {
        mode: 'dark',
        primary: { main: primaryColor }
    },
    breakpoints: {
        values: { xs: 600, sm: 800, md: 1000, lg: 1200, xl: 1536 }
    },
    typography: {
        fontFamily: bodyFont,
        h1: {
            fontFamily: headerFont
        },
        h2: { fontFamily: headerFont },
        h3: { fontFamily: headerFont },
        h4: { fontFamily: headerFont },
        h5: { fontFamily: headerFont },
        h6: { fontFamily: headerFont },
        subtitle1: { fontFamily: bodyFont },
        subtitle2: { fontFamily: bodyFont },
        body1: { fontFamily: bodyFont, fontWeight: 400 },
        body2: { fontFamily: bodyFont }
    }
});

theme = responsiveFontSizes(theme);

export default theme;

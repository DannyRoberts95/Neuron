import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import { orange, cyan, lightGreen, purple, yellow,green } from '@mui/material/colors';

const primaryColor = orange['700'];

// const primaryColor = green['A400'];

const headerFont = 'Orbitron, monospace';
const bodyFont = 'Source Code Pro, monospace';

let defaultTheme = createTheme();

let theme = createTheme({
    palette: {
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
        body2: { fontFamily: bodyFont },
        button: {
            fontFamily: headerFont
        }
    }
});

theme = responsiveFontSizes(theme);

export default theme;

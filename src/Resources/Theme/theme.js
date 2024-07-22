import { createTheme } from '@mui/material/styles';
import darkBackgroundHome from "../../Resources/Images/darkBackgroundHome.jpg"
import lightBackgroundHome from "../../Resources/Images/lightBackgroundHome.jpg"
import navBarDark from "../../Resources/Images/logoDark.png"
import navBarLight from "../../Resources/Images/logoLight.png"

export const darkTheme = createTheme({
    colors: {
        primaryColor: 'rgba(92, 44, 95, 1)',
        secondaryColor: 'rgba(7, 17, 42, 1)',
        primaryAccentsColor: 'rgba(129, 110, 27, 1)',
        secondaryAccentsColor: 'rgba(105, 32, 32, 1)',
        textColor: 'white',
        titleColor: 'rgba(174, 109, 210, 1)',
    },
    images: {
        navBarImage: navBarDark,
        homeFirstImage: darkBackgroundHome
    },
    fontSizes: {
        h1: '4vmin',
        h2: '3vmin',
        h3: '2vmin',
        p: '1vmin'
    }
});

export const lightTheme = createTheme({
    colors: {
        primaryColor: 'rgba(79, 115, 108, 1)',
        secondaryColor: 'rgba(128, 103, 28, 1)',
        primaryAccentsColor: 'rgba(37, 90, 99, 1)',
        secondaryAccentsColor: 'rgba(150, 223, 223, 1)',
        textColor: 'black',
        titleColor: 'rgba(56, 17, 74, 1)',
    },
    images: {
        navBarImage: navBarLight,
        homeFirstImage: lightBackgroundHome
    },
    fontSizes: {
        h1: '4vmin',
        h2: '3vmin',
        h3: '2vmin',
        p: '1vmin'
    }
});


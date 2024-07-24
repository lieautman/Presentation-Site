import { createTheme } from '@mui/material/styles';
import darkBackgroundHome from "../../Resources/Images/darkBackgroundHome.jpg"
import lightBackgroundHome from "../../Resources/Images/lightBackgroundHome.jpg"
import navBarDark from "../../Resources/Images/logoDark.png"
import navBarLight from "../../Resources/Images/logoLight.png"

export const darkTheme = createTheme({
    colors: {
        primaryColor: 'rgba(92, 44, 95, 1)',
        secondaryColor: 'rgba(35, 35, 35, 1)',
        primaryAccentsColor: 'rgba(90, 90, 117, 1)',
        secondaryAccentsColor: 'rgba(105, 32, 32, 1)',
        textColor: 'white',
        titleColor: 'rgba(174, 109, 210, 1)',
    },
    images: {
        navBarThemeImage: navBarDark,
        homeFirstImage: darkBackgroundHome
    },
    fontSizes: {
        h1Big: '5vmin',
        h1: '4vmin',
        h2: '3vmin',
        h3: '2vmin',
        p: '1vmin'
    }
});

export const lightTheme = createTheme({
    colors: {
        primaryColor: 'rgba(79, 115, 108, 1)',
        secondaryColor: 'rgba(119, 152, 121, 1)',
        primaryAccentsColor: 'rgba(45, 45, 45, 1)',
        secondaryAccentsColor: 'rgba(150, 223, 223, 1)',
        textColor: 'black',
        titleColor: 'rgba(56, 17, 74, 1)',
    },
    images: {
        navBarThemeImage: navBarLight,
        homeFirstImage: lightBackgroundHome
    },
    fontSizes: {
        h1Big: '5vmin',
        h1: '4vmin',
        h2: '3vmin',
        h3: '2vmin',
        p: '1vmin'
    }
});


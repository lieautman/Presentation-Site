import { createTheme } from '@mui/material/styles';
import darkBackgroundHome from "../../Resources/Images/darkBackgroundHome.jpg"
import lightBackgroundHome from "../../Resources/Images/lightBackgroundHome.jpg"
import navBarDark from "../../Resources/Images/logoDark.png"
import navBarLight from "../../Resources/Images/logoLight.png"

export const darkTheme = createTheme({
    colors: {
        primaryColor: 'rgba(92, 44, 95, 1)',
        textColor: 'white',
        titleColor: 'rgba(174, 109, 210, 1)',
    },
    images: {
        navBarImage: navBarDark,
        homeFirstImage: darkBackgroundHome
    }
});

export const lightTheme = createTheme({
    colors: {
        primaryColor: 'rgba(134, 177, 186, 1)',
        textColor: 'black',
        titleColor: 'rgba(86, 27, 89, 1)',
    },
    images: {
        navBarImage: navBarLight,
        homeFirstImage: lightBackgroundHome
    }
});


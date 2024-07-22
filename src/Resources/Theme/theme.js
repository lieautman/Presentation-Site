import { createTheme } from '@mui/material/styles';
import securityBackgorundFadedCracked from "../../Resources/Images/securityBackgorundFadedCracked.jpg"
import programmerBackgroundFaded from "../../Resources/Images/programmerBackgroundFaded.jpg"
import navBarDark from "../../Resources/Images/logo.png"
import navBarLight from "../../Resources/Images/sun.png"

export const darkTheme = createTheme({
    colors: {
        primaryColor: 'rgba(92, 44, 95, 1)',
        textColor: 'white',
        titleColor: 'rgba(174, 109, 210, 1)',
    },
    images: {
        navBarImage: navBarDark,
        homeFirstImage: securityBackgorundFadedCracked
    }
});

export const lightTheme = createTheme({
    colors: {
        primaryColor: 'rgba(48, 90, 206, 0.8)',
        textColor: 'black',
        titleColor: 'rgba(15, 70, 16, 0.8)',
    },
    images: {
        navBarImage: navBarLight,
        homeFirstImage: programmerBackgroundFaded
    }
});


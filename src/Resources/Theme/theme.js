import { createTheme } from '@mui/material/styles';
import securityBackgorundFadedCracked from "../../Resources/Images/securityBackgorundFadedCracked.jpg"

export const darkTheme = createTheme({
    colors: {
        primaryColor: 'rgba(92, 44, 95, 1)',
        textColor: 'white',
        titleColor: 'rgba(174, 109, 210, 1)',
    },
    images: {
        homeFirstImage: securityBackgorundFadedCracked
    }
});

export const lightTheme = createTheme({
    colors: {
        primaryColor: 'red',
        textColor: 'black',
        titleColor: 'blue',
    },
    images: {
        homeFirstImage: securityBackgorundFadedCracked
    }
});


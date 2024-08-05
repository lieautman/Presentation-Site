import { createTheme } from "@mui/material/styles"
// import darkBackgroundHome from "../../Resources/Images/darkBackgroundHome.jpg"
// import lightBackgroundHome from "../../Resources/Images/lightBackgroundHome.jpg"
// import darkBackgroundAbout from "../../Resources/Images/darkBackgroundAbout.jpg"
// import lightBackgroundAbout from "../../Resources/Images/lightBackgroundAbout.jpg"
// import darkBackgroundContact from "../../Resources/Images/darkBackgroundContact.jpg"
// import lightBackgroundContact from "../../Resources/Images/lightBackgroundContact.jpg"
// import darkBackgroundResume from "../../Resources/Images/darkBackgroundResume.jpg"
// import lightBackgroundResume from "../../Resources/Images/lightBackgroundResume.jpg"
import navBarDark from "../../Resources/Images/logoDark.png"
//import navBarLight from "../../Resources/Images/logoLight.png"

export const purpleTheme = createTheme({
  colors: {
    primaryColor: "rgba(92, 44, 95, 1)",
    secondaryColor: "rgba(90, 90, 117, 1)",
    primaryAccentsColor: "rgba(35, 35, 35, 1)",
    secondaryAccentsColor: "rgba(15, 15, 15, 1)",
    textOnDark: "white",
    textOnLight: "rgba(60, 10, 60, 1)",
  },
  images: {
    navBarThemeImage: navBarDark,
    // homeFirstImage: darkBackgroundHome,
    // aboutFirstImage: darkBackgroundAbout,
    // contactFirstImage: darkBackgroundContact,
    // resumeFirstImage: darkBackgroundResume,
  },
  fontSizes: {
    h1Big: "5vmin",
    h1: "4vmin",
    h2: "3vmin",
    h3: "2vmin",
    p: "1vmin",
  },
  fontSizesPhone: {
    h1Big: "8vmin",
    h1: "6vmin",
    h2: "4vmin",
    h3: "3vmin",
    p: "2vmin",
  },
  logoSize: "8vh",
})

export const darkTheme = createTheme({
  colors: {
    primaryColor: "rgba(15, 15, 15, 1)",
    secondaryColor: "rgba(40, 40, 40, 1)",
    primaryAccentsColor: "rgba(15, 15, 15, 1)",
    secondaryAccentsColor: "rgba(90, 90, 90, 1)",
    textOnDark: "white",
    textOnLight: "white",
  },
  images: {
    navBarThemeImage: navBarDark,
  },
  fontSizes: {
    h1Big: "5vmin",
    h1: "4vmin",
    h2: "3vmin",
    h3: "2vmin",
    p: "1vmin",
  },
  fontSizesPhone: {
    h1Big: "8vmin",
    h1: "6vmin",
    h2: "4vmin",
    h3: "3vmin",
    p: "2vmin",
  },
  logoSize: "8vh",
})

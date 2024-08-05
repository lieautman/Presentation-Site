import { createTheme } from "@mui/material/styles"
import darkBackgroundHome from "../../Resources/Images/darkBackgroundHome.jpg"
import lightBackgroundHome from "../../Resources/Images/lightBackgroundHome.jpg"
import darkBackgroundAbout from "../../Resources/Images/darkBackgroundAbout.jpg"
import lightBackgroundAbout from "../../Resources/Images/lightBackgroundAbout.jpg"
import darkBackgroundContact from "../../Resources/Images/darkBackgroundContact.jpg"
import lightBackgroundContact from "../../Resources/Images/lightBackgroundContact.jpg"
import darkBackgroundResume from "../../Resources/Images/darkBackgroundResume.jpg"
import lightBackgroundResume from "../../Resources/Images/lightBackgroundResume.jpg"
import navBarDark from "../../Resources/Images/logoDark.png"
import navBarLight from "../../Resources/Images/logoLight.png"

export const darkTheme = createTheme({
  colors: {
    primaryColor: "rgba(92, 44, 95, 1)",
    secondaryColor: "rgba(90, 90, 117, 1)",
    primaryAccentsColor: "rgba(35, 35, 35, 1)",
    secondaryAccentsColor: "rgba(105, 32, 32, 1)",
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

export const simpleTheme = createTheme({
  colors: {
    primaryColor: "rgba(15, 15, 15, 1)",
    secondaryColor: "rgba(40, 40, 40, 1)",
    primaryAccentsColor: "rgba(15, 15, 15, 1)",
    secondaryAccentsColor: "rgba(20, 20, 20, 1)",
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

export const lightTheme = createTheme({
  colors: {
    primaryColor: "rgba(79, 115, 108, 1)",
    secondaryColor: "rgba(119, 152, 121, 1)",
    primaryAccentsColor: "rgba(45, 45, 45, 1)",
    secondaryAccentsColor: "rgba(150, 223, 223, 1)",
    textOnDark: "black",
    textOnLight: "rgba(56, 17, 74, 1)",
  },
  images: {
    navBarThemeImage: navBarLight,
    homeFirstImage: lightBackgroundHome,
    aboutFirstImage: lightBackgroundAbout,
    contactFirstImage: lightBackgroundContact,
    resumeFirstImage: lightBackgroundResume,
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

import ThemeChanger from "../ThemeChanger/ThemeChanger"
import ScrollSnapChanger from "../ScrollSnapChanger/ScrollSnapChanger"
import LanguageChanger from "../LanguageChanger/LanguageChanger"
import { useContext } from "react"
import { themeContext } from "../../Contexts/themeContext"
import { MenuOpen } from "@mui/icons-material"
import { IconButton, Grid } from "@mui/material"
import "../../Resources/Css/NavBarTransition.css"

function MenuOpenComponent({ setMenuOpen }) {
  const { currentTheme } = useContext(themeContext)

  return (
    <>
      <Grid
        container
        className="scrollSnapSection"
        style={{
          height: "auto",
          width: "16.66vw",
          zIndex: "100",
          animation: "0.25s ease-in 0s 1 slide",
          position: "absolute",
          backgroundColor: currentTheme.colors.secondaryAccentsColor,
        }}>
        <Grid item xs={12} sx={{ display: "flex", alignItems: "center", justifyContent: "center", height: "9vh" }}>
          <IconButton
            aria-label="delete"
            style={{ color: currentTheme.colors.textOnDark }}
            onClick={() => setMenuOpen(false)}>
            <MenuOpen sx={{ fontSize: currentTheme.fontSizes.h1 }} />
          </IconButton>
        </Grid>
        <Grid item xs={12} sx={{ display: "flex", alignItems: "center", justifyContent: "center", height: "9vh" }}>
          <ThemeChanger />
        </Grid>
        <Grid item xs={12} sx={{ display: "flex", alignItems: "center", justifyContent: "center", height: "9vh" }}>
          <ScrollSnapChanger />
        </Grid>
        <Grid item xs={12} sx={{ display: "flex", alignItems: "center", justifyContent: "center", height: "9vh" }}>
          <LanguageChanger />
        </Grid>
      </Grid>
    </>
  )
}

export default MenuOpenComponent

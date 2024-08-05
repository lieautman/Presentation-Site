import LanguageChanger from "../LanguageChanger/LanguageChanger"
import ThemeChanger from "../ThemeChanger/ThemeChanger"
import { useContext } from "react"
import { themeContext } from "../../Contexts/themeContext"
import TypographyWithTheme from "../../Resources/StyledComponents/TypographyWithTheme"
import { useTranslation } from "react-i18next"
import { MenuOpen } from "@mui/icons-material"
import { IconButton, Button, Grid } from "@mui/material"
import "../../Resources/Css/NavBarTransition.css"

function MenuOpenComponent({ setPageNo, setMenuOpen }) {
  const { t } = useTranslation()
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
          <LanguageChanger />
        </Grid>
      </Grid>
    </>
  )
}

export default MenuOpenComponent

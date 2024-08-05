import LanguageChanger from "../LanguageChanger/LanguageChanger"
import ThemeChanger from "../ThemeChanger/ThemeChanger"
import { useContext } from "react"
import { themeContext } from "../../contexts/themeContext"
import GridContainerWithThemeMainColor from "../../Resources/StyledComponents/GridContainerWithThemeMainColor"
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
      <GridContainerWithThemeMainColor
        container
        className="scrollSnapSection"
        style={{
          height: "100vh",
          width: "50vw",
          zIndex: "100",
          animation: "0.25s ease-in 0s 1 slide",
          position: "absolute",
        }}>
        <Grid item xs={12} sx={{ display: "flex", alignItems: "center", justifyContent: "center", height: "9vh" }}>
          <IconButton
            aria-label="delete"
            style={{ color: currentTheme.colors.textColor }}
            onClick={() => setMenuOpen(false)}>
            <MenuOpen sx={{ fontSize: currentTheme.fontSizesPhone.h1 }} />
          </IconButton>
        </Grid>
        <Grid item xs={12} sx={{ display: "flex", alignItems: "center", justifyContent: "center", height: "9vh" }}>
          <Button
            onClick={() => {
              setPageNo(1)
              setMenuOpen(false)
            }}>
            <TypographyWithTheme color={currentTheme.colors.textColor}>
              <h3
                style={{
                  fontSize: currentTheme.fontSizesPhone.h2,
                }}>
                {t("Nav.Pages.Home")}
              </h3>
            </TypographyWithTheme>
          </Button>
        </Grid>
        <Grid item xs={12} sx={{ display: "flex", alignItems: "center", justifyContent: "center", height: "9vh" }}>
          <Button
            onClick={() => {
              setPageNo(2)
              setMenuOpen(false)
            }}>
            <TypographyWithTheme color={currentTheme.colors.textColor}>
              <h3
                style={{
                  fontSize: currentTheme.fontSizesPhone.h2,
                }}>
                {t("Nav.Pages.About")}
              </h3>
            </TypographyWithTheme>
          </Button>
        </Grid>
        <Grid item xs={12} sx={{ display: "flex", alignItems: "center", justifyContent: "center", height: "9vh" }}>
          <Button
            onClick={() => {
              setPageNo(3)
              setMenuOpen(false)
            }}>
            <TypographyWithTheme color={currentTheme.colors.textColor}>
              <h3
                style={{
                  fontSize: currentTheme.fontSizesPhone.h2,
                }}>
                {t("Nav.Pages.Contact")}
              </h3>
            </TypographyWithTheme>
          </Button>
        </Grid>
        <Grid item xs={12} sx={{ display: "flex", alignItems: "center", justifyContent: "center", height: "9vh" }}>
          <Button
            onClick={() => {
              setPageNo(4)
              setMenuOpen(false)
            }}>
            <TypographyWithTheme color={currentTheme.colors.textColor}>
              <h3
                style={{
                  fontSize: currentTheme.fontSizesPhone.h2,
                }}>
                {t("Nav.Pages.Resume")}
              </h3>
            </TypographyWithTheme>
          </Button>
        </Grid>
        <Grid item xs={12} sx={{ display: "flex", alignItems: "center", justifyContent: "center", height: "9vh" }}>
          <ThemeChanger />
        </Grid>
        <Grid item xs={12} sx={{ display: "flex", alignItems: "center", justifyContent: "center", height: "9vh" }}>
          <LanguageChanger />
        </Grid>
      </GridContainerWithThemeMainColor>
    </>
  )
}

export default MenuOpenComponent
import { useContext } from "react"
import { themeContext } from "../../Contexts/themeContext"
import { browserContext } from "../../Contexts/browserContext"
import GridItemAligned from "../../Resources/StyledComponents/GridItemAligned"
import TypographyWithTheme from "../../Resources/StyledComponents/TypographyWithTheme"
import { Button, Grid } from "@mui/material"
import ThemeChanger from "../ThemeChanger/ThemeChanger"
import LanguageChanger from "../LanguageChanger/LanguageChanger"
import { useTranslation } from "react-i18next"

function NavigationDesktopComponent(porps) {
  const { t } = useTranslation()
  const { currentTheme } = useContext(themeContext)
  const { browser } = useContext(browserContext)

  return (
    <Grid
      container
      className={browser !== "Chrome" ? "scrollSnapSection" : ""}
      style={{ height: "9vh", backgroundColor: currentTheme.colors.primaryColor }}>
      <GridItemAligned item xs={1}>
        <img
          src={currentTheme.images.navBarThemeImage}
          alt="Logo"
          style={{
            width: "auto",
            height: currentTheme.logoSize,
          }}
        />
      </GridItemAligned>
      <GridItemAligned item xs={2}>
        <Button onClick={() => porps.setPageNo(1)}>
          <TypographyWithTheme color={currentTheme.colors.textColor}>
            <h3 style={{ fontSize: currentTheme.fontSizes.h3 }}>{t("Nav.Pages.Home")}</h3>
          </TypographyWithTheme>
        </Button>
      </GridItemAligned>
      <GridItemAligned item xs={2}>
        <Button onClick={() => porps.setPageNo(2)}>
          <TypographyWithTheme color={currentTheme.colors.textColor}>
            <h3 style={{ fontSize: currentTheme.fontSizes.h3 }}>{t("Nav.Pages.About")}</h3>
          </TypographyWithTheme>
        </Button>
      </GridItemAligned>
      <GridItemAligned item xs={2}>
        <Button onClick={() => porps.setPageNo(3)}>
          <TypographyWithTheme color={currentTheme.colors.textColor}>
            <h3 style={{ fontSize: currentTheme.fontSizes.h3 }}>{t("Nav.Pages.Contact")}</h3>
          </TypographyWithTheme>
        </Button>
      </GridItemAligned>
      <GridItemAligned item xs={2}>
        <Button onClick={() => porps.setPageNo(4)}>
          <TypographyWithTheme color={currentTheme.colors.textColor}>
            <h3 style={{ fontSize: currentTheme.fontSizes.h3 }}>{t("Nav.Pages.Resume")}</h3>
          </TypographyWithTheme>
        </Button>
      </GridItemAligned>
      <GridItemAligned item xs={1}>
        <ThemeChanger />
      </GridItemAligned>
      <GridItemAligned item xs={2}>
        <LanguageChanger />
      </GridItemAligned>
    </Grid>
  )
}

export default NavigationDesktopComponent

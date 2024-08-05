import { useContext } from "react"
import { themeContext } from "../../Contexts/themeContext"
import { browserContext } from "../../Contexts/browserContext"
import GridItemAligned from "../../Resources/StyledComponents/GridItemAligned"
import { Grid, IconButton, Button } from "@mui/material"
import { Menu } from "@mui/icons-material"
import { useTranslation } from "react-i18next"
import TypographyWithTheme from "../../Resources/StyledComponents/TypographyWithTheme"

function MenuClosedComponent({ setPageNo, setMenuOpen }) {
  const { t } = useTranslation()
  const { currentTheme } = useContext(themeContext)
  const { browser } = useContext(browserContext)

  return (
    <Grid
      container
      className={browser !== "Chrome" ? "scrollSnapSection" : ""}
      style={{ height: "9vh", backgroundColor: currentTheme.colors.primaryColor }}>
      <GridItemAligned item xs={2}>
        <IconButton
          aria-label="delete"
          style={{ color: currentTheme.colors.textOnDark }}
          onClick={() => setMenuOpen(true)}>
          <Menu sx={{ fontSize: currentTheme.fontSizes.h1 }} />
        </IconButton>
      </GridItemAligned>
      <GridItemAligned item xs={2}>
        <Button onClick={() => setPageNo(1)}>
          <TypographyWithTheme color={currentTheme.colors.textOnDark}>
            <h3 style={{ fontSize: currentTheme.fontSizes.h3 }}>{t("Nav.Pages.Home")}</h3>
          </TypographyWithTheme>
        </Button>
      </GridItemAligned>
      <GridItemAligned item xs={2}>
        <Button onClick={() => setPageNo(2)}>
          <TypographyWithTheme color={currentTheme.colors.textOnDark}>
            <h3 style={{ fontSize: currentTheme.fontSizes.h3 }}>{t("Nav.Pages.About")}</h3>
          </TypographyWithTheme>
        </Button>
      </GridItemAligned>
      <GridItemAligned item xs={2}>
        <Button onClick={() => setPageNo(3)}>
          <TypographyWithTheme color={currentTheme.colors.textOnDark}>
            <h3 style={{ fontSize: currentTheme.fontSizes.h3 }}>{t("Nav.Pages.Contact")}</h3>
          </TypographyWithTheme>
        </Button>
      </GridItemAligned>
      <GridItemAligned item xs={2}>
        <Button onClick={() => setPageNo(4)}>
          <TypographyWithTheme color={currentTheme.colors.textOnDark}>
            <h3 style={{ fontSize: currentTheme.fontSizes.h3 }}>{t("Nav.Pages.Resume")}</h3>
          </TypographyWithTheme>
        </Button>
      </GridItemAligned>
      <GridItemAligned item xs={2}>
        <img
          src={currentTheme.images.navBarThemeImage}
          alt="Logo"
          style={{
            width: "auto",
            height: currentTheme.logoSize,
          }}
        />
      </GridItemAligned>
    </Grid>
  )
}

export default MenuClosedComponent

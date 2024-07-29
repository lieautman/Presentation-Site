import { useContext } from "react"
import { ThemeContext } from "../../Resources/Theme/ThemeContext"
import GridContainerWithThemeMainColor from "../../Resources/StyledComponents/GridContainerWithThemeMainColor"
import GridItemAligned from "../../Resources/StyledComponents/GridItemAligned"
import TypographyWithTheme from "../../Resources/StyledComponents/TypographyWithTheme"
import { useTranslation } from "react-i18next"
import { MenuOpen } from "@mui/icons-material"
import { IconButton, Button } from "@mui/material"
import "../../Resources/Css/NavBarTransition.css"

function MenuOpenComponent({ setPageNo, setMenuOpen }) {
  const { t } = useTranslation()
  const { currentTheme } = useContext(ThemeContext)

  return (
    <>
      <GridContainerWithThemeMainColor
        container
        className="scrollSnapSection"
        style={{
          height: "100vh",
          zIndex: "100",
          animation: "1s ease-in 0s 1 slideInFromTop",
          position: "absolute",
        }}
      >
        <GridItemAligned item xs={12}>
          <IconButton
            aria-label="delete"
            style={{ color: currentTheme.colors.textColor }}
            onClick={() => setMenuOpen(false)}
          >
            <MenuOpen />
          </IconButton>
        </GridItemAligned>
        <GridItemAligned item xs={12}>
          <Button
            onClick={() => {
              setPageNo(1)
              setMenuOpen(false)
            }}
          >
            <TypographyWithTheme color={currentTheme.colors.textColor}>
              <h3
                style={{
                  fontSize: currentTheme.fontSizesPhone.h3,
                }}
              >
                {t("Nav.Pages.Home")}
              </h3>
            </TypographyWithTheme>
          </Button>
        </GridItemAligned>
        <GridItemAligned item xs={12}>
          <Button
            onClick={() => {
              setPageNo(2)
              setMenuOpen(false)
            }}
          >
            <TypographyWithTheme color={currentTheme.colors.textColor}>
              <h3
                style={{
                  fontSize: currentTheme.fontSizesPhone.h3,
                }}
              >
                {t("Nav.Pages.About")}
              </h3>
            </TypographyWithTheme>
          </Button>
        </GridItemAligned>
        <GridItemAligned item xs={12}>
          <Button
            onClick={() => {
              setPageNo(3)
              setMenuOpen(false)
            }}
          >
            <TypographyWithTheme color={currentTheme.colors.textColor}>
              <h3
                style={{
                  fontSize: currentTheme.fontSizesPhone.h3,
                }}
              >
                {t("Nav.Pages.Contact")}
              </h3>
            </TypographyWithTheme>
          </Button>
        </GridItemAligned>
        <GridItemAligned item xs={12}>
          <Button
            onClick={() => {
              setPageNo(4)
              setMenuOpen(false)
            }}
          >
            <TypographyWithTheme color={currentTheme.colors.textColor}>
              <h3
                style={{
                  fontSize: currentTheme.fontSizesPhone.h3,
                }}
              >
                {t("Nav.Pages.Resume")}
              </h3>
            </TypographyWithTheme>
          </Button>
        </GridItemAligned>
      </GridContainerWithThemeMainColor>
    </>
  )
}

export default MenuOpenComponent

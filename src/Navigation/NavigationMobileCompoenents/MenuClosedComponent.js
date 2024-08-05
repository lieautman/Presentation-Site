import { useContext } from "react"
import { themeContext } from "../../Contexts/themeContext"
import { browserContext } from "../../Contexts/browserContext"
import GridContainerWithThemeMainColor from "../../Resources/StyledComponents/GridContainerWithThemeMainColor"
import GridItemAligned from "../../Resources/StyledComponents/GridItemAligned"
import { IconButton } from "@mui/material"
import { Menu } from "@mui/icons-material"

function MenuClosedComponent({ setMenuOpen }) {
  const { currentTheme } = useContext(themeContext)
  const { browser } = useContext(browserContext)

  return (
    <>
      <GridContainerWithThemeMainColor
        container
        className={browser !== "Chrome" ? "scrollSnapSection" : ""}
        style={{ height: "9vh" }}>
        <GridItemAligned item xs={6}>
          <IconButton
            aria-label="delete"
            style={{ color: currentTheme.colors.textColor }}
            onClick={() => setMenuOpen(true)}>
            <Menu sx={{ fontSize: currentTheme.fontSizesPhone.h1 }} />
          </IconButton>
        </GridItemAligned>
        <GridItemAligned item xs={6}>
          <img
            src={currentTheme.images.navBarThemeImage}
            alt="Logo"
            style={{
              height: currentTheme.logoSize,
            }}
          />
        </GridItemAligned>
      </GridContainerWithThemeMainColor>
    </>
  )
}

export default MenuClosedComponent

import { useContext } from "react"
import { ThemeContext } from "../../Resources/Theme/ThemeContext"
import GridContainerWithThemeMainColor from "../../Resources/StyledComponents/GridContainerWithThemeMainColor"
import GridItemAligned from "../../Resources/StyledComponents/GridItemAligned"
import { IconButton } from "@mui/material"
import { Menu } from "@mui/icons-material"

function MenuClosedComponent({ setMenuOpen }) {
  const { currentTheme } = useContext(ThemeContext)

  return (
    <>
      <GridContainerWithThemeMainColor container className="scrollSnapSection" style={{ height: "9vh" }}>
        <GridItemAligned item xs={6}>
          <IconButton
            aria-label="delete"
            style={{ color: currentTheme.colors.textColor }}
            onClick={() => setMenuOpen(true)}>
            <Menu />
          </IconButton>
        </GridItemAligned>
        <GridItemAligned item xs={6}>
          <img
            src={currentTheme.images.navBarThemeImage}
            alt="Logo"
            style={{
              width: "auto",
              height: currentTheme.fontSizesPhone.h1Big,
            }}
          />
        </GridItemAligned>
      </GridContainerWithThemeMainColor>
    </>
  )
}

export default MenuClosedComponent

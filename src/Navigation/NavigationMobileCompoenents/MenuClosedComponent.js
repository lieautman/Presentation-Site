import { useContext } from "react"
import { themeContext } from "../../Contexts/themeContext"
import { scrollSnapContext } from "../../Contexts/scrollSnapContext"
import GridItemAligned from "../../Resources/StyledComponents/GridItemAligned"
import { Grid, IconButton } from "@mui/material"
import { Menu } from "@mui/icons-material"

function MenuClosedComponent({ setMenuOpen }) {
  const { currentTheme } = useContext(themeContext)
  const { scrollSnap } = useContext(scrollSnapContext)

  return (
    <>
      <Grid
        container
        className={scrollSnap ? "scrollSnapSection" : ""}
        style={{ height: "9vh", backgroundColor: currentTheme.colors.primaryColor }}>
        <GridItemAligned item xs={6}>
          <IconButton
            aria-label="delete"
            style={{ color: currentTheme.colors.textOnDark }}
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
      </Grid>
    </>
  )
}

export default MenuClosedComponent

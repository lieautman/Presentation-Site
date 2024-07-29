import ThemeChanger from "../ThemeChanger/ThemeChanger";
import LanguageChanger from "../LanguageChanger/LanguageChanger";
import { useContext } from "react";
import { ThemeContext } from "../../Resources/Theme/ThemeContext";
import GridContainerWithThemeMainColor from "../../Resources/StyledComponents/GridContainerWithThemeMainColor";
import GridItemAligned from "../../Resources/StyledComponents/GridItemAligned";
import { IconButton } from "@mui/material";
import { Menu } from "@mui/icons-material";

function MenuClosedComponent({ setMenuOpen }) {
  const { currentTheme } = useContext(ThemeContext);

  return (
    <>
      <GridContainerWithThemeMainColor
        container
        className="scrollSnapSection"
        style={{ height: "9vh" }}
      >
        <GridItemAligned item xs={5}>
          <ThemeChanger />
        </GridItemAligned>
        <GridItemAligned item xs={2}>
          <IconButton
            aria-label="delete"
            style={{ color: currentTheme.colors.textColor }}
            onClick={() => setMenuOpen(true)}
          >
            <Menu />
          </IconButton>
        </GridItemAligned>
        <GridItemAligned item xs={5}>
          <LanguageChanger />
        </GridItemAligned>
      </GridContainerWithThemeMainColor>
    </>
  );
}

export default MenuClosedComponent;

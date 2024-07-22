import { useContext } from "react";
import { ThemeContext } from "../Resources/Theme/ThemeContext"
import GridContainerWithThemeMainColor from "../Resources/StyledComponents/GridContainerWithThemeMainColor";
import GridItemAligned from "../Resources/StyledComponents/GridItemAligned";
import TypographyWithTheme from "../Resources/StyledComponents/TypographyWithTheme";
import { Button } from "@mui/material";
import ThemeChanger from "./ThemeChanger/ThemeChanger";

function NavigationComponent(porps) {
    const { currentTheme } = useContext(ThemeContext);
    return (
        <GridContainerWithThemeMainColor container className="scrollSnapSection">
            <GridItemAligned item xs={2}><ThemeChanger /></GridItemAligned>
            <GridItemAligned item xs={2}><ThemeChanger /></GridItemAligned>
            <GridItemAligned item xs={2}><Button onClick={() => porps.setPageNo(1)}><TypographyWithTheme color={currentTheme.colors.textColor}>Acasa</TypographyWithTheme></Button></GridItemAligned>
            <GridItemAligned item xs={2}><Button onClick={() => porps.setPageNo(2)}><TypographyWithTheme color={currentTheme.colors.textColor}>Despre</TypographyWithTheme></Button></GridItemAligned>
            <GridItemAligned item xs={2}><Button onClick={() => porps.setPageNo(3)}><TypographyWithTheme color={currentTheme.colors.textColor}>Contact</TypographyWithTheme></Button></GridItemAligned>
            <GridItemAligned item xs={2}><Button onClick={() => porps.setPageNo(4)}><TypographyWithTheme color={currentTheme.colors.textColor}>CV</TypographyWithTheme></Button></GridItemAligned>
        </GridContainerWithThemeMainColor>
    )
}

export default NavigationComponent;
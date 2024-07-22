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
            <GridItemAligned item xs={2}><Button onClick={() => porps.setPageNo(1)}><TypographyWithTheme color={currentTheme.colors.textColor}><h3 style={{fontSize:currentTheme.fontSizes.h3}}>Acasa</h3></TypographyWithTheme></Button></GridItemAligned>
            <GridItemAligned item xs={2}><Button onClick={() => porps.setPageNo(2)}><TypographyWithTheme color={currentTheme.colors.textColor}><h3 style={{fontSize:currentTheme.fontSizes.h3}}>Despre</h3></TypographyWithTheme></Button></GridItemAligned>
            <GridItemAligned item xs={2}><Button onClick={() => porps.setPageNo(3)}><TypographyWithTheme color={currentTheme.colors.textColor}><h3 style={{fontSize:currentTheme.fontSizes.h3}}>Contact</h3></TypographyWithTheme></Button></GridItemAligned>
            <GridItemAligned item xs={2}><Button onClick={() => porps.setPageNo(4)}><TypographyWithTheme color={currentTheme.colors.textColor}><h3 style={{fontSize:currentTheme.fontSizes.h3}}>CV</h3></TypographyWithTheme></Button></GridItemAligned>
        </GridContainerWithThemeMainColor>
    )
}

export default NavigationComponent;
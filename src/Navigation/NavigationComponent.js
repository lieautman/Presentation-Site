import GridContainerWithThemeMainColor from "../Resources/StyledComponents/GridContainerWithThemeMainColor";
import GridItemAligned from "../Resources/StyledComponents/GridItemAligned";
import TypographyWithTheme from "../Resources/StyledComponents/TypographyWithTheme";
import logo from "../Resources/Images/logo.png"
import { Button } from "@mui/material";


function NavigationComponent(porps) {

    return (
        <GridContainerWithThemeMainColor container>
            <GridItemAligned item xs={4} onClick={() => porps.setPageNo(1)}><img src={logo} alt="Logo" style={{ cursor: "pointer", width: "auto", height: "8vh" }} /></GridItemAligned>
            <GridItemAligned item xs={2}><Button onClick={() => porps.setPageNo(1)}><TypographyWithTheme>Acasa</TypographyWithTheme></Button></GridItemAligned>
            <GridItemAligned item xs={2}><Button onClick={() => porps.setPageNo(2)}><TypographyWithTheme>Despre</TypographyWithTheme></Button></GridItemAligned>
            <GridItemAligned item xs={2}><Button onClick={() => porps.setPageNo(3)}><TypographyWithTheme>Contact</TypographyWithTheme></Button></GridItemAligned>
            <GridItemAligned item xs={2}><Button onClick={() => porps.setPageNo(4)}><TypographyWithTheme>CV</TypographyWithTheme></Button></GridItemAligned>
        </GridContainerWithThemeMainColor>
    )
}

export default NavigationComponent;
import { useContext } from "react";
import { ThemeContext } from "../../Resources/Theme/ThemeContext"
import { darkTheme, lightTheme } from "../../Resources/Theme/Theme"
import TypographyWithTheme from "../../Resources/StyledComponents/TypographyWithTheme";
import GridItemAligned from "../../Resources/StyledComponents/GridItemAligned";
import { Grid } from "@mui/material";

const ThemeChanger = () => {
    const { currentTheme, setCurrentTheme } = useContext(ThemeContext);
    return (
        <GridItemAligned container onClick={() => currentTheme === darkTheme ? setCurrentTheme(lightTheme) : setCurrentTheme(darkTheme)} style={{ cursor: "pointer"}}>
            <Grid item xs={6} style={{ float: 'right', marginLeft: 'auto', textAlign: 'right' }}>
                <img src={currentTheme.images.navBarImage} alt="Logo" style={{ width: "auto", height: "8vh" }}/>
            </Grid>
            <Grid item xs={6}>
                <TypographyWithTheme color={currentTheme.colors.textColor}>Change theme</TypographyWithTheme>
            </Grid>
        </GridItemAligned>)
}

export default ThemeChanger;
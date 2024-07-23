import { useContext } from "react";
import { ThemeContext } from "../../Resources/Theme/ThemeContext"
import { darkTheme, lightTheme } from "../../Resources/Theme/Theme"
import TypographyWithTheme from "../../Resources/StyledComponents/TypographyWithTheme";
import GridItemAligned from "../../Resources/StyledComponents/GridItemAligned";
import { Grid } from "@mui/material";
import { useTranslation } from 'react-i18next';

const ThemeChanger = () => {
    const { t } = useTranslation();
    const { currentTheme, setCurrentTheme } = useContext(ThemeContext);
    return (
        <GridItemAligned container onClick={() => currentTheme === darkTheme ? setCurrentTheme(lightTheme) : setCurrentTheme(darkTheme)} style={{ cursor: "pointer"}}>
            <Grid item xs={6} style={{ float: 'right', marginLeft: 'auto', textAlign: 'right' }}>
                <img src={currentTheme.images.navBarThemeImage} alt="Logo" style={{ width: "auto", height: "8vh" }}/>
            </Grid>
            <Grid item xs={6}>
                <TypographyWithTheme color={currentTheme.colors.textColor}><h3 style={{fontSize:currentTheme.fontSizes.h3}}>{t("Nav.ChangeTheme.label")}</h3></TypographyWithTheme>
            </Grid>
        </GridItemAligned>)
}

export default ThemeChanger;
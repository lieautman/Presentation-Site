import { useTranslation } from 'react-i18next';
import { Select, MenuItem, InputLabel } from "@mui/material";
import { useContext } from "react";
import { ThemeContext } from "../../Resources/Theme/ThemeContext"
import Grid from '@mui/material/Grid';
import GridItemAligned from "../../Resources/StyledComponents/GridItemAligned";

const LanguageChanger = () => {
    const { currentTheme } = useContext(ThemeContext);
    const { t, i18n } = useTranslation();
    const changeLang = (lng) => {
        i18n.changeLanguage(lng)
    }

    return (
        <Grid container spacing={1}>
            <GridItemAligned item sx={6}>
                <InputLabel id="navBarSelectLabel" sx={{ color: currentTheme.colors.textColor }}>{t("Nav.ChangeLanguage.label")}</InputLabel>
            </GridItemAligned>
            <GridItemAligned item sx={6}>
                <Select labelId="navBarSelectLabel" value={i18n.language} sx={{ color: currentTheme.colors.textColor }}>
                    <MenuItem value={'en'} onClick={() => changeLang('en')}>{t("Nav.ChangeLanguage.English")}</MenuItem>
                    <MenuItem value={'ro'} onClick={() => changeLang('ro')}>{t("Nav.ChangeLanguage.Romanian")}</MenuItem>
                </Select>
            </GridItemAligned>
        </Grid>
    )
}

export default LanguageChanger;
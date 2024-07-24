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
        <>
            <Select labelId="navBarSelectLabel" value={i18n.language} sx={{ color: currentTheme.colors.textColor, fontSize:currentTheme.fontSizes.h3 }}>
                <MenuItem value={'en'} onClick={() => changeLang('en')}>{t("Nav.ChangeLanguage.English")}</MenuItem>
                <MenuItem value={'ro'} onClick={() => changeLang('ro')}>{t("Nav.ChangeLanguage.Romanian")}</MenuItem>
            </Select>
        </>
    )
}

export default LanguageChanger;
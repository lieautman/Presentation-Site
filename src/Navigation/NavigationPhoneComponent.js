import { useContext } from "react";
import { ThemeContext } from "../Resources/Theme/ThemeContext"
import GridContainerWithThemeMainColor from "../Resources/StyledComponents/GridContainerWithThemeMainColor";
import GridItemAligned from "../Resources/StyledComponents/GridItemAligned";
import TypographyWithTheme from "../Resources/StyledComponents/TypographyWithTheme";
import ThemeChanger from "./ThemeChanger/ThemeChanger";
import LanguageChanger from "./LanguageChanger/LanguageChanger";
import { useTranslation } from 'react-i18next';
import { IconButton, Button } from "@mui/material";
import { Menu } from '@mui/icons-material';

function NavigationPhoneComponent({setPageNo, menuOpen, setMenuOpen}) {
    const { t } = useTranslation();
    const { currentTheme } = useContext(ThemeContext);
    return (
        <>
            {menuOpen ?
                <GridContainerWithThemeMainColor container className="scrollSnapSection" style={{ height: "100vh", zIndex: "100" }}>
                    <GridItemAligned item xs={12}>
                        <IconButton aria-label="delete" style={{ color: currentTheme.colors.textColor }} onClick={() => setMenuOpen(false)}>
                            <Menu />
                        </IconButton>
                    </GridItemAligned>
                    <GridItemAligned item xs={12}><Button onClick={() => setPageNo(1)}><TypographyWithTheme color={currentTheme.colors.textColor}><h3 style={{ fontSize: currentTheme.fontSizes.h3 }}>{t("Nav.Pages.Home")}</h3></TypographyWithTheme></Button></GridItemAligned>
                    <GridItemAligned item xs={12}><Button onClick={() => setPageNo(2)}><TypographyWithTheme color={currentTheme.colors.textColor}><h3 style={{ fontSize: currentTheme.fontSizes.h3 }}>{t("Nav.Pages.About")}</h3></TypographyWithTheme></Button></GridItemAligned>
                    <GridItemAligned item xs={12}><Button onClick={() => setPageNo(3)}><TypographyWithTheme color={currentTheme.colors.textColor}><h3 style={{ fontSize: currentTheme.fontSizes.h3 }}>{t("Nav.Pages.Contact")}</h3></TypographyWithTheme></Button></GridItemAligned>
                    <GridItemAligned item xs={12}><Button onClick={() => setPageNo(4)}><TypographyWithTheme color={currentTheme.colors.textColor}><h3 style={{ fontSize: currentTheme.fontSizes.h3 }}>{t("Nav.Pages.Resume")}</h3></TypographyWithTheme></Button></GridItemAligned>
                </GridContainerWithThemeMainColor> :
                <GridContainerWithThemeMainColor container className="scrollSnapSection" style={{ height: "9vh" }}>
                    <GridItemAligned item xs={5}><ThemeChanger /></GridItemAligned>
                    <GridItemAligned item xs={2}>
                        <IconButton aria-label="delete" style={{ color: currentTheme.colors.textColor }} onClick={() => setMenuOpen(true)}>
                            <Menu />
                        </IconButton>
                    </GridItemAligned>
                    <GridItemAligned item xs={5}><LanguageChanger /></GridItemAligned>
                </GridContainerWithThemeMainColor>}
        </>
    )
}

export default NavigationPhoneComponent;
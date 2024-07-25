import BoxWithvh from "../../Resources/StyledComponents/BoxWithvh";
import TypographyWithTheme from "../../Resources/StyledComponents/TypographyWithTheme";
import { useContext } from "react";
import { ThemeContext } from "../../Resources/Theme/ThemeContext"
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTranslation } from 'react-i18next';

function Home() {
    const { t } = useTranslation();
    const { currentTheme } = useContext(ThemeContext);
    const matches = useMediaQuery('(min-width:600px)');

    return (
        <>
            <BoxWithvh
                height={91}
                sx={{
                    backgroundImage: `url(${currentTheme.images.homeFirstImage})`,
                    backgroundSize: matches ? "100% 100%" : "150% 100%",
                    backgroundPosition: 'center',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                <TypographyWithTheme color={currentTheme.colors.titleColor}>
                    <h1 style={{ fontSize: matches ? currentTheme.fontSizes.h1 : currentTheme.fontSizesPhone.h1 }}>{t("Home.Page1.Title1")}</h1>
                </TypographyWithTheme>
                <TypographyWithTheme color={currentTheme.colors.titleColor}>
                    <h2 style={{ fontSize: matches ? currentTheme.fontSizes.h2 : currentTheme.fontSizesPhone.h2 }}>{t("Home.Page1.Title2")}</h2>
                </TypographyWithTheme>
            </BoxWithvh >
            <BoxWithvh
                height={100}
                className="scrollSnapSection"
                backgroundColor={currentTheme.colors.primaryAccentsColor}
            >
                <BoxWithvh
                    height={10}
                    backgroundColor={currentTheme.colors.secondaryColor}
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                >
                    <TypographyWithTheme color={currentTheme.colors.titleColor}>
                        <h1 style={{ fontSize: matches ? currentTheme.fontSizes.h1 : currentTheme.fontSizesPhone.h1 }}>{t("Home.Page2.Title1")}</h1>
                    </TypographyWithTheme>
                </BoxWithvh>
                <BoxWithvh
                    height={40}
                    backgroundColor={currentTheme.colors.secondaryColor}
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginTop: '25vh'
                    }}
                >
                    <TypographyWithTheme color={currentTheme.colors.titleColor}>
                        <h3 style={{ fontSize: matches ? currentTheme.fontSizes.h3 : currentTheme.fontSizesPhone.h3 }}>{t("Home.Page2.Paragraph1")}</h3>
                        <h3 style={{ fontSize: matches ? currentTheme.fontSizes.h3 : currentTheme.fontSizesPhone.h3 }}>{t("Home.Page2.Paragraph2")}</h3>
                        <h3 style={{ fontSize: matches ? currentTheme.fontSizes.h3 : currentTheme.fontSizesPhone.h3 }}>{t("Home.Page2.Paragraph3")}</h3>
                        <h3 style={{ fontSize: matches ? currentTheme.fontSizes.h3 : currentTheme.fontSizesPhone.h3 }}>{t("Home.Page2.Paragraph4")}</h3>
                    </TypographyWithTheme>
                </BoxWithvh>
            </BoxWithvh>
        </>
    )
}

export default Home;
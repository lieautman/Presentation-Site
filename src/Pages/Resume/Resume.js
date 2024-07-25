import BoxWithvh from "../../Resources/StyledComponents/BoxWithvh";
import TypographyWithTheme from "../../Resources/StyledComponents/TypographyWithTheme";
import { useContext } from "react";
import { ThemeContext } from "../../Resources/Theme/ThemeContext"
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTranslation } from 'react-i18next';
import { Box, IconButton } from '@mui/material';
import { AssignmentInd } from '@mui/icons-material';


function Resume() {
    const { t, i18n } = useTranslation();
    const { currentTheme } = useContext(ThemeContext);
    const matches = useMediaQuery('(min-width:600px)');

    const onButtonClick = () => {
        const pdfUrl = i18n.language === "en" ? "CV_EN.pdf" : "CV_RO.pdf";
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.download = i18n.language === "en" ? "resume.pdf" : "curriculum_vitae.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

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
                    justifyContent: 'center',
                    textAlign: "center"
                }}>
                <TypographyWithTheme color={currentTheme.colors.titleColor}>
                    <h1 style={{ fontSize: matches ? currentTheme.fontSizes.h1 : currentTheme.fontSizesPhone.h1 }}>{t("Resume.Page1.Title1")}</h1>
                </TypographyWithTheme>
                <TypographyWithTheme color={currentTheme.colors.titleColor}>
                    <h2 style={{ fontSize: matches ? currentTheme.fontSizes.h2 : currentTheme.fontSizesPhone.h2 }}>{t("Resume.Page1.Title2")}</h2>
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
                        justifyContent: 'center',
                        textAlign: "center"
                    }}
                >
                    <TypographyWithTheme color={currentTheme.colors.titleColor}>
                        <h1 style={{ fontSize: matches ? currentTheme.fontSizes.h1 : currentTheme.fontSizesPhone.h1 }}>{t("Resume.Page2.Title1")}</h1>
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
                        marginTop: '25vh',
                        textAlign: "center"
                    }}
                >
                    <Box onClick={onButtonClick}>
                        <IconButton style={{ color: currentTheme.colors.textColor }}>
                            <AssignmentInd style={{ fontSize: currentTheme.fontSizesPhone.h1Big }} />
                        </IconButton>
                        <TypographyWithTheme color={currentTheme.colors.textColor}>
                            <h1 style={{ fontSize: matches ? currentTheme.fontSizes.h1 : currentTheme.fontSizesPhone.h1 }}>{t("Resume.Page2.Paragraph1")}</h1>
                        </TypographyWithTheme>
                    </Box>
                </BoxWithvh>
            </BoxWithvh>
        </>
    )
}

export default Resume;
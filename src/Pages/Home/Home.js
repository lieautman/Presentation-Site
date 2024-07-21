import BoxWith91vh from "../../Resources/StyledComponents/BoxWith91vh";
import BoxWith100vh from "../../Resources/StyledComponents/BoxWith100vh";
import TypographyWithTheme from "../../Resources/StyledComponents/TypographyWithTheme";
import securityBackgorundFadedCracked from "../../Resources/Images/securityBackgorundFadedCracked.jpg"
import theme from "../../Resources//Theme/theme";

function Home() {

    return (
        <>
            <BoxWith91vh  sx={{
                backgroundImage: `url(${securityBackgorundFadedCracked})`,
                backgroundSize: "100% 130%"
            }}>
                <TypographyWithTheme color={theme.colors.titleColor}>
                    <h1>Hello World and welcome to my website!</h1>
                </TypographyWithTheme>
                <TypographyWithTheme color={theme.colors.titleColor}>
                    <h2>"No one is you and that is power"</h2>
                </TypographyWithTheme>
            </BoxWith91vh >
            <BoxWith100vh className="scrollSnapSection">
                <TypographyWithTheme color={theme.colors.titleColor}>
                    <h2>"No one is you and that is power"</h2>
                </TypographyWithTheme>
            </BoxWith100vh>
        </>
    )
}

export default Home;
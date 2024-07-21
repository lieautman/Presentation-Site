import BoxWith91vh from "../../Resources/StyledComponents/BoxWith91vh";
import BoxWith100vh from "../../Resources/StyledComponents/BoxWith100vh";
import TypographyWithTheme from "../../Resources/StyledComponents/TypographyWithTheme";
import { useContext } from "react";
import { ThemeContext } from "../../Resources/Theme/ThemeContext"

function Home() {
    const { currentTheme } = useContext(ThemeContext);

    return (
        <>
            <BoxWith91vh sx={{
                backgroundImage: `url(${currentTheme.images.homeFirstImage})`,
                backgroundSize: "100% 130%"
            }}>
                <TypographyWithTheme color={currentTheme.colors.titleColor}>
                    <h1>Hello World and welcome to my website!</h1>
                </TypographyWithTheme>
                <TypographyWithTheme color={currentTheme.colors.titleColor}>
                    <h2>"No one is you and that is power"</h2>
                </TypographyWithTheme>
            </BoxWith91vh >
            <BoxWith100vh className="scrollSnapSection">
                <TypographyWithTheme color={currentTheme.colors.titleColor}>
                    <h2>"No one is you and that is power"</h2>
                </TypographyWithTheme>
            </BoxWith100vh>
        </>
    )
}

export default Home;
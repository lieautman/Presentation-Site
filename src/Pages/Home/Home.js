import BoxWithvh from "../../Resources/StyledComponents/BoxWithvh";
import TypographyWithTheme from "../../Resources/StyledComponents/TypographyWithTheme";
import { useContext } from "react";
import { ThemeContext } from "../../Resources/Theme/ThemeContext"
import useMediaQuery from '@mui/material/useMediaQuery';

function Home() {
    const { currentTheme } = useContext(ThemeContext);
    const matches = useMediaQuery('(min-width:600px)');

    return (
        <>
            <BoxWithvh
                height={91}
                sx={{
                    backgroundImage: `url(${currentTheme.images.homeFirstImage})`,
                    backgroundSize: matches?"100% 100%":"150% 100%",
                    backgroundPosition: 'center',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                <TypographyWithTheme color={currentTheme.colors.titleColor}>
                    <h1 style={{fontSize: currentTheme.fontSizes.h1}}>Hello World and welcome to my website!</h1>
                </TypographyWithTheme>
                <TypographyWithTheme color={currentTheme.colors.titleColor}>
                    <h2 style={{fontSize: currentTheme.fontSizes.h2}}>Read the purpose of this website below!</h2>
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
                        <h1 style={{fontSize: currentTheme.fontSizes.h1}}>Read.me to document it all</h1>
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
                    <BoxWithvh
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: "60vw"
                        }}>
                        <TypographyWithTheme color={currentTheme.colors.titleColor}>
                            <h3 style={{ whiteSpace: 'pre-line', fontSize: currentTheme.fontSizes.h3 }}>
                                {`This website aims to be my contact card for as much of my academic and professional interactions as possible.
                                It presents my academic or professional path and achivements in the "About" section.
                                The "Contact" and "CV" sections display professional information and ways to contact the author.
                                These sections as well as a theme changer and a language changer appear in a navigation bar.`}
                            </h3>
                        </TypographyWithTheme>
                    </BoxWithvh>
                </BoxWithvh>
            </BoxWithvh>
        </>
    )
}

export default Home;
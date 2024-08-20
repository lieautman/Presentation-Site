import BoxWithvh from "../../Resources/StyledComponents/BoxWithvh"
import { useCallback, useContext, useEffect } from "react"
import { themeContext } from "../../Contexts/themeContext"
import { scrollSnapContext } from "../../Contexts/scrollSnapContext"
import useMediaQuery from "@mui/material/useMediaQuery"
import { useTranslation } from "react-i18next"
import { Box, Button, IconButton, Typography } from "@mui/material"
import { Download } from "@mui/icons-material"
import { motion, useAnimate } from "framer-motion"
import NavigationContainer from "../../Navigation/NavigationContainer"

function Resume() {
  const { t, i18n } = useTranslation()
  const { currentTheme } = useContext(themeContext)
  const { scrollSnap } = useContext(scrollSnapContext)
  const matches = useMediaQuery("(min-width:600px)")
  const [scope, animate] = useAnimate()

  const myAnimation = useCallback(async () => {
    try {
      await animate(scope.current, { rotate: -180 })
      await animate(scope.current, { scale: 1.3 })
      await animate(scope.current, { rotate: 0 })
      await animate(scope.current, { scale: 1 })

      animate(
        scope.current,
        {
          scale: 1.3,
        },
        {
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
          duration: 1,
        }
      )
    } catch (e) {}
  }, [animate, scope])

  useEffect(() => {
    myAnimation()
  }, [myAnimation])

  const onButtonClick = () => {
    const pdfUrl = i18n.language === "en" ? "CV_EN.pdf" : "CV_RO.pdf"
    const link = document.createElement("a")
    link.href = pdfUrl
    link.download = i18n.language === "en" ? "resume.pdf" : "curriculum-vitae.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <>
      <NavigationContainer />
      <BoxWithvh
        height={91}
        sx={{
          backgroundImage: `url(${currentTheme.images.resumeFirstImage})`,
          backgroundSize: matches ? "100% 100%" : "150% 100%",
          backgroundPosition: "center",
          backgroundColor: `${currentTheme.colors.secondaryColor}`,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
        }}>
        <Typography
          variant="h1"
          gutterBottom
          fontWeight={"fontWeightBold"}
          style={{
            color: currentTheme.colors.textOnLight,
            fontSize: matches ? currentTheme.fontSizes.h1 : currentTheme.fontSizesPhone.h1,
          }}>
          {t("Resume.Page1.Title1")}
        </Typography>
        <Typography
          variant="h2"
          gutterBottom
          fontWeight={"fontWeightBold"}
          style={{
            color: currentTheme.colors.textOnLight,
            fontSize: matches ? currentTheme.fontSizes.h2 : currentTheme.fontSizesPhone.h2,
          }}>
          {t("Resume.Page1.Title2")}
        </Typography>
      </BoxWithvh>
      <BoxWithvh
        height={100}
        className={scrollSnap ? "scrollSnapSection" : ""}
        backgroundColor={currentTheme.colors.secondaryColor}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            height: matches ? "10vh" : "15vh",
            backgroundColor: currentTheme.colors.primaryAccentsColor,
          }}>
          <Typography
            variant="h1"
            fontWeight={"fontWeightBold"}
            style={{
              color: currentTheme.colors.textOnDark,
              fontSize: matches ? currentTheme.fontSizes.h1 : currentTheme.fontSizesPhone.h1,
            }}
            component={motion.h1}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 1 }}>
            {t("Resume.Page2.Title1")}
          </Typography>
        </Box>
        <BoxWithvh
          height={40}
          backgroundColor={currentTheme.colors.primaryAccentsColor}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "25vh",
            textAlign: "center",
          }}>
          <Button onClick={onButtonClick} sx={{ cursor: "pointer" }} component={motion.div} ref={scope}>
            <IconButton style={{ color: currentTheme.colors.textOnDark }}>
              <Download
                style={{
                  fontSize: currentTheme.fontSizesPhone.h1Big,
                }}
              />
            </IconButton>
            <Typography
              variant="h1"
              gutterBottom
              fontWeight={"fontWeightBold"}
              style={{
                color: currentTheme.colors.textOnDark,
                fontSize: matches ? currentTheme.fontSizes.h1 : currentTheme.fontSizesPhone.h1,
              }}>
              {t("Resume.Page2.Paragraph1")}
            </Typography>
          </Button>
        </BoxWithvh>
      </BoxWithvh>
    </>
  )
}

export default Resume

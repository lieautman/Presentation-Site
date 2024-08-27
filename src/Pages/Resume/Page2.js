import { useCallback, useContext, useEffect } from "react"
import { themeContext } from "../../Contexts/themeContext"
import { scrollSnapContext } from "../../Contexts/scrollSnapContext"
import useMediaQuery from "@mui/material/useMediaQuery"
import { useTranslation } from "react-i18next"
import { Box, Button, IconButton, Typography } from "@mui/material"
import { ArrowDownward, Download } from "@mui/icons-material"
import { motion, useAnimate } from "framer-motion"

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
    <Box className={scrollSnap ? "scrollSnapSection" : ""} backgroundColor={currentTheme.colors.secondaryColor}>
      <Box
        sx={{
          height: "100vh",
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
      <Box
        backgroundColor={currentTheme.colors.primaryAccentsColor}
        sx={{
          height: "40vh",
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
      </Box>
      <Box
        style={{
          width: "20%",
          display: "grid",
          position: "relative",
          alignItems: "center",
          textAlign: "center",
          left: "80%",
          top: "1%",
        }}>
        <Typography
          variant="h2"
          gutterBottom
          fontWeight={"fontWeightBold"}
          style={{
            color: currentTheme.colors.textOnLight,
            fontSize: matches ? currentTheme.fontSizes.h2 : currentTheme.fontSizesPhone.h2,
          }}>
          {t("ScrollFor").concat(" ", t("Nav.Pages.Contact"))}
        </Typography>
        <IconButton style={{ color: currentTheme.colors.textOnDark }}>
          <ArrowDownward
            style={{
              fontSize: currentTheme.fontSizesPhone.h1,
            }}
          />
        </IconButton>
      </Box>
    </Box>
  )
}

export default Resume

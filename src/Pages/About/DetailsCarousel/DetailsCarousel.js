import { Box, IconButton } from "@mui/material"
import useMediaQuery from "@mui/material/useMediaQuery"
import { useContext } from "react"
import TypographyWithTheme from "../../../Resources/StyledComponents/TypographyWithTheme"
import { themeContext } from "../../../Contexts/themeContext"
import { Carousel } from "react-responsive-carousel"
import { ArrowBack, ArrowForward } from "@mui/icons-material"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { motion } from "framer-motion"

function DetailsCarousel({ items }) {
  const matches = useMediaQuery("(min-width:1000px)")
  const { currentTheme } = useContext(themeContext)

  const arrowStyles = {
    position: "absolute",
    zIndex: 2,
    top: "calc(50% - 15px)",
    width: 30,
    height: 30,
    cursor: "pointer",
  }

  return (
    <Box
      sx={{ height: "50vh", width: "70vw" }}
      component={motion.div}
      whileInView={{ opacity: 1, x: 0, transition: { delay: 0.3 } }}
      initial={{ opacity: 0, x: 50 }}
      transition={{ duration: 0.7 }}>
      <Carousel
        swipeable
        showStatus={false}
        renderArrowPrev={(onClickHandler, hasPrev, label) =>
          hasPrev &&
          matches && (
            <IconButton type="button" onClick={onClickHandler} title={label} style={{ ...arrowStyles, left: 15 }}>
              <ArrowBack />
            </IconButton>
          )
        }
        renderArrowNext={(onClickHandler, hasNext, label) =>
          hasNext &&
          matches && (
            <IconButton type="button" onClick={onClickHandler} title={label} style={{ ...arrowStyles, right: 15 }}>
              <ArrowForward />
            </IconButton>
          )
        }>
        {items.map((item) => (
          <Box sx={{ height: "50vh", width: "70vw", display: "flex" }}>
            {matches ? (
              <Box
                sx={{
                  height: "50vh",
                  width: "35vw",
                  backgroundImage: `url(${item.image})`,
                  backgroundPosition: "center",
                  backgroundSize: "100% 100%",
                }}></Box>
            ) : (
              <></>
            )}
            <Box
              sx={{
                height: "50vh",
                width: matches ? "35vw" : "70vw",
                backgroundColor: `${currentTheme.colors.secondaryAccentsColor}`,
                overflow: "auto",
              }}>
              <Box>
                <TypographyWithTheme color={currentTheme.colors.textOnDark}>
                  <h3
                    sx={{
                      fontSize: matches ? currentTheme.fontSizes.h1 : currentTheme.fontSizesPhone.h1,
                    }}>
                    {item.header}
                  </h3>
                </TypographyWithTheme>
              </Box>
              <Box sx={{ textAlign: "left", margin: "20px" }}>
                <TypographyWithTheme color={currentTheme.colors.textOnDark}>
                  <p
                    sx={{
                      fontSize: matches ? currentTheme.fontSizes.p : currentTheme.fontSizesPhone.p,
                    }}>
                    {item.text}
                  </p>
                </TypographyWithTheme>
              </Box>
            </Box>
          </Box>
        ))}
      </Carousel>
    </Box>
  )
}

export default DetailsCarousel

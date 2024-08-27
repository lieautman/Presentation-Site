import React, { useEffect, useRef, useContext } from "react"
import { useNavigate } from "react-router-dom"
import { scrollSnapContext } from "../../../Contexts/scrollSnapContext"
import { Box, Typography, Icon } from "@mui/material"
import { themeContext } from "../../../Contexts/themeContext"
import useMediaQuery from "@mui/material/useMediaQuery"
import { ArrowDownward } from "@mui/icons-material"

export const NextPage = ({ route, text }) => {
  const divRef = useRef(null)
  const navigate = useNavigate()
  const { scrollSnap } = useContext(scrollSnapContext)
  const { currentTheme } = useContext(themeContext)
  const matches = useMediaQuery("(min-width:600px)")

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              navigate(`/${route}`)
            }, 500)
          }
        })
      },
      { threshold: 0.99 }
    )
    if (divRef.current) {
      observer.observe(divRef.current)
    }
  }, [navigate, route])

  return (
    <Box
      className={scrollSnap ? "scrollSnapSection" : ""}
      ref={divRef}
      style={{
        backgroundColor: `${currentTheme.colors.primaryColor}`,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        height: "20vh",
      }}>
      <Typography
        variant="h2"
        gutterBottom
        fontWeight={"fontWeightBold"}
        style={{
          color: currentTheme.colors.textOnDark,
          fontSize: matches ? currentTheme.fontSizes.h2 : currentTheme.fontSizesPhone.h2,
        }}>
        {text}
      </Typography>
    </Box>
  )
}

export const NextPageButton = ({ text }) => {
  const { currentTheme } = useContext(themeContext)
  const matches = useMediaQuery("(min-width:600px)")

  return (
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
        {text}
      </Typography>
      <Icon style={{ color: currentTheme.colors.textOnDark, width: "auto", height: "auto" }}>
        <ArrowDownward
          style={{
            fontSize: currentTheme.fontSizesPhone.h1,
          }}
        />
      </Icon>
    </Box>
  )
}

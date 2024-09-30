import React, { useEffect, useRef, useContext } from "react"
import { useNavigate } from "react-router-dom"
import { scrollSnapContext } from "../../../Contexts/scrollSnapContext"
import { Box, Typography } from "@mui/material"
import { themeContext } from "../../../Contexts/themeContext"
import useMediaQuery from "@mui/material/useMediaQuery"

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

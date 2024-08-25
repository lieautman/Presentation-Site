import { Box } from "@mui/material"
import useMediaQuery from "@mui/material/useMediaQuery"
import { useContext } from "react"
import { themeContext } from "../../../Contexts/themeContext"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { motion } from "framer-motion"

function DetailsCarousel3d({ items }) {
  return (
    <Box
      sx={{
        marginTop: "5vh",
        width: "70vw",
      }}
      component={motion.div}
      whileInView={{ opacity: 1, x: 0, transition: { delay: 0.3 } }}
      initial={{ opacity: 0, x: 50 }}
      transition={{ duration: 0.7 }}></Box>
  )
}

export default DetailsCarousel3d

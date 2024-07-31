import { Box } from "@mui/material"
import useMediaQuery from "@mui/material/useMediaQuery"
import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"

function DetailsCarousel({ items }) {
  const matches = useMediaQuery("(min-width:1000px)")

  const arrowStyles = {
    position: "absolute",
    zIndex: 2,
    top: "calc(50% - 15px)",
    width: 30,
    height: 30,
    cursor: "pointer",
  }

  return (
    <Box sx={{ height: "50vh", width: "70vw" }}>
      <Carousel
        swipeable
        showStatus={false}
        renderArrowPrev={(onClickHandler, hasPrev, label) =>
          hasPrev && (
            <button type="button" onClick={onClickHandler} title={label} style={{ ...arrowStyles, left: 15 }}>
              -
            </button>
          )
        }
        renderArrowNext={(onClickHandler, hasNext, label) =>
          hasNext && (
            <button type="button" onClick={onClickHandler} title={label} style={{ ...arrowStyles, right: 15 }}>
              +
            </button>
          )
        }>
        {items.map((item) => (
          <Box sx={{ height: "50vh", width: "70vw", display: "flex" }}>
            {matches ? <Box sx={{ height: "50vh", width: "35vw" }}>{item.image}</Box> : <></>}
            <Box
              sx={{
                height: "50vh",
                width: matches ? "35vw" : "70vw",
              }}>
              <h3>{item.header}</h3>
              <p>{item.text}</p>
            </Box>
          </Box>
        ))}
      </Carousel>
    </Box>
  )
}

export default DetailsCarousel

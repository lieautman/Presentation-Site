import React, { useEffect, useRef, useContext } from "react"
import { useNavigate } from "react-router-dom"
import { scrollSnapContext } from "../../../Contexts/scrollSnapContext"
import NavigationContainer from "../../..//Navigation/NavigationContainer"
import HomePage1 from "../../Home/Page1"
import AboutPage1 from "../../About/Page1"
import ContactPage1 from "../../Contact/Page1"
import ResumePage1 from "../../Resume/Page1"

export const NextPage = ({ route }) => {
  const divRef = useRef(null)
  const navigate = useNavigate()
  const { scrollSnap } = useContext(scrollSnapContext)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              navigate(`/${route}`)
            }, 20)
          }
        })
      },
      { threshold: 0.99 }
    )
    if (divRef.current) {
      observer.observe(divRef.current)
    }
  }, [navigate, route])

  if (route === "home")
    return (
      <>
        <NavigationContainer />
        <HomePage1 divRef={divRef} scrollSnap={scrollSnap} />
      </>
    )

  if (route === "about")
    return (
      <>
        <NavigationContainer />
        <AboutPage1 divRef={divRef} scrollSnap={scrollSnap} />
      </>
    )

  if (route === "contact")
    return (
      <>
        <NavigationContainer /> <ContactPage1 divRef={divRef} scrollSnap={scrollSnap} />
      </>
    )

  if (route === "resume")
    return (
      <>
        <NavigationContainer /> <ResumePage1 divRef={divRef} scrollSnap={scrollSnap} />
      </>
    )
}

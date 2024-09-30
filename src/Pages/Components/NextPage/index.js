import React, { useEffect, useRef, useContext } from "react"
import { useNavigate } from "react-router-dom"
import { scrollSnapContext } from "../../../Contexts/scrollSnapContext"
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
            }, 1)
          }
        })
      },
      { threshold: 0.99 }
    )
    if (divRef.current) {
      observer.observe(divRef.current)
    }
  }, [navigate, route])

  if (route === "home") return <HomePage1 divRef={divRef} scrollSnap={scrollSnap} />

  if (route === "about") return <AboutPage1 divRef={divRef} scrollSnap={scrollSnap} />

  if (route === "contact") return <ContactPage1 divRef={divRef} scrollSnap={scrollSnap} />

  if (route === "resume") return <ResumePage1 divRef={divRef} scrollSnap={scrollSnap} />
}

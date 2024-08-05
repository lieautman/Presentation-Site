import TypographyWithTheme from "../../Resources/StyledComponents/TypographyWithTheme"
import { useContext, useState } from "react"
import { themeContext } from "../../Contexts/themeContext"
import { scrollSnapContext } from "../../Contexts/scrollSnapContext"
import useMediaQuery from "@mui/material/useMediaQuery"
import { useTranslation } from "react-i18next"
import emailjs from "@emailjs/browser"
import { Button, Input } from "@mui/material"
import Box from "@mui/material/Box"

function Page2() {
  const { t } = useTranslation()
  const { currentTheme } = useContext(themeContext)
  const { scrollSnap } = useContext(scrollSnapContext)
  const matches = useMediaQuery("(min-width:600px)")

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  const templateParams = {
    from_name: name,
    from_email: email,
    to_name: "Cristi",
    message: message,
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const ServiceId = "service_qa9ig88"
    const TemplateId = "template_gkk4c6b"
    const PublicKey = "IuBo1lXrKMjYBbSKG"

    emailjs
      .send(ServiceId, TemplateId, templateParams, PublicKey)
      .then((response) => {
        console.log("Email sent succesfully!", response)
        setName("")
        setEmail("")
        setMessage("")
      })
      .catch((error) => {
        console.error("Error sending email:", error)
      })
  }

  return (
    <>
      <Box
        className={scrollSnap ? "scrollSnapSection" : ""}
        sx={{
          backgroundColor: `${currentTheme.colors.secondaryColor}`,
          height: "100vh",
        }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            backgroundColor: `${currentTheme.colors.primaryAccentsColor}`,
            height: "10vh",
          }}>
          <TypographyWithTheme color={currentTheme.colors.textOnDark}>
            <h1
              style={{
                fontSize: matches ? currentTheme.fontSizes.h1 : currentTheme.fontSizesPhone.h1,
              }}>
              {t("Contact.Page2.Title1")}
            </h1>
          </TypographyWithTheme>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "25vh",
            textAlign: "center",
            backgroundColor: `${currentTheme.colors.primaryAccentsColor}`,
            height: "40vh",
          }}>
          <Input
            type="text"
            placeholder="Your name"
            value={name}
            sx={{ margin: "10px", width: matches ? "20vw" : "40vw", color: `${currentTheme.colors.textOnDark}` }}
            onChange={(e) => {
              setName(e.target.value)
            }}
          />
          <Input
            type="text"
            placeholder="Your email"
            sx={{ margin: "10px", width: matches ? "20vw" : "40vw", color: `${currentTheme.colors.textOnDark}` }}
            onChange={(e) => {
              setEmail(e.target.value)
            }}
          />
          <Input
            type="text"
            placeholder="Your message"
            multiline
            rows={5}
            variant="standard"
            sx={{ margin: "10px", width: matches ? "20vw" : "40vw", color: `${currentTheme.colors.textOnDark}` }}
            onChange={(e) => {
              setMessage(e.target.value)
            }}
          />
          <Button
            type="submit"
            onClick={handleSubmit}
            sx={{ margin: "10px", color: `${currentTheme.colors.textOnDark}` }}>
            Send email
          </Button>
        </Box>
      </Box>
    </>
  )
}

export default Page2

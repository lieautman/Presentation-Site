import BoxWithvh from "../../Resources/StyledComponents/BoxWithvh"
import TypographyWithTheme from "../../Resources/StyledComponents/TypographyWithTheme"
import { useContext, useState } from "react"
import { ThemeContext } from "../../Resources/Theme/ThemeContext"
import useMediaQuery from "@mui/material/useMediaQuery"
import { useTranslation } from "react-i18next"
import emailjs from "@emailjs/browser"
import { Input } from "@mui/material"
import Box from "@mui/material/Box"

function Contact() {
  const { t } = useTranslation()
  const { currentTheme } = useContext(ThemeContext)
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
        sx={{
          backgroundImage: `url(${currentTheme.images.resumeFirstImage})`,
          backgroundSize: matches ? "100% 100%" : "150% 100%",
          backgroundPosition: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          height: "91vh",
        }}
      >
        <Input
          type="text"
          placeholder="Your name"
          value={name}
          onChange={(e) => {
            setName(e.target.value)
          }}
        />
        <Input
          type="text"
          placeholder="Your email"
          onChange={(e) => {
            setEmail(e.target.value)
          }}
        />
        <Input
          type="text"
          placeholder="Your message"
          onChange={(e) => {
            setMessage(e.target.value)
          }}
        />
        <button type="submit" onClick={handleSubmit}>
          Send email
        </button>
        <TypographyWithTheme color={currentTheme.colors.titleColor}>
          <h1
            style={{
              fontSize: matches
                ? currentTheme.fontSizes.h1
                : currentTheme.fontSizesPhone.h1,
            }}
          >
            {t("Contact.Page1.Title1")}
          </h1>
        </TypographyWithTheme>
        <TypographyWithTheme color={currentTheme.colors.titleColor}>
          <h2
            style={{
              fontSize: matches
                ? currentTheme.fontSizes.h2
                : currentTheme.fontSizesPhone.h2,
            }}
          >
            {t("Contact.Page1.Title2")}
          </h2>
        </TypographyWithTheme>
      </Box>
      <BoxWithvh
        height={100}
        className="scrollSnapSection"
        backgroundColor={currentTheme.colors.primaryAccentsColor}
      >
        <BoxWithvh
          height={10}
          backgroundColor={currentTheme.colors.secondaryColor}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          <TypographyWithTheme color={currentTheme.colors.titleColor}>
            <h1
              style={{
                fontSize: matches
                  ? currentTheme.fontSizes.h1
                  : currentTheme.fontSizesPhone.h1,
              }}
            >
              {t("Contact.Page2.Title1")}
            </h1>
          </TypographyWithTheme>
        </BoxWithvh>
        <BoxWithvh
          height={40}
          backgroundColor={currentTheme.colors.secondaryColor}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "25vh",
            textAlign: "center",
          }}
        ></BoxWithvh>
      </BoxWithvh>
    </>
  )
}

export default Contact

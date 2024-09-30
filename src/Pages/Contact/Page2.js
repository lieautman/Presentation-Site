import TypographyWithTheme from "../../Resources/StyledComponents/TypographyWithTheme"
import { useContext, useState } from "react"
import { themeContext } from "../../Contexts/themeContext"
import { scrollSnapContext } from "../../Contexts/scrollSnapContext"
import useMediaQuery from "@mui/material/useMediaQuery"
import { useTranslation } from "react-i18next"
import emailjs from "@emailjs/browser"
import { Button, Input } from "@mui/material"
import Box from "@mui/material/Box"
import { motion } from "framer-motion"
import ReCAPTCHA from "react-google-recaptcha"
import { toast } from "react-toastify"

function Page2() {
  const { t } = useTranslation()
  const { currentTheme } = useContext(themeContext)
  const { scrollSnap } = useContext(scrollSnapContext)
  const matches = useMediaQuery("(min-width:600px)")

  const [capVal, setCapVal] = useState()

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  const templateParams = {
    from_name: name,
    from_email: email,
    to_name: "Cristi",
    message: message,
  }

  function emailIsValid(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (capVal && name && email && message && emailIsValid(email)) {
      const ServiceId = "service_qa9ig88"
      const TemplateId = "template_gkk4c6b"
      const PublicKey = "IuBo1lXrKMjYBbSKG"

      emailjs
        .send(ServiceId, TemplateId, templateParams, PublicKey)
        .then(() => {
          toast(t("Contact.Page2.Success"))
          setName("")
          setEmail("")
          setMessage("")
        })
        .catch(() => {
          toast(t("Contact.Page2.Error"))
        })
    } else {
      toast(t("Contact.Page2.Robot"))
    }

    setCapVal()
  }

  return (
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
          <motion.h1
            style={{
              fontSize: matches ? currentTheme.fontSizes.h1 : currentTheme.fontSizesPhone.h1,
            }}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 1 }}>
            {t("Contact.Page2.Title1")}
          </motion.h1>
        </TypographyWithTheme>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "20vh",
          textAlign: "center",
          backgroundColor: `${currentTheme.colors.primaryAccentsColor}`,
          height: "55vh",
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
        <ReCAPTCHA sitekey="6Lc_QCwqAAAAALuTLns7R4MsPeKdRP0S_MehbCkY" onChange={(val) => setCapVal(val)} />
        <Button
          type="submit"
          onClick={handleSubmit}
          sx={{ margin: "10px", color: `${currentTheme.colors.textOnDark}` }}>
          Send email
        </Button>
      </Box>
    </Box>
  )
}

export default Page2

import TypographyWithTheme from "../../Resources/StyledComponents/TypographyWithTheme"
import { useContext } from "react"
import { themeContext } from "../../Resources/Theme/themeContext"
import useMediaQuery from "@mui/material/useMediaQuery"
import { useTranslation } from "react-i18next"
import Box from "@mui/material/Box"

function Page2() {
  const { t } = useTranslation()
  const { currentTheme } = useContext(themeContext)
  const matches = useMediaQuery("(min-width:600px)")

  return (
    <>
      <Box
        className="scrollSnapSection"
        sx={{
          backgroundColor: `${currentTheme.colors.primaryAccentsColor}`,
          height: "100vh",
        }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            backgroundColor: `${currentTheme.colors.secondaryColor}`,
            height: "10vh",
          }}>
          <TypographyWithTheme color={currentTheme.colors.titleColor}>
            <h1
              style={{
                fontSize: matches ? currentTheme.fontSizes.h1 : currentTheme.fontSizesPhone.h1,
              }}>
              {t("About.Page4.Title1")}
            </h1>
          </TypographyWithTheme>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "15vh",
            textAlign: "center",
            backgroundColor: `${currentTheme.colors.secondaryColor}`,
            height: "60vh",
          }}>
          <TypographyWithTheme>
            M-am nascut in Bucuresti, Romania, in toamna anului 2000. La scurt timp, impreuna cu familia mea, ne-am
            mutat in provincie intr-un oras mic in zona Olteniei. Aici mi-am petrecut mare parte din copilarie si
            adolescenta. Am absolvit Lieul teoretic Mihai-Viteazul la clasa de mate-info bilingv in anul 2019. Aici am
            putut sa ma dezvolt pe plan personal, reusind sa realizez diferite proiecte ce mi-au asigurat mai multe
            certificate, foarte devreme in viata/cariera. La scurt timp am inceput studiile la Academia de Stiinte
            Economice din Bucuresti, una dintre cele mai recunoscute universitati din Romania, la profilul de
            Cibernetica Economica. In primul an am studiat diferite materii legate de IT, dar cu aplicare in economie,
            fiindu-ne reamintita mereu latura practica a celor invatate. In timpul meu liber eram interesat de modurile
            in care pot aplica ce am invatat de-a lungul timpului si de cum functioneaza tehnologia pana la cel mai mic
            nivel. Intre semestre am incercat mereu sa ma aplic in cat mai multe: de la proiecte personale, cum ar fi
            chiar acest site, pana la lucru pentru firme locale(ce insa pana la momentul actual nu am reusit crearea
            unei aplicatii cap-coada). In semestru 2, am ajuns sa fiu destul de sigur ca facultatea va fi online, asa ca
            am inceput sa imi caut un loc de munca pentru a ma mentine alert. Facultatea m-a ajutat de asemenea in acest
            sens, materiile devenint mai specializate, fiind nevoit sa fac un stagiu de practica si per total,
            introducandu-ma in universul unui adevarat loc de munca. Toate acestea culmineaza cumva, in anul 3 cand
            reusesc sa fiu acceptat intr-un intern-ship la Banca Transilvania. Aici reusesc sa deprind o multitudine de
            cunostinte, insa realizez ca timpul ramas nu este de ajuns pentru redactarea unei licente satisfacatoare.
            Astfel, nu am dorit o pozitie careia nu ma pot dedica.
          </TypographyWithTheme>
        </Box>
      </Box>
    </>
  )
}

export default Page2

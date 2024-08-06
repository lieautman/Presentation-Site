import { useState } from "react"
import MenuClosedComponent from "./MenuClosedComponent"
import MenuOpenComponent from "./MenuOpenComponent"
import { AnimatePresence } from "framer-motion"

function NavigationDesktopComponent({ setPageNo }) {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <>
      <AnimatePresence>{menuOpen && <MenuOpenComponent setMenuOpen={setMenuOpen} />}</AnimatePresence>
      <MenuClosedComponent setPageNo={setPageNo} setMenuOpen={setMenuOpen} />
    </>
  )
}

export default NavigationDesktopComponent

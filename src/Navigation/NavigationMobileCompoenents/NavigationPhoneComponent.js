import { useState } from "react"
import MenuClosedComponent from "./MenuClosedComponent"
import MenuOpenComponent from "./MenuOpenComponent"
import { AnimatePresence } from "framer-motion"

function NavigationPhoneComponent() {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <>
      <AnimatePresence>{menuOpen && <MenuOpenComponent setMenuOpen={setMenuOpen} />}</AnimatePresence>

      <MenuClosedComponent setMenuOpen={setMenuOpen} />
    </>
  )
}

export default NavigationPhoneComponent
import { useState } from "react";
import MenuClosedComponent from "./MenuClosedComponent";
import MenuOpenComponent from "./MenuOpenComponent";

function NavigationPhoneComponent({ setPageNo }) {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      {menuOpen ? (
        <MenuOpenComponent setPageNo={setPageNo} setMenuOpen={setMenuOpen} />
      ) : (
        <></>
      )}
      <MenuClosedComponent setMenuOpen={setMenuOpen} />;
    </>
  );
}

export default NavigationPhoneComponent;

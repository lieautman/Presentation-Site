import React, { useState } from "react";
import NavigationContainer from "./Navigation/NavigationContainer";
import Pages from "./Pages";
import { PageContext } from "./Navigation/State/PageContext";
import { ThemeContext } from "./Resources/Theme/ThemeContext";
import ScrollbarWrapper from "./Resources/StyledComponents/ScrollbarWrapper";
import { darkTheme } from "./Resources/Theme/Theme";
import useMediaQuery from "@mui/material/useMediaQuery";

function App() {
  const [pageNo, setPageNo] = useState(1);
  const [currentTheme, setCurrentTheme] = useState(darkTheme);
  const matches = useMediaQuery("(min-width:600px)");

  return (
    <ScrollbarWrapper display={matches}>
      <PageContext.Provider value={{ pageNo, setPageNo }}>
        <ThemeContext.Provider value={{ currentTheme, setCurrentTheme }}>
          <NavigationContainer />
          <Pages pageNo={pageNo} />
        </ThemeContext.Provider>
      </PageContext.Provider>
    </ScrollbarWrapper>
  );
}

export default App;

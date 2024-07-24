import React, { useState } from 'react';
import NavigationContainer from './Navigation/NavigationContainer';
import Pages from './Pages';
import { PageContext } from './Navigation/State/PageContext';
import { ThemeContext } from './Resources/Theme/ThemeContext';
import ScrollbarWrapper from './Resources/StyledComponents/ScrollbarWrapper';
import { darkTheme } from './Resources/Theme/Theme';
import useMediaQuery from '@mui/material/useMediaQuery';

function App() {
    const [pageNo, setPageNo] = useState(1);
    const [currentTheme, setCurrentTheme] = useState(darkTheme);
    const [menuOpen, setMenuOpen] = useState(false);
    const matches = useMediaQuery('(min-width:600px)');

    return matches ? (
        <ScrollbarWrapper>
            <PageContext.Provider value={{ pageNo, setPageNo }}>
                <ThemeContext.Provider value={{ currentTheme, setCurrentTheme }}>
                    <NavigationContainer menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
                    {!matches && menuOpen ? <></> : <Pages pageNo={pageNo} />}
                </ThemeContext.Provider>
            </PageContext.Provider>
        </ScrollbarWrapper>
    ) : (
        <PageContext.Provider value={{ pageNo, setPageNo }}>
            <ThemeContext.Provider value={{ currentTheme, setCurrentTheme }}>
                <NavigationContainer menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
                {!matches && menuOpen ? <></> : <Pages pageNo={pageNo} />}
            </ThemeContext.Provider>
        </PageContext.Provider>)
}

export default App;
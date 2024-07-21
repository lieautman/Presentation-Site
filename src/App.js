import React, { useState } from 'react';
import NavigationContainer from './Navigation/NavigationContainer';
import Pages from './Pages';
import { PageContext } from './Navigation/State/PageContext';
import { ThemeContext } from './Resources/Theme/ThemeContext';
import { darkTheme } from './Resources/Theme/Theme';

function App() {
    const [pageNo, setPageNo] = useState(1);
    const [currentTheme, setCurrentTheme] = useState(darkTheme);
    return (
        <PageContext.Provider value={{ pageNo, setPageNo }}>
            <ThemeContext.Provider value={{ currentTheme, setCurrentTheme }}>
                <NavigationContainer />
                <Pages pageNo={pageNo} />
            </ThemeContext.Provider>
        </PageContext.Provider>
    )
}

export default App;
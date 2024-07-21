import { createContext } from "react";
import { darkTheme } from "./Theme";

export const ThemeContext = createContext({
    currentTheme: darkTheme,
    setCurrentTheme: (theme) =>{}
});
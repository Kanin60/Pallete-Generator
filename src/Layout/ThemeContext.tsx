import { ReactElement, createContext, useContext, useState } from "react";

interface ThemeContextI {
    myPaletteTheme: string[];
    randomPaletteTheme: string[];
    setMyPaletteTheme(palette: string[]): void;
    setRandomPaletteTheme(palette: string[]): void;
}

const ThemeContext = createContext<ThemeContextI>({
    myPaletteTheme: [],
    randomPaletteTheme: [],
    setMyPaletteTheme: ()=> {},
    setRandomPaletteTheme: () => {}
})
export const useTheme = () => useContext(ThemeContext)

interface ThemeProviderI {
    children: ReactElement | ReactElement[]
}


export const ThemeProvider = ({children}: ThemeProviderI) => {
    const [myPaletteTheme, setMyPaletteTheme] = useState<string[]>([])
    const [randomPaletteTheme, setRandomPaletteTheme] = useState<string[]>([])

    return (
        <ThemeContext.Provider value={{myPaletteTheme, randomPaletteTheme, setMyPaletteTheme, setRandomPaletteTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}
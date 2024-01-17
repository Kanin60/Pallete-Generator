import { useEffect } from 'react';
import { useTheme } from '../Layout/ThemeContext';
import { Footer } from "../components/Footer/Footer"
import { Navigation } from "../components/Navigation/Navigation"
import { Outlet } from 'react-router-dom'


export const MainLayout = () => {
    const {randomPaletteTheme, myPaletteTheme} = useTheme()

    useEffect(() => {
        const randomPaletteGradient = `linear-gradient(to right, ${randomPaletteTheme.join(', ')})`
        const myPaletteGradient = `linear-gradient(to right, ${myPaletteTheme.join(', ')})`

        document.documentElement.style.setProperty('--randomPaletteGradient', randomPaletteGradient)
        document.documentElement.style.setProperty('--myPaletteGradient', myPaletteGradient)
    }, [randomPaletteTheme, myPaletteTheme])
    
    return(
        < >
            <Navigation />
            <Outlet />
            <Footer /> 
        </>
    )
}
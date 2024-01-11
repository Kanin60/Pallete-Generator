import { Footer } from "../components/Footer/Footer"
import { Navigation } from "../components/Navigation/Navigation"
import { Outlet } from 'react-router-dom'


export const MainLayout = () => {
    

    return(
        < >
            <Navigation />
            <Outlet />
            <Footer /> 
        </>
    )
}
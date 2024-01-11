import { NavLink } from 'react-router-dom'
import style from './Navigation.module.scss'

export const Navigation = () => {

    return(
        <nav>
                <h1 className={style.headline}>Colorizer Pallette Generator</h1>
            <ul>
                
                <NavLink to="/">Random Pallette</NavLink>
                <NavLink to="/mypallettes">My Pallettes</NavLink>
            </ul>
        </nav>
    )
}
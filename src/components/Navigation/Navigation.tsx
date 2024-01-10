import { NavLink } from 'react-router-dom'

export const Navigation = () => {

    return(
        <nav>
                
            <ul>
                
                <NavLink to="/">Random Pallette</NavLink>
                <NavLink to="/mypallettes">My Pallettes</NavLink>
            </ul>
        </nav>
    )
}
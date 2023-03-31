import { NavLink } from "react-router-dom"
import pokeball from "../images/pokeball.png"

export default function NavBar() {

    return (
        <nav>
            <NavLink to='/' ><img src={pokeball} alt='pokeball' className="pokeball" /></NavLink>
            <NavLink to='/' >Home</NavLink>
            <NavLink to='/berries' >Berries</NavLink>
            <NavLink to='/pokemon' >Pokemon</NavLink>
            <NavLink to='/locations' >Locations</NavLink>
        </nav>
    )
}
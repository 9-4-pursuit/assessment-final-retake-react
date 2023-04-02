import { NavLink } from "react-router-dom"
import PokeLogo from "../pokelogo.png"


export default function Header() {
    return (
        <div>

            <nav>
                <ul className="header">
                    <NavLink to="/"><li><img height='50px' width="50px" src={PokeLogo} alt="home"/></li> </NavLink>

                    <NavLink to='/berries'>
                        <li>Berries</li>
                    </NavLink>

                    <NavLink to='/pokemon'>
                        <li>Pokemon</li>
                    </NavLink>

                    <NavLink to='/locations'>
                        <li>Locations</li>
                    </NavLink>

                    


                </ul>
            </nav>
            
        </div>
    )
}
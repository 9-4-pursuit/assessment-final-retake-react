import React from 'react';
import { NavLink } from 'react-router-dom';
import Welcome from './Welcome';



function NavBar() {
    return(
    <nav>
      
    <ul>
      
    <NavLink to= '/'>
      <img src = '' alt = "pokemon logo"/>
      </NavLink>
       <NavLink to = '/pokemon'><li>Pokemon</li> </NavLink>.
        <NavLink to= '/locations'><li>Locations</li></NavLink> 
        <NavLink to= '/berries'>  <li>Berries</li></NavLink>
        
      
    </ul>
    

      
        </nav>
  )
}

export default NavBar
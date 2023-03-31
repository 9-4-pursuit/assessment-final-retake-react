import { NavLink } from 'react-router-dom';
import React from 'react';

function Nav() {

    return (
        <header>
            <nav>
                <NavLink to='/'>
                <li >Home</li>
                </NavLink>

                <NavLink to='/pokemon'>
                <li href='/pokemon'>Pokemon</li>
                </NavLink>

                <NavLink to='/locations'>
                <li href='/locations'>Locations</li>
                </NavLink>

                <NavLink to='/berries'>
                <li href='/berries'>Berries</li>
                </NavLink>
            </nav>
            
        </header>
    )
}

export default Nav
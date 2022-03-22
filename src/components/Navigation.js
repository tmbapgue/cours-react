import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <div className='navigation'>
            <ul>
            <NavLink exact to ="/" className={(nav) => (nav.isActive? "nav-active" : "")}> 
                <li>Home </li>  
            </NavLink>
            <NavLink exact to="/About" className={(nav) => (nav.isActive? "nav-active" : "")}> 
            <li>About</li>
            </NavLink>
            </ul>
            
        </div>
    );
};

export default Navigation;
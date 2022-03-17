import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <div className='Navigation'>
            <NavLink exact to="/" activeClassName="nav-active"> 
                Home   
            </NavLink><br/>
            <NavLink exact to="/About" activeClassName="nav-active"> 
                About
            </NavLink>
            
        </div>
    );
};

export default Navigation;
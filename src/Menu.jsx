import React from 'react';
import { NavLink  } from 'react-router-dom';


const Menu = () => {
    return (
        <>
            <div className = "menu_style">
            <NavLink exact activeClassName = 'active_class' to='/' >About</NavLink>
            <NavLink exact activeClassName = 'active_class' to='/skills' >Skills</NavLink>
            <NavLink exact activeClassName = 'active_class' to='/projects' >Projects</NavLink>
            <NavLink exact activeClassName = 'active_class' to='/contact' >Contact</NavLink>
            </div>
        </>

    );
 };


 export default Menu;

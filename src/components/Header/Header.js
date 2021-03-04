import React, {useState} from 'react';
import './Header.css';
import logo from '../../assets/logo.png'
import ResponsiveDrawer from '../ResponsiveDrawer/ResponsiveDrawer';
function Header () {
    return (
        <div className="header">
            <ResponsiveDrawer/>
        </div>
        
    )
}

export default Header;

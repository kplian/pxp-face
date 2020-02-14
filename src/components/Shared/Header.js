import React from 'react';
import CartIcon from '../Cart/CartIcon';
import { NavLink } from 'react-router-dom';
const Header = () => {
    return (
        <div className="d-flex justify-content-between align-content-center">
            <h1>Kplian</h1>
            <NavLink to="/" className="nav-item nav-link">Clientes</NavLink>
            <CartIcon/>
        </div>
    )
}

export default Header

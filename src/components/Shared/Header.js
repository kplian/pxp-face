import React from 'react';
import CartIcon from '../Cart/CartIcon';
import { NavLink } from 'react-router-dom';
import { Nav, NavItem } from 'reactstrap';
import Logout from '../../pages/Auth/Logout';

const Header = () => {
    return (
        <div>
            <Nav pills className="d-flex justify-content-between align-content-center">
                <h1>Kplian</h1>
                <NavItem>
                    <NavLink to="/" className="nav-item nav-link">Clientes</NavLink>
                </NavItem>
                <Logout/>
                <CartIcon/>
            </Nav>            
        </div>
    )
}

export default Header

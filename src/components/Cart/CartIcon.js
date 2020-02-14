import React, { useContext } from 'react';
import { Badge } from 'reactstrap';
import Icon from 'material-icons-react';
import { Link } from 'react-router-dom';
import { CartContext } from './CartContext';

const CartIcon = () => {
    const { countItems } = useContext(CartContext);
    return (
        <div>
            <Link className="btn btn-primary" to="/cart">
                <Badge color="secondary">{countItems}</Badge>
                <Icon icon="shopping_cart" color="white"/>
            </Link>
        </div>
    )
}

export default CartIcon;

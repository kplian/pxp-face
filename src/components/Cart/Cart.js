import React, { useEffect, useState, useContext } from 'react';
import { Table, Button } from 'reactstrap';
import { CartContext } from './CartContext';


const Cart = () => {
    const { items } = useContext(CartContext);
    return (
        <div>
            <h1 className="text-primary">Carrito de Compras</h1>
            <Table>
            <thead>
                <tr className="bg-primary text-white">
                    <th>#</th>
                    <th>Product</th>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
                </thead>
            <tbody>
                { items.length && items.map( (item, index) => (
                    <tr key={ index + 1}>
                        <th scope="row">{ index + 1 }</th>
                        <td><img width="100" src={item.images[0]}/></td>
                        <td>{ item.name }</td>
                        <td>{ item.unitCost }</td>
                    </tr>
                ))}
                <tr>
                    <th colSpan="3" className="text-right">TOTAL</th>
                    <td>{ items.length && items.map(item => item.unitCost).reduce((value, total )=> value + total )}</td>
                </tr>
            </tbody>
        </Table>
        <Button color="success" onClick={ () => alert('Compra realizada')}>Comprar</Button>
        </div>
    )
};

export default Cart;

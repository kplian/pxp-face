import React, { useState, useEffect, useContext } from 'react';
import ProductsBox from './ProductsBox';
import { ProductsContext } from './ProductsContext';


import { Button, UncontrolledTooltip, Input } from 'reactstrap';
import Icon from 'material-icons-react';

import * as _ from 'lodash';

import { CartContext } from '../Cart/CartContext';


const ProductsSelect = props => {
    console.log( props )
    const customer = props.location.customer ? props.location.customer : undefined;

    const [hasError, setErrors] = useState(false);
    const [products, setProducts] = useState([]);
    const [selectProducts, setSelectProducts] = useState([]);
    const [itemsSelectedAdd, setitemsSelectedAdd] = useState([]);
    const [itemsSelectedDel, setitemsSelectedDel] = useState([]);
    const { countItems, setCountItems } = useContext(CartContext);

    async function fetchProducts() {
        const res = await fetch('../data/products.json');
        res.json()
            .then(resp =>  setProducts( resp ))
            .catch(err => setErrors(err) );          
    };

    const handleAdd = () => {
        setSelectProducts([ ...selectProducts, ...itemsSelectedAdd ]);
        
        setProducts(products.filter( item => {
            return !!!_.find(itemsSelectedAdd, { id: item.id });
        }));
        setitemsSelectedAdd([]);
    };

    const handleRemove = () => {
        setProducts([ ...products, ...itemsSelectedDel ]);
        setSelectProducts(selectProducts.filter( item => {
            return !!!_.find(itemsSelectedDel, { id: item.id });
        }));
        setitemsSelectedDel([]);
    }

    const handleAddAll = () => {
        const items =  [ ...products, ...selectProducts ];
        setSelectProducts( items );
        setProducts( [] );
    };

    const handleRemoveAll = () => {
        const items =  [ ...products, ...selectProducts ];
        setSelectProducts( [] );
        setProducts( items );
    };

    const handleItemSelect = ( product, type ) => {
        if( type ==='add' ) {
            setitemsSelectedAdd( [...itemsSelectedAdd, product] );
        } else if ( type === 'remove' ) {
            setitemsSelectedDel( [...itemsSelectedDel, product] );
        }
        console.log(itemsSelectedAdd);
    };

    const initialState = {
        itemsSelectedAdd,
        itemsSelectedDel,
        handleItemSelect
    };

    useEffect( () => {
        
        if( products.length <= 0 && selectProducts.length <=0) {
            fetchProducts();
        }
        console.log(products);
    });

    const handleConfirm = () => {
        setCountItems(selectProducts.length);
    };

    return (
        <div>
            <CartContext.Consumer>
            { cartContext => (
                <ProductsContext.Provider value={ initialState }>
                    <div className="row d-flex justify-content-between align-content-center">
                        <h1 className="text-primary">Selección de Productos</h1> 
                        <b className="text-danger">Desde:</b>
                        <input type="date" value={ new Date() }/>
                        <b className="text-danger">Hasta:</b>
                        <input type="date"/>
                        <span className="d-flex align-content-center">
                            <h4 className="pt-5">{ customer && customer.name }</h4>
                            <img src={  customer && 'https://randomuser.me/api/portraits/' + customer.photo } width="60" className="img-thumbnail"/>
                        </span>
                    </div>                    
                    <div className="row"> 
                        <div className="col-12 col-sm-12 col-md-6">
                            <ProductsBox products={ products } type="add"/>
                        </div>
                        <div className="col-12 col-sm-12 col-md-1 col-lg-1 col-xl-1 d-flex flex-column justify-content-center align-items-center">                    
                                <Button id="btmR" color="primary" className="m-1 shadow" onClick={ handleAdd }>
                                    <Icon size="small" color="white" icon="keyboard_arrow_right"/>
                                </Button>
                                <Button id="btmRs" color="primary" className="m-1 shadow" onClick={ handleAddAll }>
                                    <Icon size="small" color="white" icon="fast_forward"/>
                                </Button>
                                <Button id="btmL" color="primary" className="m-1 shadow"  onClick={ handleRemove }>
                                    <Icon size="small" color="white" icon="keyboard_arrow_left"/>
                                </Button>
                                <Button id="btmLs" color="primary" className="m-1 shadow" onClick={ handleRemoveAll }>
                                    <Icon size="small" color="white" icon="fast_rewind"/>
                                </Button>
                                <Button id="oksale" color="success" className="m-1 shadow" onClick={ () => cartContext.setItemsValue(selectProducts) }>
                                    <Icon size="small" color="white" icon="add_shopping_cart"/>
                                </Button>
                        </div>
                        <div className="col">
                            <ProductsBox products={ selectProducts } type="remove"/>
                        </div>
                    </div>
                    <UncontrolledTooltip placement="top" target="btmR">Agregar</UncontrolledTooltip>
                    <UncontrolledTooltip placement="top" target="btmRs">Agregar Todo</UncontrolledTooltip>
                    <UncontrolledTooltip placement="top" target="btmL">Eliminar</UncontrolledTooltip>
                    <UncontrolledTooltip placement="top" target="btmLs">Eliminar Todo</UncontrolledTooltip>
                    <UncontrolledTooltip placement="top" target="oksale">Confirmar</UncontrolledTooltip>
                </ProductsContext.Provider>
            )}           

            </CartContext.Consumer>
            
        </div>
    );
};

export default ProductsSelect;

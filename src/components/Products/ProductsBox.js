import React from 'react';
import ProductItem from './ProductItem';


const ProductsBox = ({ products = [], type = 'add' }) => {
    return (
        <div className="bg-gray grid-content border shadow">           
            <div className="d-flex flex-wrap justify-content-start align-content-center p-2">
                { products.length > 0 && products.map( product => (
                    <ProductItem key={ product.id } product={ product } type={ type }/>
                    )) 
                }           
            </div>
        </div>
    )
}

export default ProductsBox;

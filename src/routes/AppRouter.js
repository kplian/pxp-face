import React, {useState} from 'react';
import { BrowserRouter, Route, Link, Switch, NavLink } from "react-router-dom";


import Footer from '../components/Shared/Footer';
import Header from '../components/Shared/Header';

import CustomersFilters from '../components/Customers/CustomersFilters';
import ProductsSelect from '../components/Products/ProductsSelect';
import Cart from '../components/Cart/Cart';
import NotFoundPage from '../components/NotFoundPage';
import { CartContext } from '../components/Cart/CartContext';

const AppRouter = () => {
    const [countItems, setCountItems] = useState(0);
    const [items, setItems] = useState(0);

    const setValues = (products) => {        
        setCountItems(products.length);
        setItems(products);
        alert('Productos agregados');
    };

    return (
        <BrowserRouter>
            <CartContext.Provider value={{ items, countItems, setItemsValue: (products) => setValues(products) }}>
                <div className="h-screen">
                    <header className="fixed-top bg-dark text-light p-3">
                        <Header/>
                    </header>
                    <main className="container-fluid container-content">
                        <Switch>
                            <Route path="/" component={ CustomersFilters } exact={ true }/>
                            <Route path="/customers" component={ CustomersFilters }/>
                            <Route path="/sales/:id" component={ ProductsSelect }/>
                            <Route path="/cart" component={ Cart }/>
                            <Route component={ NotFoundPage } />
                        </Switch>
                    </main>
                    <footer className="fixed-bottom p-4">
                        <Footer/>
                    </footer>
                </div>
            </CartContext.Provider>
        </BrowserRouter>
    );
};

export default AppRouter;
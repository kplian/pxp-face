import React, {useState, useMemo, useContext, useEffect } from 'react';
import { BrowserRouter, Route, Link, Switch, NavLink, Redirect } from "react-router-dom";

import Footer from '../components/Shared/Footer';
import Header from '../components/Shared/Header';

import CustomersFilters from '../components/Customers/CustomersFilters';
import ProductsSelect from '../components/Products/ProductsSelect';
import Cart from '../components/Cart/Cart';
import NotFoundPage from '../components/NotFoundPage';
import { CartContext } from '../components/Cart/CartContext';
import { UserContext } from '../pages/Auth/UserContext';
import { Login } from '../pages/Auth/Login';

function PrivateRoute({ children, ...rest }) {
    const {userContext} = useContext(UserContext);

    return (
      <Route
        {...rest}
        render={({ location }) =>
           userContext ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
          )
        }
      />
    );
};

function Routes() {
    return (
        <Switch>
            <PrivateRoute path="/" exact={ true }>
                <CustomersFilters></CustomersFilters>
            </PrivateRoute>
            <PrivateRoute path="/customers">
                <CustomersFilters></CustomersFilters>
            </PrivateRoute>
            <PrivateRoute path="/sales/:id">
                <ProductsSelect></ProductsSelect>
            </PrivateRoute>
            <PrivateRoute path="/cart">
                <Cart></Cart>
            </PrivateRoute>
            <Route  path="/login" component={Login}/>
            <Route component={ NotFoundPage } />
        </Switch>
    );
};

const AppRouter = () => {
    const [userContext, setUserContext] = useState(null);
    const value = useMemo(()=> ({userContext, setUserContext}), [userContext, setUserContext])

    const [countItems, setCountItems] = useState(0);
    const [items, setItems] = useState(0);

    const setValues = (products) => {        
        setCountItems(products.length);
        setItems(products);
        alert('Productos agregados');
    };

    useEffect(() => {
        let auth = JSON.parse(localStorage.getItem('auth'));
        if( auth ) {
            setUserContext(auth);
        }
    }, []); 
    
    return (
        <BrowserRouter>
            <UserContext.Provider value={value}>
                <CartContext.Provider value={{ items, countItems, setItemsValue: (products) => setValues(products) }}>
                { userContext !== null ? (
                    <div className="h-screen">
                            <header className="fixed-top bg-dark text-light p-3">
                                <Header/>
                            </header>
                            <main className="container-fluid container-content">
                                <Routes/>
                            </main>
                            <footer className="fixed-bottom p-4">
                                <Footer/>
                            </footer>
                    </div>
                ) : (
                    <Routes/>
                )}                   
                </CartContext.Provider>
            </UserContext.Provider>
        </BrowserRouter>
    );
};

export default AppRouter;
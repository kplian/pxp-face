import React from 'react';
import logo from './logo.svg';

import Footer from './components/Shared/Footer';
import Header from './components/Shared/Header';

import CustomersFilters from './components/Customers/CustomersFilters';
import ProductsSelect from './components/Products/ProductsSelect';
import AppRouter from './routes/AppRouter';


function App() {
  return (
      <div>
        <AppRouter/>
      </div>
  );
}

export default App;

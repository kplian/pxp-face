import React, { useState, useEffect, useContext, useRef }  from 'react';
import CustomersList from './CustomersList';
import SearchFilter from '../Filters/SearchFilter';
import { CustomersContext } from '../CustomersContext';

const CustomersFilters = () => {
    const [hasError, setErrors] = useState(false);
    const [customers, setCustomers] = useState([]);
    const [customersFilter, setCustomersFilter] = useState([]);
    const [textFilter, setTextFilter ] = useState('');

    async function fetchData() {
        const res = await fetch('./data/customers.json');
        res.json()
            .then(res => {
                setCustomers(res);
                setCustomersFilter(res);
            })
            .catch(err => setErrors(err));
    }

    useEffect(() => {
        if ( customers.length === 0) {
            fetchData();
        }
        filterData();
        
    }, [ textFilter ]);

    const changeTextFilter = ( e ) => {
        setTextFilter( e.target.value);
    };

    const filterData = () => {
        console.log(customers, textFilter, customersFilter);
        
        const filter = customers.filter( customer => customer.name.toLowerCase().includes(textFilter.toLowerCase()));
        setCustomersFilter( filter );

    };

    const initialState = {
        customers,
        textFilter,
        changeTextFilter
    };

    return (
        <CustomersContext.Provider value={ initialState }>
            <div>
                
                <h1 className="text-primary">Listado de Clientes</h1>

                { //<span className="bg-white">Has error: {JSON.stringify(hasError)}</span>
                } 
                <SearchFilter/>
                <CustomersList customers={ customersFilter }/>
            </div>
        </CustomersContext.Provider>         
    )
};

export default CustomersFilters

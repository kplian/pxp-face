import React from "react";
import CustomerListItem from './CustomerListItem';

const CustomersList = ({ customers }) => {   
    return (
        <div className="bg-gray grid-content border shadow">           
            <div className="d-flex flex-wrap justify-content-start align-content-center p-2">
                { customers.length && customers.map( customer => (
                    <CustomerListItem key={ customer.id } customer={ customer }/>
                    )) 
                }           
            </div>
        </div>
    );
};

export default CustomersList;
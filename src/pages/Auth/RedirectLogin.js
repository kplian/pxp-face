import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import { UserContext } from './UserContext';


const RedirectLogin = () => { 
    const {userContext} = useContext(UserContext);
    
    return (
        <div>
            { userContext === null && <Redirect to="/login" /> }
        </div>
    );
};

export default RedirectLogin;
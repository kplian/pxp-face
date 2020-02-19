import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from 'reactstrap';
import { UserContext } from './UserContext';

const AuthButton = () => {
    let history = useHistory();
    const {userContext, setUserContext} = useContext(UserContext);
  
    return (
        <div>
            <Button color="danger"
            onClick={() => {
                setUserContext(null);
                localStorage.removeItem('auth');
                history.push("/login");
            }}
            >
                Sign out
            </Button>
        </div>
    );        
};

export default AuthButton;
import React, {useContext, useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import {clientRestPxp} from "clientpxpjs/js/clientRestPxp";
import {md5} from "clientpxpjs/js/md5";
import { UserContext } from './UserContext';
import { Redirect } from "react-router-dom";
import './Login.scss';

export const Login = ( props ) => {
    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    const [user, setUser] = useState('')
    const [password, setPassword] = useState('')
    const {userContext, setUserContext} = useContext(UserContext);
    useEffect(() => {
        if( userContext !== null ) {
            history.replace(from);
        }
    }, [userContext]);

    const handleUser = e => {
        setUser(e.target.value)
    };
    const handlePassword = e => {
        setPassword(e.target.value)
    };
    const handleEnviar = e => {
        e.preventDefault()

        console.log(` user ${user} password ${password}`)

        let client = new clientRestPxp('admin.disydes.com', 'DOMAIN');
        // let client = new clientRestPxp('192.168.0.110/kerp', 'DOMAIN');
        client.setCredentialsPxp(user, md5(password));
        client.genHeaders();

        client.verifyUser(function (resp) {
            if(resp.success) {
                localStorage.setItem('auth', JSON.stringify({...resp, client, username:user}));
                setUserContext({...resp, client, username:user});
                history.replace(from);
            }
        });
    };

    return (
        <div className="login-content">
            <div className="modal-dialog text-center">
                <div className="col-sm-8 main-section">
                    <div className="modal-content">
                        <div className="col-12 user-img">
                            <img width="150" src={ window.location.origin + '/img/customer.svg' }/>
                        </div>
                        <form className="col-12 from-login">
                            <div className="form-group">
                                <input type="text" 
                                    className="form-control" 
                                    placeholder="Ingrese Usuario"
                                    onChange={handleUser}></input>
                            </div>
                            <div className="form-group">
                                <input type="password" 
                                    className="form-control" 
                                    placeholder="Ingrese Contraseña"
                                    onChange={handlePassword}
                                    ></input>
                            </div>
                            <button type="submit" className="btn login-btn" onClick={handleEnviar}><i className="fas fa-sing-in-alt"></i>Login</button>
                        </form>
                        <div className="col-12 forgot">
                            <a href="">Forgot Password?</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

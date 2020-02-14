import React from 'react';
import './Login.scss';

export const Login = () => {
    return (
        <div className="login-content">
            <div className="modal-dialog text-center">
                <div className="col-sm-8 main-section">
                    <div className="modal-content">
                        <div className="col-12 user-img">
                            <img width="150" src={ window.location.origin + '/img/customer.svg' }/>
                        </div>
                        <form className="col-12">
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Ingrese Usuario"></input>
                            </div>
                            <div className="form-group">
                                <input type="password" className="form-control" placeholder="Ingrese Contraseña"></input>
                            </div>
                            <button type="submit" className="btn"><i className="fas fa-sing-in-alt"></i>Login</button>
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

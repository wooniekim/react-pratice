import React from 'react';
import Login from './Login';
import Register from './Register';
import {
    BrowserRouter,
    Route,
  } from 'react-router-dom';

const Auth = () => {
    return (
        <>
            <BrowserRouter>
                <Route path='/login' component={ Login } />
                <Route path='/register' component={ Register } />
            </BrowserRouter>
        </>
    );
};

export default Auth;
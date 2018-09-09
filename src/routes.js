import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import Login from './components/login';
import LoginLayout from './layouts/login-layout'

export default () => {
 return (
   <BrowserRouter>
    <Switch>
        <LoginLayout path='/' component={Login}/>
     </Switch>
   </BrowserRouter>
 )
}
import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Login from './components/login';
import Home from './components/home'
import LoginLayout from './layouts/login-layout'
import MainLayout from './layouts/main-layout'

export default () => {
 return (
   <BrowserRouter>
    <Switch>
        <LoginLayout exact path='/' component={Login}/>
        <MainLayout  path='/home' component={Home}/>
     </Switch>
   </BrowserRouter>
 )
}
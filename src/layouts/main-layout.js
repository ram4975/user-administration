import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import Navigation from './navigation'
import Footer from './footer'

const MainLayout = ({component: Component, ...rest}) => {
  return (
    <Route {...rest} render={matchProps => (
      <div>
        <Navigation />
        <Component {...matchProps} />
        <Footer />
      </div>
    )} />
  )
};


export default MainLayout;
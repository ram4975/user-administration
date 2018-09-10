import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import Navigation from './navigation'
import Footer from './footer'

const MainLayout = ({component: Component, ...rest}) => {
  return (
    <Route {...rest} render={matchProps => (
      <div>
        <Navigation />
        <main className="text-center my-5">
          <Component {...matchProps} />
        </main>
      </div>
    )} />
  )
};


export default MainLayout;
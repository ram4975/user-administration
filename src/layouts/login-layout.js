import React from 'react';
import {Route} from 'react-router-dom';
import Footer from './footer'
import Navigation from './navigation'

const LoginLayout = ({component: Component, ...rest}) => {
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

export default LoginLayout;
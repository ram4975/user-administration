import React from 'react';
import {Route} from 'react-router-dom';
import Footer from './footer'

const LoginLayout = ({component: Component, ...rest}) => {
  return (
    <Route {...rest} render={matchProps => (
      <div>
        <Component {...matchProps} />
        <Footer />
      </div>
    )} />
  )
};

export default LoginLayout;
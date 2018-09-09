import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import {BrowserRouter} from 'react-router-dom'
import store from './store/store'
import AppRoutes from './routes';

import 'bootstrap/dist/css/bootstrap.min.css';
import './scss/app.scss';

ReactDOM.render(
    <Provider store={store}>
        <AppRoutes />
    </Provider>
    , document.getElementById('root'));
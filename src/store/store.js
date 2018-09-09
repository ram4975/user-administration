import {createStore, combineReducers, applyMiddleware} from 'redux'
import loginReducer from '../reducers/login-reducer'
import {createLogger} from 'redux-logger'
import thunk from 'redux-thunk'
import promise from 'redux-promise-middleware'

/*var initialState = {
    login:{
        userName: '',
        passowrd: '',
        isLogginSuccess: false
    },
    userProfile: {
        firstName: '',
        lastName: '',
        eMail: '',
        phoneNumber: ''
    }
}*/

const userAdminReducer = combineReducers({
    login: loginReducer
})

const middleware = applyMiddleware(promise(),thunk, createLogger()); 
const store = createStore(userAdminReducer,middleware,
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
export default store;
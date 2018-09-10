import axios from 'axios';

export const updateLoginField = (id, value) => {
    return {
        type: 'UPDATE_LOGIN_FIELD',
        id,
        value
    }
}

export const validateUserLogin = (userName, password) => {
    let payload = {
        userName,
        password
    }
   return {
        type: 'VALIDATE_USER_LOGIN',
        payload: axios.post('http://localhost:8080/auth', payload)
    }
}
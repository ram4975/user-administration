export const updateLoginField = (id, value) => {
    return {
        type: 'UPDATE_LOGIN_FIELD',
        id,
        value
    }
}

export const validateUserLogin = () => {
    return {
        type: 'VALIDATE_USER_LOGIN'
    }
}
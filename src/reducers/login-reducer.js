const login ={
        userName: '',
        password: '',
        isLoginSuccess: false,
        alertMessage: ''
    }

export default function loginReducer(state=login , action){

    let newState = Object.assign({},state);

    switch (action.type){
        case 'UPDATE_LOGIN_FIELD':
            newState[action.id] = action.value;
            return newState;
        case 'VALIDATE_USER_LOGIN_PENDING':
            newState.isLoginSuccess = false;
            newState.alertMessage = '';
            return newState;
        case 'VALIDATE_USER_LOGIN_FULFILLED':
            newState.isLoginSuccess = true;
            newState.alertMessage = '';
            return newState;
        case 'VALIDATE_USER_LOGIN_REJECTED':
            console.log('$$$ Login failed ', action.payload.response.status);
            newState.isLoginSuccess = false;
            if(action.payload.response.status === 401){
                newState.alertMessage = 'Invalid Username or password';
            }else{
                newState.alertMessage = 'Unable to login. Please try again later'
            }
            return newState;
        default:
            return state;
    }
}
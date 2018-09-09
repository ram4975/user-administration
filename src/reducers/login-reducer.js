const defaultLoginState ={
        userName: '',
        password: '',
        isLoginSuccess: false
    }

export default function loginReducer(state=defaultLoginState , action){

    let newState = Object.assign({},state);

    switch (action.type){
        case 'UPDATE_LOGIN_FIELD':
            newState[action.id] = action.value;
            return newState;
        case 'VALIDATE_USER_LOGIN':
            newState.isLoginSuccess = true;
            return newState;
        default:
            return state;
    }
}
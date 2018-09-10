const profile ={
        firstName: '',
        lastName:'',
        email:'',
        phoneNumber: ''
}

export default function loginReducer(state=profile , action){

    let newState = Object.assign({},state);

    switch (action.type){
        case 'UPDATE_PROFILE_FIELD':
            newState[action.id] = action.value;
            return newState;
        default:
            return state;
    }
}
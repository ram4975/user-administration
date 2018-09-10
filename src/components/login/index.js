import {connect} from 'react-redux'
import LoginPage from './login-page.js'
import {updateLoginField, validateUserLogin} from '../../actions/login-actions'

// Map Redux state to component props
function mapStateToProps(state) {
    console.log('State in mapStateToProps', state);
    return state.login;
}

// Map Redux actions to component props
function mapDispatchToProps(dispatch) {
    return {
        updateField: event => dispatch((
            updateLoginField(event.target.id, event.target.value)
        )),
        validateLogin: (userName, password) => dispatch((
            validateUserLogin(userName, password)
        ))
    }
}

// Connected Component
const Login = connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginPage);

export default Login;
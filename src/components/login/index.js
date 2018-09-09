import {connect} from 'react-redux'
import LoginPage from './login-page.js'

// Map Redux state to component props
function mapStateToProps(state) {
    console.log('State in mapStateToProps', state);
    return {
    }
}

// Map Redux actions to component props
function mapDispatchToProps(dispatch) {
    /*return {
        onUpdateSearch: event => dispatch((
            updateSearchValue(event.target.value)
        )),
        listSearchResult: () => dispatch((
            listSearchResult()
        ))
    }*/
}

// Connected Component
const Login = connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginPage);

export default Login;
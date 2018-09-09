import {connect} from 'react-redux'
import HomePage from './home-page.js'

// Map Redux state to component props
function mapStateToProps(state) {
    console.log('State in mapStateToProps', state);
    return state.login;
}

// Map Redux actions to component props
function mapDispatchToProps(dispatch) {
    return {
    }
}

// Connected Component
const Home = connect(
    mapStateToProps,
    mapDispatchToProps
)(HomePage);

export default Home;
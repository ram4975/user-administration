import {connect} from 'react-redux'
import ProfilePage from './profile-page.js'
import {updateProfileField} from '../../actions/profile-actions'

// Map Redux state to component props
function mapStateToProps(state) {
    return state.profile;
}

// Map Redux actions to component props
function mapDispatchToProps(dispatch) {
   return {
        updateField: event => dispatch((
            updateProfileField(event.target.id, event.target.value)
        ))
    }
}

// Connected Component
const Profile = connect(
    mapStateToProps,
    mapDispatchToProps
)(ProfilePage);

export default Profile;
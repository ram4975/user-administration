import React, {Component} from 'react'

export default class Profile extends Component {
    render(){
        return(
            <div className="container">
            <form>
                <h2>Update Profile</h2>
                <div className="row">
                <div className="col-md-6">
                    <div className="form-group">
                    <label for="first">First Name</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        placeholder="" 
                        id="firstName" 
                        value={this.props.firstName}
                        onChange={this.props.updateField}
                    />
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="form-group">
                    <label for="last">Last Name</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        placeholder="" 
                        id="lastName"
                         value={this.props.lastName}
                        onChange={this.props.updateField} 
                    />
                    </div>
                </div>
                
                </div>
                <div className="row">
                <div className="col-md-6">
                    <div className="form-group">
                    <label for="email">eMail</label>
                    <input 
                        type="email" 
                        className="form-control" 
                        placeholder="" 
                        id="email" 
                        value={this.props.email}
                        onChange={this.props.updateField}
                    />
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="form-group">
                    <label for="phone">Phone Number</label>
                    <input 
                        type="tel" 
                        className="form-control" 
                        id="phoneNumber" 
                        placeholder="phone" 
                        value={this.props.phoneNumber}
                        onChange={this.props.updateField}
                    />
                    </div>
                </div>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
            </div>
        )
    }
}
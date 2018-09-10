import React, {Component} from 'react'
import { Link } from 'react-router-dom';

export default class Search extends Component {
    constructor(){
        super();
        this.handleLogin = this.handleLogin.bind(this);
    }
    componentWillReceiveProps(nextProps){
        if(nextProps.isLoginSuccess){
           this.props.history.push('/home');
        }
    }
    handleLogin(){
        console.log('Calling handle login ', this.props);
        this.props.validateLogin(this.props.userName, this.props.password);
    }
    render(){
        let alert = null;
        if(this.props.alertMessage !== ''){
            alert = (
                <div className="alert alert-warning">
                    {this.props.alertMessage}
                </div>
            )
        }
        return(
              <div className="login-form">
                <form>
                    <h2 className="text-center">Log in</h2>  
                    {alert}
                    <div className="form-group">
                        <input 
                            type="text" 
                            id="userName" 
                            value={this.props.userName}
                            onChange={this.props.updateField} 
                            className="form-control" 
                            placeholder="Username" 
                         />
                    </div>
                    <div className="form-group">
                        <input 
                            type="password" 
                            id="password" 
                            value={this.props.password}
                            onChange={this.props.updateField}
                            className="form-control" 
                            placeholder="Password"  
                        />
                    </div>
                    <div className="form-group">
                        <button type="button" onClick={this.handleLogin} className="btn btn-primary btn-block">Log in</button>
                    </div>
                </form>
            </div>
        )
    }
}
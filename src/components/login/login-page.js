import React, {Component} from 'react'
import { Link } from 'react-router-dom';

export default class Search extends Component {
    componentWillReceiveProps(nextProps){
        if(nextProps.isLoginSuccess){
           this.props.history.push('/home');
        }
    }
    render(){
        return(
              <div className="login-form">
                <form>
                    <h2 className="text-center">Log in</h2>       
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
                        <button type="button" onClick={this.props.validateLogin} className="btn btn-primary btn-block">Log in</button>
                    </div>
                </form>
            </div>
        )
    }
}
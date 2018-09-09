

import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Navigation extends Component {
  render() {
    return (
       <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
        <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
                <Link  className="nav-link" to={"/home"}>Home</Link>
            </li>
            <li className="nav-item">
                 <Link  className="nav-link" to={"#"}>My Profile</Link>
            </li>
            </ul>
            <form className="form-inline mt-2 mt-md-0">
                <Link className="btn btn-outline-success my-2 my-sm-0" to={"/"}>Logout</Link>
            </form>
        </div>
        </nav>
    );
  }
}
export default Navigation;
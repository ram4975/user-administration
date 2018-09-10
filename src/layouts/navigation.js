

import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { withRouter } from "react-router-dom";

class Navigation extends Component {
  render() {
    let currentPathName = this.props.history.location.pathName;
    console.log('Current location : ', currentPathName);
    return (
       <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
        <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav mr-auto">
            <li className={currentPathName === "/home" ? "nav-item active" : "nav-item"}>
                <Link  className="nav-link" to={"/home"}>Home</Link>
            </li>
            <li className={currentPathName === "/profile" ? "nav-item active" : "nav-item"}>
                 <Link  className="nav-link" to={"/profile"}>My Profile</Link>
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
export default withRouter(Navigation);
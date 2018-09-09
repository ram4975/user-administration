

import React, { Component } from 'react';
class Navigation extends Component {
  render() {
    return (
       <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
        <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
                <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">Link</a>
            </li>
            <li className="nav-item">
                <a className="nav-link disabled" href="#">Disabled</a>
            </li>
            </ul>
            <form className="form-inline mt-2 mt-md-0">
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Logout</button>
            </form>
        </div>
        </nav>
    );
  }
}
export default Navigation;
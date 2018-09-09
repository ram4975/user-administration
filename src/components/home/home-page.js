import React, {Component} from 'react'

export default class Home extends Component {
    render(){
        return(
            <h1>Welcome {this.props.userName} !!!</h1>
        )
    }
}
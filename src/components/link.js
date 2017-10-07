import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class clas extends Component {
    render() {
        return (
            <Link to={this.props.to} style={s.link}>
                {this.props.text}
            </Link>
        );
    }
}

let s = {
    link: {
        textDecoration: "none",
        color: "black",
        height: "100%"
    }
}

export default clas;

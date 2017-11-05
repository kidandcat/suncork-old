import React, { Component } from 'react'
import isMobile from '../js/Mobile'

class clas extends Component {
    render() {
        return (
                <div style={s.block}>
                    <img style={s.image} src={this.props.image} />
                    <p style={s.title}>
                        {this.props.title}
                    </p>
                    <p style={s.text}>
                        {this.props.children}
                    </p>
                </div>
        );
    }
}

let s = {
    block: {
        margin: "100px 50px 0 50px"
    },
    image: {
        height: "60px",
        marginLeft: "50%",
        transform: "translateX(-50%)"
    },
    title: {
        fontWeight: "bold",
        textAlign: "center"
    },
    text: {
        textAlign: "center"
    }
}

if(isMobile()){
    s.block = {
        margin: "100px 20px 0 20px"
    }
}

export default clas;

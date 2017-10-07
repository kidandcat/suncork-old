import React, { Component } from 'react'

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
        height: "130px",
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

export default clas;

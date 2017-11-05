import React, { Component } from 'react'
import eco1 from '../images/eco1.png'
import gota1 from '../images/gota1.png'
import pluma1 from '../images/pluma1.png'
import AboutBlock from './aboutBlock'
import isMobile from '../js/Mobile'

class clas extends Component {
    render() {
        return (
            <div style={s.container}>
                <AboutBlock image={eco1} title="Eco">
                </AboutBlock>
                <AboutBlock image={pluma1} title="Lightness">
                </AboutBlock>
                <AboutBlock image={gota1} title="Waterproof">
                </AboutBlock>
            </div>
        );
    }
}

let s = {
    container: {
        display: "flex",
        width: "30%",
        marginLeft: "50%",
        transform: "translateX(-50%)",
        justifyContent: "space-around"
    },
    block: {
        margin: "0 50px 0 50px"
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

if(isMobile()){
    s.container.flexWrap = "wrap";
}

export default clas;

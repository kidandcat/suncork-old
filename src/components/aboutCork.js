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
                <AboutBlock image={eco1} title="How Is Cork Leather Made?">
                    As it was said earlier this material is waterproof. For washing you will need soft washcloth and warm
                    water. The same can be done with a baby wipe. Also to remove such spots like ink pen and the like, you
                    can use alcohol.
                </AboutBlock>
                <AboutBlock image={gota1} title="How to clean it?">
                    The first stage in the cork production it is cork is left for 6 months to dry out. After this period, it is being
                steamed and boiled to soften them and to clean them. Then, it is shaved down about the same thickness as
                paper. To make the cork durable,the sheets are then glued to a textile. And in the finally step is a coating
                of sealant to keep it from getting dirty.
                </AboutBlock>
                <AboutBlock image={pluma1} title="Cork feature">
                    Cork leather is a textile of many advantages. This material is 100% natural. It is a eco material. Also this
                material is durable but lightweight, durable, resistant, unique, soft,waterproof, washable, elastic and
                hypoallergenic.
                </AboutBlock>
            </div>
        );
    }
}

let s = {
    container: {
        display: "flex",
        width: "80%",
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

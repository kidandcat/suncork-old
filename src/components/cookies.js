import React, { Component } from 'react'
import anime from 'animejs'
import isMobile from '../js/Mobile'

class clas extends Component {
    constructor() {
        super();
        this.scrollTime = 0;
    }

    hide() {
        let cookiesAdvice = document.querySelector('#cookiesAdvice');
        anime({
            targets: cookiesAdvice,
            translateY: [0, 100],
            duration: 15000,
            complete: () => {
                try{
                    cookiesAdvice.remove();
                }catch(e){}
            }
        });
    }

    componentDidMount() {
        let ticking = false;

        document.querySelector('body').addEventListener('scroll', (e) => {
            if (!ticking) {
                setTimeout(() => {
                    this.scrollTime = this.scrollTime + 1;
                    if (this.scrollTime >= 3) {
                        this.hide();
                    } else {
                        ticking = false;
                    }
                }, 500);
            }
            ticking = true;
        });
    }

    render() {
        if (window.localStorage.getItem('cookiesAccepted')) {
            return (null);
        }

        window.localStorage.setItem('cookiesAccepted', 'yes');

        return (
            <div style={s.container} id="cookiesAdvice">
                <span style={s.text}>
                    Este sitio utiliza cookies para mejorar los servicios que se ofrecen. Si continúa navegando, consideramos que acepta su uso.
                </span>
                <a href="" style={s.moreInfo}>Más información</a>
            </div>
        );
    }
}

let s = {
    container: {
        backgroundColor: '#e0ffd7',
        position: 'fixed',
        bottom: 0,
        width: '100%',
        height: isMobile()?'80px':'40px',
        borderTop: '1px solid black'
    },
    text: {
        display: 'inline-block',
        marginTop: '20px',
        transform: isMobile()?'translateY(-10%)':'translateY(-50%)',
        marginLeft: isMobile()?'8px':'20px',
        fontSize: isMobile()?'0.85em':'1em'
    },
    moreInfo: {
        display: 'inline-block',
        marginTop: isMobile()?'0':'20px',
        marginLeft: isMobile()?'150px':'20px',
        transform: isMobile()?'translateY(-130%)':'translateY(-50%)',
        fontSize: isMobile()?'0.85em':'1em'
    }
}

export default clas;

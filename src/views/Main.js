import React, { Component } from 'react';
import Navbar from '../elements/navbar';
import Carousel from '../elements/carousel';
import { Player, Actions } from '../Player';
import logo from '../images/logo_sin_fondo.png';

class Main extends Component {
    change = (event) => {
        Player.do(Actions.changeTitle, event.target.value)
    }

    render() {
        return (
            <div>
                <Navbar src={logo}></Navbar>
                <Carousel>
                    <img src="http://www.belaluadesign.com/wp-content/uploads/2016/10/Bolso-Restauradores-2-1.jpg" alt=""/>
                    <img src="http://www.corkup.fr/comercioe/170-thickbox_square_zen/maletin-bandolera-de-corcho-para-oficina-trabajo.jpg" alt=""/>
                    <img src="https://nobuskesmas.com/2195/bolso-cartera-de-mano-fabricada-en-corcho-con-grabados-en-laser-de-color-rojo.jpg" alt=""/>
                </Carousel>
                <input onChange={this.change} type="text"/>
            </div>
        );
    }
}

export default Main;
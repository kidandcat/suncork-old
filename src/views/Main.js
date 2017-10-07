import React, { Component } from 'react';

import Carousel from '../elements/carousel';
//import { Player, Actions } from '../Player';


class Main extends Component {
    render() {
        return (
            <div>
                <Carousel>
                    <img src="http://www.belaluadesign.com/wp-content/uploads/2016/10/Bolso-Restauradores-2-1.jpg" alt="" />
                    <img src="http://www.corkup.fr/comercioe/170-thickbox_square_zen/maletin-bandolera-de-corcho-para-oficina-trabajo.jpg" alt="" />
                    <img src="https://nobuskesmas.com/2195/bolso-cartera-de-mano-fabricada-en-corcho-con-grabados-en-laser-de-color-rojo.jpg" alt="" />
                </Carousel>
            </div>
        );
    }
}

export default Main;
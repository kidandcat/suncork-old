import React, { Component } from 'react';
import { Player, Actions } from '../js/Player';

class Main extends Component {
    change = (event) => {
        Player.do(Actions.changeTitle, event.target.value)
    }

    render() {
        return (
            <div>
                view index
                <input onChange={this.change} type="text" />
            </div>
        );
    }
}

export default Main;
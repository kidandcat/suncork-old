import {Player, Actions} from '../Player';

function Alert(){
    Player.on(Actions.alert, event => {
        alert(event.detail);
    })
}

export default Alert;
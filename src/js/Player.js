var Player = {
    do: (action, data) => {
        window.dispatchEvent((data) ? new CustomEvent(action, {
            detail: data
        }) : new CustomEvent(action));
        saveLog(action, data);
    },
    on: (action, cb) => {
        window.addEventListener(action, cb, false);
    }
}

function saveLog(action, data){
    var log = localStorage.getItem('log')
    if(!log){
        log = []
    }else{
        log = JSON.parse(log)
    }

    log.push({ action: action, data: data, timestamp: new Date().getTime() });
    localStorage.setItem("log", JSON.stringify(log));
}

export { Player };

var Actions = {
    alert: 'alert',
    changeTitle: 'changeTitle'
}

export { Actions };
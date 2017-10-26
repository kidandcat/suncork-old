var Actions = {
    changeTitle: 'changeTitle',
    cookieMessageHided: 'cookieMessageHided'
}

export { Actions };

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

function saveLog(action, data) {
    var log = sessionStorage.getItem('log')
    if (!log) {
        log = []
    } else {
        log = JSON.parse(log)
    }

    log.push({ action: action, data: data, timestamp: new Date().getTime() });
    sessionStorage.setItem("log", JSON.stringify(log));

    if (document.querySelector('#playerDebugger')) {
        window.DebuggerReload();
    }
}

export { Player };

window.dispatchAction = Player.do;

window.DebuggerReload = function () {
    window.DebuggerOff();
    window.DebuggerOn();
}

window.DebuggerOff = function () {
    if (!window.debuggerOpened) {
        return;
    }
    window.debuggerOpened = false;
    sessionStorage.removeItem('debuggerOpened');
    document.querySelector('#playerDebugger').remove();
}

window.DebuggerOn = function () {
    if (window.debuggerOpened) {
        return;
    }
    window.debuggerOpened = true;
    sessionStorage.setItem('debuggerOpened', 'yes');

    var closeButton = document.createElement('button');
    closeButton.id = "DebuggerCloseButton";
    closeButton.style.position = 'fixed';
    closeButton.style.top = '0';
    closeButton.style.backgroundColor = 'black';
    closeButton.style.color = 'white';
    closeButton.style.opacity = '0.5';
    closeButton.style.border = 'none';
    closeButton.style.padding = '10px';
    closeButton.style.cursor = 'pointer';
    closeButton.style.left = '50%';
    closeButton.style.zIndex = '999999999';
    closeButton.innerHTML = 'Close';
    closeButton.setAttribute('onclick', 'window.DebuggerOff()');
    if (!document.querySelector('#DebuggerCloseButton'))
        document.querySelector('body').appendChild(closeButton);

    var openButton = document.createElement('button');
    openButton.id = "DebuggerOpenButton";
    openButton.style.position = 'fixed';
    openButton.style.top = '0';
    openButton.style.backgroundColor = 'black';
    openButton.style.color = 'white';
    openButton.style.opacity = '0.5';
    openButton.style.border = 'none';
    openButton.style.padding = '10px';
    openButton.style.cursor = 'pointer';
    openButton.style.left = '50%';
    openButton.style.transform = 'translateX(-100%)';
    openButton.style.zIndex = '999999999';
    openButton.innerHTML = 'Open';
    openButton.setAttribute('onclick', 'window.DebuggerOn()');
    if (!document.querySelector('#DebuggerOpenButton'))
        document.querySelector('body').appendChild(openButton);

    var clearButton = document.createElement('button');
    clearButton.style.position = 'fixed';
    clearButton.style.top = '0';
    clearButton.style.backgroundColor = 'white';
    clearButton.style.color = 'black';
    clearButton.style.opacity = '0.7';
    clearButton.style.border = 'none';
    clearButton.style.cursor = 'pointer';
    clearButton.style.left = '0';
    clearButton.style.width = '24%';
    clearButton.innerHTML = 'Clear';
    clearButton.setAttribute('onclick', 'sessionStorage.setItem("log", JSON.stringify([]));window.DebuggerReload()');

    var container = document.createElement('div');
    container.appendChild(clearButton);
    container.id = 'playerDebugger';
    container.style.overflowY = 'scroll';
    container.style.position = 'fixed';
    container.style.left = '0';
    container.style.top = '0';
    container.style.height = '100%';
    container.style.opacity = '0.6';
    container.style.width = '25%';
    container.style.backgroundColor = 'black';
    container.style.zIndex = '99999999';
    document.querySelector('body').appendChild(container);
    var logs = JSON.parse(sessionStorage.getItem('log'));
    logs.reverse();
    logs.forEach(function (l) {
        var lcon = document.createElement('p');
        lcon.style.color = 'white';
        lcon.style.cursor = 'pointer';
        lcon.style.pointerEvents = 'none';
        lcon.setAttribute('onMouseOver', "this.style.color='#0F0'");
        lcon.setAttribute('onMouseOut', "this.style.color='white'");
        //lcon.setAttribute('onclick', "window.dispatchAction('" + l.action + "'" + ((l.data) ? ",'" + l.data + "'" : "") + ")");
        var MyDate = new Date(l.timestamp);
        l.timestamp = ('0' + MyDate.getHours()).slice(-2) + ':' + ('0' + (MyDate.getMinutes() + 1)).slice(-2) + ':' + ('0' + (MyDate.getSeconds() + 1)).slice(-2);
        lcon.innerHTML = JSON.stringify(l, null, 4);
        container.appendChild(lcon);
    }, this);
}

window.addEventListener('message', function (evt) {
    try {
        console.log('evt.data.source', evt.data.source);
        if (evt && evt.data && evt.data.source == 'react-devtools-content-script' && evt.data.payload && evt.data.payload.evt == 'shutdown') {
            window.DebuggerOff();
        }
    } catch (e) {
        console.error(e);
    }
    try {
        console.log('evt.data.source', evt.data.source);
        if (evt && evt.data && evt.data.source == 'react-devtools-detector') {
            //Show buttons only
            var oldDebuggerOpened = sessionStorage.getItem('debuggerOpened');
            window.DebuggerOn();
            if (oldDebuggerOpened != 'yes')
                window.DebuggerOff();
        }
    } catch (e) {
        console.error(e);
    }
});

window.addEventListener('beforeunload', function(){
    var request = new XMLHttpRequest();
    request.open('POST', '/save/session', false);  // `false` makes the request synchronous
    request.send(sessionStorage.getItem("log"));

    if (request.status === 200) {
        console.log(request.responseText);
    }
});
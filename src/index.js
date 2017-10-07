import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import alertController from './controllers/Alert';

alertController();

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

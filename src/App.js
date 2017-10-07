import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom'
import Main from './views/Main'
import Index from './views/Index'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
          <div>
            <Route exact path="/" component={Main} />
            <Route path="/index" component={Index} />
          </div>
      </BrowserRouter>
    );
  }
}

export default App;

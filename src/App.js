import React, { Component } from 'react'
import { HashRouter, Route } from 'react-router-dom'
import Main from './views/Main'
import Index from './views/Index'
import Navbar from './components/navbar'


class App extends Component {
  render() {
    return (
      <HashRouter>
          <div>
            <Navbar></Navbar>
            <Route exact path="/" component={Main} />
            <Route path="/index" component={Index} />
          </div>
      </HashRouter>
    );
  }
}

export default App;

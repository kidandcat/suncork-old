import React, { Component } from 'react';
import { Player, Actions } from '../Player';

class NavBar extends Component {
  render() {
    return (
      <div style={s.nav}>
        <img src={this.props.src} style={s.image} alt="logo" />
      </div>
    );
  }
}

let s = {
  nav: {
    height: '50px',
    padding: "3px",
    background: "white",
    borderBottom: "1px solid black"
  },
  image: {
    height: '100%'
  }
}

export default NavBar;

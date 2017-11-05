import React, { Component } from 'react'
import anime from 'animejs'

class NavBar extends Component {
  render() {
    return (
      <div>
        <button style={s.button}>MENU</button>
        <div style={s.container}>
          <a href="#/index" style={s.menuItem}></a>
        </div>
      </div>
    );
  }
}

let s = {
  button:{
    width: '70px',
    border: 'none',
    background: 'none',
    padding: '15px',
    fontSize: '1em',
    outline: 'none'
  },
  container: {

  },
  menuItem: {
    position: 'fixed',
    backgroundColor: 'lightgreen',
    color: 'red'
  }
}

export default NavBar;

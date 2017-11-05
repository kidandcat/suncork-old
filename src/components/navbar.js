import React, { Component } from 'react'
import Menu from './menu'

class NavBar extends Component {
  render() {
    return (
      <div style={s.nav}>
        <Menu></Menu>
        <a style={s.title}>SUNCORK</a>
      </div>
    );
  }
}

let s = {
  title: {
    fontSize: '2em',
    display: 'inline-block',
    marginTop: '7px',
    marginLeft: '50%',
    transform: 'translateX(-50%) translateX(-70px)'
  },
  right: {
    height: "100%",
    flex: 10,
    marginLeft: "40px",
    display: "flex"
  },
  link: {
    backgroundColor: 'lightgreen',
    color: 'red'
  },
  nav: {
    position: 'static',
    height: '50px',
    padding: "3px",
    background: "white",
    borderBottom: "1px solid black",
    display: "flex",
    zIndex: 1000
  }
}

export default NavBar;

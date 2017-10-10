import React, { Component } from 'react'
import logo from '../images/logo_sin_fondo.png'

class NavBar extends Component {
  render() {
    return (
      <div style={s.nav}>
        <img src={logo} style={s.image} alt="logo" />
        <div style={s.right}>
          {/*<a href="#/index" style={s.link}>link1</a>*/}
        </div>
      </div>
    );
  }
}

let s = {
  nav: {
    height: '50px',
    padding: "3px",
    background: "white",
    borderBottom: "1px solid black",
    display: "flex",
    justifyContent: "space-evenly"
  },
  image: {
    height: '100%',
    flex: "0 0"
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
  }
}

export default NavBar;

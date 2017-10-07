import React, { Component } from 'react'
import logo from '../images/logo_sin_fondo.png'
import Link from '../components/link'

class NavBar extends Component {
  render() {
    return (
      <div style={s.nav}>
        <img src={logo} style={s.image} alt="logo" />
        <div style={s.right}>
          <Link to="/index" style={s.link} text="link1"></Link>
          <Link to="/index" style={s.link} text="link2"></Link>
          <Link to="/index" style={s.link} text="link3"></Link>
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
  }
}

export default NavBar;

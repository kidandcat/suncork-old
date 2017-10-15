import React, { Component } from 'react'
import logo from '../images/logo_sin_fondo.png'
import anime from 'animejs'

class NavBar extends Component {
  constructor() {
    super();
    this.speed = (this.props) ? (this.props.speed || '200') : '200';
    this.state = {
      mode: 'top'
    }
  }

  componentDidMount() {
    document.querySelector('body').addEventListener('scroll', (e) => {
      if (e.target.scrollTop == 0) {
        if (this.state.mode != 'top')
          this.setState({
            mode: 'top'
          });
      } else {
        if (this.state.mode != 'fixed')
          this.setState({
            mode: 'fixed'
          });
      }
    });
  }

  setMode() {
    switch (this.state.mode) {
      case 'top':
        s.nav = {
          position: 'inherit',
          height: (this._nav) ? '30px' : '50px',
          padding: "3px",
          background: "white",
          borderBottom: "1px solid black",
          display: "flex",
          justifyContent: "space-evenly",
          zIndex: 1000
        }
        anime({
          targets: this._nav,
          duration: this.speed,
          height: [30, 50],
          easing: 'linear'
        });
        break;
      case 'fixed':
        s.nav = {
          position: 'fixed',
          top: '0',
          height: '50px',
          width: '100%',
          padding: "3px",
          background: "white",
          borderBottom: "1px solid black",
          display: "flex",
          justifyContent: "space-evenly",
          zIndex: 1000
        }
        anime({
          targets: this._nav,
          duration: this.speed,
          height: [50, 30],
          easing: 'linear'
        });
        break;
    }
  }

  render() {
    this.setMode();
    return (
      <div style={s.nav} ref={el => { this._nav = el }}>
        <img src={logo} style={s.image} alt="logo" />
        <div style={s.right}>
          {/*<a href="#/index" style={s.link}>link1</a>*/}
        </div>
      </div>
    );
  }
}

let s = {
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

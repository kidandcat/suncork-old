import React, { Component } from 'react';
import anime from 'animejs';
import isMobile from '../js/Mobile'

const SPEED = 0.3;
const DELAY = 3;
const HEIGHT = isMobile()?250:400;

class NavBar extends Component {
  constructor() {
    super();
    this.state = {
      selected: 0
    }
  }

  next() {
    if ((this.state.selected + 1) >= document.querySelectorAll('#carouselContainer img').length) {
      this.setState({
        selected: 0
      });
    } else {
      this.setState({
        selected: this.state.selected + 1
      });
    }
  }

  componentDidMount() {
    for (let img of document.querySelectorAll('#carouselContainer img')) {
      img.style.maxHeight = HEIGHT + 'px';
      img.style.marginLeft = '50%';
      img.style.transform = 'translateX(-50%)';
      img.style.opacity = 0;
      img.style.display = 'none';
    }
    this.next();
  }

  componentDidUpdate() {
    let self = this;
    let index = 0;
    let visible;
    let previous;
    for (let img of document.querySelectorAll('#carouselContainer img')) {
      // eslint-disable-next-line
      if (index != this.state.selected) {
        // eslint-disable-next-line
        if (img.style.opacity == 1 && !previous) {
          previous = img;
        }
      } else {
        visible = img;
      }
      index++;
    }
    anime({
      targets: previous,
      opacity: [1, 0],
      easing: 'linear',
      duration: SPEED * 1000,
      complete: () => {
        if (previous)
          previous.style.display = 'none';
        visible.style.display = 'block';
        anime({
          targets: visible,
          opacity: [0, 1],
          easing: 'linear',
          duration: SPEED * 1000,
          complete: () => {
            setTimeout(() => {
              self.next();
            }, DELAY * 1000);
          }
        })
      }
    })
  }

  render() {
    return (
      <div id="carouselContainer" style={s.nav}>
        {(this.props.children.map((img, i) => {
          return (<div key={i} style={s.imgContainer}>
            {img}
          </div>)
        }))}
      </div>
    );
  }
}

let s = {
  nav: {
    height: HEIGHT + "px",
    width: "90%",
    marginLeft: "2.5%",
    marginTop: "20px",
    backgroundColor: "white"
  },
  imgContainer: {
  }
}

export default NavBar;

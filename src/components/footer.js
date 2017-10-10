import React, { Component } from 'react'

class clas extends Component {
  render() {
    return (
      <div style={s.container}>
        <p style={s.copy}>
          Copyright © {new Date().getFullYear()} SUNCORK
        </p>
      </div>
    );
  }
}

let s = {
  container: {
    height: '250px',
    backgroundColor: '#acffa8',
    marginTop: '150px'
  },
  copy: {
    marginLeft: '50%',
    transform: 'translateX(-50%)',
    marginTop: '200px',
    display: 'inline-block',
    whiteSpace: 'nowrap'
  }
}

export default clas;

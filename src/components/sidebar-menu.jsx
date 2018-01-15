import React, {Component} from 'react';
import {IndexLink, Link} from 'react-router'
import {connect} from 'react-redux';


class Sidebar extends Component {
  render() {
    if (window.location.pathname != '/'){
    return (
      <div id="sidebar">

      </div>
    )
  }else{
    return (
      <div id="sidebar">
        <div id="sidebar-logo">
          <IndexLink to="/">
            <img id='brand-img' src='/img/cube.svg'/>
          </IndexLink>
        </div>

        <div className='main-links'>
          <Link to={'radio'}>radio</Link>
          <Link to={'discovery'}>discovery</Link>
          <Link to={'boards'}>boards</Link>
        </div>

        <div className='sub-links'>
          <Link to={'shop'}>shop</Link>
          <Link to={'about'}>about</Link>
          <br />
          <Link to={'contact'}>contact</Link>
        </div>
      </div>
    )
  }
}
}

export default Sidebar;

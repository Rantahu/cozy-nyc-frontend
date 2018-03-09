import React, {Component} from 'react';
import {IndexLink, Link} from 'react-router'
import {connect} from 'react-redux';


class Sidebar extends Component {
  render() {
    return (
      <div id="sidebar-menu">
        <span id="sidebar-menu-wrapper">
          <div className='main-links'>
            <Link to={'/radio'}>radio</Link>
            <Link to={'/discovery'}>discovery</Link>
            <Link to={'/boards'}>boards</Link>
          </div>

          <div className='sub-links'>
            <Link to={'/shop'}>shop</Link>
            <Link to={'/about'}>about</Link>
            <br />
            <Link to={'/contact'}>contact</Link>
          </div>
        </span>
      </div>
    )
  }
}

export default Sidebar;

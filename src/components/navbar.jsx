import React, {Component} from 'react';
import {IndexLink, Link} from 'react-router'
import {connect} from 'react-redux';

import Sidebar from './sidebar-menu';
import ProfileButton from '../components/profiles/profile-button';

class Navbar extends Component {
  render() {
    if (window.location.pathname != '/'){
    return (
      <div id="navbar">
        <div id="navbar-logo" className="dropdown">
          <span className="dropdown-btn">
            <IndexLink to="/">
              <img id='brand-img' src='/img/cube.svg'/>
            </IndexLink>
          </span>
          <div className="dropdown-content">
            <Sidebar />
          </div>
        </div>

        <div id="navbar-profile">
          <ProfileButton />
        </div>
        <div className='u-cf'></div>
      </div>
    )
  }else{
    return (
      <div className='u-cf'></div>
    )
  }
}
}

export default Navbar;

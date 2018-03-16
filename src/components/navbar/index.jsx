import React, {Component} from 'react';
import {IndexLink, Link} from 'react-router'
import {connect} from 'react-redux';

import SidebarMenu from './sidebar-menu';

import ProfileButton from '../profiles/profile-button';

class Navbar extends Component {
  constructor() {
    super();
    this.state = {
      showSidebarMenu: false,
      showProfileMenu: false
    };
  }

  openSidebarMenu(){
    this.setState({
      showSidebarMenu: true,
    });
  }

  closeNavMenu(){
    this.setState({
      showSidebarMenu: false,
    });
  }

  render() {
    if ( window.location.pathname != '/' ){
      const sidebarmenu = ( this.state.showSidebarMenu ?
          <div id="navbar-logo" className="dropdown">
            <span className="dropdown-btn" onClick={ () => this.closeNavMenu() }>
              <img id='brand-img' src='/img/cube.svg'/>
            </span>
            <SidebarMenu />
            <span className="sidebar-exit" onClick={ () => this.closeNavMenu() }> </span>
          </div>
        : <div id="navbar-logo" className="dropdown">
            <span className="dropdown-btn" onClick={ () => this.openSidebarMenu() }>
              <img id='brand-img' src='/img/cube.svg'/>
            </span>
          </div>);

      return (
        <div id="navbar">

          { sidebarmenu }

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

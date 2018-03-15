import React, {Component} from 'react';
import {IndexLink, Link} from 'react-router'
import {connect} from 'react-redux';

import SidebarMenu from './sidebar-menu';
import ProfileMenu from './profile-menu';

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
      showProfileMenu: false
    });
  }

  openProfileMenu(){
    this.setState({
      showProfileMenu:true,
      showSidebarMenu: false
    });
  }

  closeNavMenu(){
    this.setState({
      showSidebarMenu: false,
      showProfileMenu: false
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

      const profilemenu = ( this.state.showProfileMenu ?
        <div id="navbar-profile">
          <span onClick={ () => this.closeNavMenu() }>
            <ProfileButton />
          </span>
          <ProfileMenu />
          <span className="sidebar-exit" onClick={ () => this.closeNavMenu() }> </span>
        </div>
      : <div id="navbar-profile" onClick={ () => this.openProfileMenu() }>
          <ProfileButton />
        </div>);

      return (
        <div id="navbar">

          { sidebarmenu }

          { profilemenu }

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

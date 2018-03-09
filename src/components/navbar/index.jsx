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

  toggleSidebarMenu(){
    this.setState({
      showSidebarMenu:!this.state.showSidebarMenu,
      showProfileMenu: false
    });
  }

  toggleProfileMenu(){
    this.setState({
      showProfileMenu:!this.state.showProfileMenu,
      showSidebarMenu: false
    });
  }

  render() {
    if (window.location.pathname != '/'){
      const sidebarmenu = (this.state.showSidebarMenu ?
          <div id="navbar-logo" className="dropdown">
            <span className="dropdown-btn" onClick={ () => this.toggleSidebarMenu() }>
                <img id='brand-img' src='/img/cube.svg'/>
            </span>
            <SidebarMenu />
          </div>
        : <div id="navbar-logo" className="dropdown">
            <span className="dropdown-btn" onClick={ () => this.toggleSidebarMenu() }>
                <img id='brand-img' src='/img/cube.svg'/>
            </span>
          </div>);

      const profilemenu = (this.state.showProfileMenu ?
        <div id="navbar-profile" onClick={ () => this.toggleProfileMenu() }>
          <ProfileButton />
          <ProfileMenu />
        </div>
      : <div id="navbar-profile" onClick={ () => this.toggleProfileMenu() }>
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

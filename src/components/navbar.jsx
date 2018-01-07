import React, {Component} from 'react';
import {IndexLink, Link} from 'react-router'
import {connect} from 'react-redux';

// import SearchBar from './searchbar';

class Navbar extends Component {
  render() {
    if (window.location.pathname != '/'){
    return (
      <div id="navbar">
        <span className="dropdown">
          <span className="dropdown-btn">
            <IndexLink to="/">
              <img id='brand-img' src='/img/cube.svg'/>
            </IndexLink>
          </span>
          <ul className="dropdown-content">
            <li>
              <Link to={'/radio'}>radio</Link>
            </li>
            <li>
              <Link to={'/discovery'}>discovery</Link>
            </li>
            <li>
              <Link to={'/boards'}>boards</Link>
            </li>
          </ul>
        </span>
      </div>
    )
  }else{
    return (
      <div></div>
    )
  }
}
}

export default Navbar;

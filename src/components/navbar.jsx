import React, {Component} from 'react';
import {IndexLink, Link} from 'react-router'
import {connect} from 'react-redux';

// import SearchBar from './searchbar';

@connect((state) => ({isAuth: state.auth.authenticated}))
class Navbar extends Component {

  render() {
    const {isAuth} = this.props;

    return (
      <div id="navbar">
        <span className="dropdown">
          <a className="dropdown-btn">
            <IndexLink to="/">
              <img id='brand-img' src='/img/cube.svg'/>
            </IndexLink>
          </a>
          <ul className="dropdown-content">
            <li>
              <Link to={'/s'}>store</Link>
            </li>
            <li>
              <Link to={'/about'}>about</Link>
            </li>
            <li>
              <Link to={'/contact'}>contact</Link>
            </li>
          </ul>
        </span>
      </div>
    )
  }
}

export default Navbar;

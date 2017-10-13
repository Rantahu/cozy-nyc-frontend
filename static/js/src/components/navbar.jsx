import React, { Component } from 'react';
import { IndexLink, Link } from 'react-router'
import { connect } from 'react-redux';

// import SearchBar from './searchbar';

@connect((state) => ({
   isAuth: state.auth.authenticated
}))
class Navbar extends Component {

   render(){
      const { isAuth } = this.props;

      return (
      <div id="navbar">
      <span className="dropdown">
         <button className="dropdown-btn"><IndexLink to="/">[cube]</IndexLink></button>
         <ul className="dropdown-content">
           <li><Link to={'/s'}>store</Link></li>
           <li><Link to={'/about'}>about</Link></li>
           <li><Link to={'/contact'}>contact</Link></li>
         </ul>
         </span>
         <span id="navbar-auth" className="dropdown">
         <button className="dropdown-btn">
            { !isAuth && <Link to={`/login`}>login</Link> }
            { isAuth && <Link to={`/dashboard`}>account</Link> }
          </button>
         </span>
      </div>
      )
   }
}

export default Navbar;

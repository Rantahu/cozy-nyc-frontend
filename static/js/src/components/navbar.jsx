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
      <div id="navbar" className="dropdown">
         <button className="dropdown-btn"><IndexLink to="/">[cube]</IndexLink></button>
         <ul className="dropdown-content">
           <li><Link to={'/s'}>store</Link></li>
           <li><Link to={'/about'}>about</Link></li>
           <li><Link to={'/contact'}>contact</Link></li>
         </ul>
         <span>
         <Link to={`/s/sell`}>sell</Link>
            { !isAuth && <Link to={`/login`}>login</Link> }
            { isAuth && <Link to={`/dashboard`}>account</Link> }
         </span>
      </div>
      )
   }
}

export default Navbar;

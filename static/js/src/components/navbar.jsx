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
           <li><Link to={'/s'}>Store</Link></li>
           <li><Link to={'/about'}>About</Link></li>
           <li><Link to={'/contact'}>Contact</Link></li>
         </ul>
         <span>
         <Link to={`/s/sell`}>Sell</Link>|
            { !isAuth && <Link to={`/login`}>Login</Link> }
            { isAuth && <Link to={`/dashboard`}>Account</Link> }
         </span>
      </div>
      )
   }
}

export default Navbar;

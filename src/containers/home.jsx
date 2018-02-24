import React, { Component }  from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router';
import { Provider, connect } from 'react-redux';

import ProfileButton from '../components/profiles/profile-button';

/**
 * Home Page
 * Links to pages on the site.
 *
 */
class Home extends Component {
  render(){
    const { isAuth } = this.props;

    return (
      <div id="home-content">

        <div id="home-featured" className='eight columns'>
          <h1 id="brand-tag">cozy.</h1>
        </div>

        <div id='home-sidebar' className='four columns'>
          <div>
            <ProfileButton />
          </div>
          <div className='main-links'>
            <Link to={'radio'}>radio</Link>
            <Link to={'discovery'}>discovery</Link>
            <Link to={'boards'}>boards</Link>
          </div>

          <div className='sub-links'>
            <Link to={'shop'}>shop</Link>
            <Link to={'about'}>about</Link>
            <br />
            <Link to={'contact'}>contact</Link>
          </div>
        </div>

      </div>
    )
  }
}

export default Home;

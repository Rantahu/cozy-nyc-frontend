import React, { Component }  from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router';
import { Provider, connect } from 'react-redux';

import ProfileButton from '../components/profiles/profile-button';

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
          <div>
            <Link to={'radio'}>radio</Link>
            <Link to={'discovery'}>discovery</Link>
            <Link to={'boards'}>boards</Link>
          </div>

          <div>
            <Link to={'shop'}>shop</Link>
            <Link to={'about'}>about</Link>
            <Link to={'contact'}>contact</Link>
          </div>
        </div>

      </div>
    )
  }
}

export default Home;

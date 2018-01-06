import React, { Component }  from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router';
import { Provider, connect } from 'react-redux';


class Home extends Component {
  render(){
    const { isAuth } = this.props;

    return (
      <div>
        <canvas id="c"></canvas>

        <div id='home-sidebar'>

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

        <div id="home-main">
          <h1 id="brand-tag">cozy.</h1>
        </div>

      </div>
    )
  }
}

export default Home;

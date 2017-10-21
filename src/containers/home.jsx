import React, { Component }  from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router';
import {Provider} from 'react-redux';
import { connect } from 'react-redux';


@connect((state) => ({
   isAuth: state.auth.authenticated
}))
class Home extends Component {
  render(){
    const { isAuth } = this.props;

    return (
      <div>
          <h1 className="center">cozy.</h1>
          <section className="message visible">
          { !isAuth && <Link to={`/login`}>login</Link> }
          { isAuth && <Link to={`/dashboard`}>@Account</Link> }
            <Link to={'s'}>store</Link>
            <Link to={'about'}>about</Link>
            <Link to={'contact'}>contact</Link>
            <ul className="externallinks">
              <li>
                <a href="https://www.facebook.com/cozy.nyc">f</a>
              </li>
              <li>
                <a href="https://twitter.com/cozy_nyc">t</a>
              </li>
              <li>
                <a href="https://www.instagram.com/cozy.nyc/">i</a>
              </li>
            </ul>
          </section>
      </div>
    )
  }
}

export default Home;

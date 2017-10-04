import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router';
import {Provider} from 'react-redux';

import ListingQuery from '../components/listingquery';

const Home = () => {
  return (
    <div>
        <h1>cozy.</h1>
        <section id="message" className="visible">
          <Link to={'store'}>store</Link>
          <Link to={'about'}>about</Link>
          <Link to={'contact'}>contact</Link>
          <ul id="externallinks">
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
  );
};

export default Home;

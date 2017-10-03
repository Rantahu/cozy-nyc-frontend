import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import ListingQuery from '../components/listingquery';

const Home = () => {
  return (
    <div>
      <canvas id="c"></canvas>

      <div id="header">
        <h1>cozy.</h1>

        <section id="message" className="visible">
          <a href="contact">contact</a>
          <a href="https://www.facebook.com/cozy.nyc">facebook</a>
          <a href="https://twitter.com/cozy_nyc">twitter</a>
          <a href="https://www.instagram.com/cozy.nyc/">instagram</a>
        </section>
      </div>
    </div>
  );
};

export default Home;

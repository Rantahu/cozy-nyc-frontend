import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import ListingQuery from '../components/listingquery';

const Home = () => {
  return (
    <div>
      <canvas id="c"></canvas>
      <header>
        <h1>cozy.</h1>
        <section id="message" className="visible">
          <a href="store">store</a>
          <a href="about">about</a>
          <a href="contact">contact</a>
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
      </header>
    </div>
  );
};

export default Home;

import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import Navbar from '../components/navbar';

const Brand = () => {
  return (
  <div>
    <header>
      <Navbar />
    </header>
    <div id="content">
      <h1>BRAND HERE</h1>
    </div>
    </div>
  );
};

export default Brand;

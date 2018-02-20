import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

/**
 * About Page
 * Display a the cozy logo.
 *
 * ToDo: Add a video to replace logo
 */
class About extends Component{
  render() {
    return (
      <div id="container">
        <img src='/img/cube.svg'/>
      </div>
    );
  }
};

export default About;

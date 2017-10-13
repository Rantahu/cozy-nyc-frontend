import React, {Component} from 'react';
import Navbar from '../components/navbar'

import '../assets/scss/skeleton.scss';
import '../assets/scss/main.scss';

class App extends Component {
  render() {
    return (
      <div>
      <canvas id="c"></canvas>
        <div className="container">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default App;

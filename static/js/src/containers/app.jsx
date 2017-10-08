import React, {Component} from 'react';
import Navbar from '../components/navbar'
import '../assets/scss/main.css'

class App extends Component {
  render() {
    return (
      <div>
      <canvas id="c"></canvas>
        <div id="container">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default App;

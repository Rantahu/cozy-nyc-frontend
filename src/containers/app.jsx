import React, {Component} from 'react';

import Navbar from '../components/navbar';

require('../assets/scss/skeleton.scss');
require('../assets/scss/main.scss');

class App extends Component {
  render() {
    return (
      <div className="container">
        <Navbar />
        {this.props.children}
      </div>
    );
  }
}

export default App;

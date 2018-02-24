import React, {Component} from 'react';

import Navbar from '../components/navbar';

require('../assets/scss/main.scss');

/**
 * Standard React app wrapper with the navbar.
 *
 */
class App extends Component {
  render() {
    return (
      <div id="content">
        <Navbar />
        {this.props.children}
      </div>
    );
  }
}

export default App;

import React, {Component} from 'react';

require('../assets/scss/skeleton.scss');
require('../assets/scss/main.scss');

class App extends Component {
  render() {
    return (
      <div className="container">
        {this.props.children}
      </div>
    );
  }
}

export default App;

import React, { Component }  from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

class DiscoveryHome extends Component {
  render(){
    return (
      <div id='container'>
        <section id='section0' className='discovery-section'>
          <h1>Hi there!</h1>
        </section>

        <section id='section1' className='discovery-section'>
          <h1>Hello there!</h1>
        </section>

        <section id='section2' className='discovery-section'>
          <h1>Hey there!</h1>
        </section>
      </div>
    )
  }
}

export default DiscoveryHome;

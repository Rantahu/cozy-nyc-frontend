import React, { Component }  from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

class Stream extends Component {
  render(){
    return (
      <div>
        <div id="stream-feed" className='eight columns'>
          video goes here
        </div>

        <div id='chat' className='four columns'>
          chat goes here
        </div>
      </div>
    )
  }
}

export default Stream;

import React, { Component }  from 'react';
import ReactDOM from 'react-dom';

import Posts from '../../components/boards/posts';

class Thread extends Component {
  render(){
    return (
      <div id='thread-wrapper'>
        <Posts />
        <div id='thread-sidebar' className='four columns'>
          stats stats stats
        </div>
      </div>
    )
  }
}

export default Thread;

import React, { Component }  from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import ThreadList from '../../components/boards/thread-list';

class Board extends Component {
  render(){
    return (
      <div id="feed">
        <ThreadList />
      </div>
    )
  }
}

export default Board;

import React, { Component }  from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import BoardList from '../../components/boards/board-list';

/**
 * Boards Home Page
 * List active boards on the site
 */
class BoardsHome extends Component {
  render(){
    return (
      <div id="home-content">
        <div id="home-featured">
          <BoardList />
        </div>
      </div>
    )
  }
}

export default BoardsHome;

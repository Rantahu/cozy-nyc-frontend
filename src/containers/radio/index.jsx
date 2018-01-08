import React, { Component }  from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router';
import { Provider, connect } from 'react-redux';

import ChannelList from '../../components/radio/channel-list';

class RadioHome extends Component {
  render(){
    return (
      <div id="home-content">
        <div id="home-featured" className='eight columns'>
          <h1>[Album Art Here]</h1>
        </div>

        <div id='home-sidebar' className='four columns'>
          <ChannelList />
        </div>

      </div>
      )
  }
}



export default RadioHome;

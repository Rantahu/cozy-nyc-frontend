import React, { Component }  from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router';
import { Provider, connect } from 'react-redux';

import ChannelList from '../../components/radio/channel-list';

class RadioHome extends Component {
  render(){
    return (
      <div>
        <div id='radio-sidebar' className='four columns'>
          <ChannelList />
        </div>

        <div id="radio-feature" className='eight columns'>
          MUSIC
        </div>

      </div>
      )
  }
}



export default RadioHome;
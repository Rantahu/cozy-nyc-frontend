import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {Link} from 'react-router';

class ChannelList extends Component {
  createListItems() {
    return this.props.channels.map((channel) => {
      return (
        // TODO: Create a variable for channel urls
        <li><Link to={'radio/{channel.name}'}>{channel.name}</Link></li>
      );
    });
  }

  render() {
    return (
      <ul>
        {this.createListItems()}
      </ul>
    );
  }
}

function mapStateToProps(state) {
  return {
    channels: state.channels
  };
}

export default connect(mapStateToProps)(ChannelList);

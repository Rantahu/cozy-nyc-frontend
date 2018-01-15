import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {Link} from 'react-router';


class Post extends Component {
  render() {
    return (
      <div className='message-wrapper'>
        <div className='message-poster'>
          <img className='profile-image' src={ this.props.user.avatarUrl } />
          <p>{ this.props.user.username }</p>
        </div>
        <div className='message-bubble'>
          { this.props.message }
        </div>
        <span>
          { this.props.date }
        </span>
      </div>
    );
  }
}

export default (Post);

import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {Link} from 'react-router';


class ProfileButton extends Component {
  render() {
    return (
      <div id='profile-button'>
        <div id='user-profile-status'>
          <p>{ this.props.user.username }</p>
          <p>{ this.props.user.rep }</p>
        </div>
        <div id='user-profile-avatar'>
          <img className='profile-image' src='https://i.redd.it/ibcr0wkcxlpz.jpg'/>
        </div>
        <div className='u-cf'></div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.user
  };
}

export default connect(mapStateToProps)(ProfileButton);

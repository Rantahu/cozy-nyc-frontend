import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {Link} from 'react-router';


class ProfileButton extends Component {
  render() {
    return (
      <div id='profile-button'>
        <div id='user-profile-status'>
          <Link to={'/u/' + this.props.user.username}>
            <p>{ this.props.user.username }</p>
          </Link>
          <p>{ this.props.user.rep }</p>
        </div>
        <div id='user-profile-avatar'>
          <Link to={'/u/' + this.props.user.username}>
            <img className='profile-image' src={this.props.user.avatarUrl}/>
          </Link>
        </div>
        <div className='u-cf'></div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.activeUser
  };
}

export default connect(mapStateToProps)(ProfileButton);

import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {Link} from 'react-router';

class PopupForum extends Component {
  render() {
    return (
      <div id='thread-forum-popup'>
        <div className='popup_inner'>
          <input name="subject" type="text"/>
          <input name="image" type="text" /> <button>enter</button>
          <textarea name="message" />
        </div>
      </div>
    );
  }
}

class ThreadForum extends Component {
  constructor() {
    super();
    this.state = {
      showPopupForum: false
    };
  }

  togglePopup() {
    console.log('noot');
    this.setState({
      showPopupForum:!this.state.showPopupForum
    });
    console.log(this.state);
  }

  render() {
    const popup = (this.state.showPopupForum ? <PopupForum /> : null);
    return (
      <div id='thread-forum'>
        { popup }
        <button id="thread-forum-button" onClick={() => this.togglePopup() }> reply </button>
      </div>
    )

  }
}

export default (ThreadForum);

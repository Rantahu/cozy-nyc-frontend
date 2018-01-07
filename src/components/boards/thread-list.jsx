import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {Link} from 'react-router';


class ThreadList extends Component {
  createListItems() {
    return this.props.threads.map((thread) => {
      return (
        <div className='three columns' key={ thread.id }><Link to={{
          pathname: '/boards/' + this.props.board.board_tag + '/' + thread.id
        }} activeClassName="active">
          {thread.title}
        </Link></div>
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
    board: state.activeBoard,
    threads: state.activeBoard.threads
  };
}

export default connect(mapStateToProps)(ThreadList);
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {Link} from 'react-router';


class ThreadList extends Component {
  createListItems() {
    return this.props.threads.map((thread) => {
      return (
        <div className='three columns thread-box' key={ thread.id }>
          <Link className='thread-box-content' to={{
            pathname: '/boards/' + this.props.board.board_tag + '/' + thread.id
          }} activeClassName="active">
            <div>
                {thread.title}
            </div>
          </Link>
        </div>
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

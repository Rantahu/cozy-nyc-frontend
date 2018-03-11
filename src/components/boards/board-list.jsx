import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {Link} from 'react-router';


class BoardList extends Component {
  createListItems() {
    return this.props.boards.map((board) => {
      return (
        <span className='row' key={ board.id }><Link to={{
          pathname: '/boards/' + board.tag
        }} activeClassName="active">
          /{board.tag}/ - {board.name}
        </Link></span>
      );
    });
  }

  render() {
    return (
      <ul>
        { this.createListItems() }
      </ul>
    );
  }
}

function mapStateToProps(state) {
  return {
    boards: state.boards
  };
}

export default connect(mapStateToProps)(BoardList);

import React, {Component} from 'react';
import {connect} from 'react-redux';

class Dashboard extends Component {

  render() {
    return (
      <div>
        {this.renderContent()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.user
  };
}

export default connect(mapStateToProps)(Dashboard);

import React, {Component} from 'react';

import {connect} from 'react-redux';

class UserDetail extends Component {

  render() {

    if (!this.props.user) {
      return (
        <h3>Select a user...</h3>
      );
    }

    return (
      <div>
        <p>{this.props.user.first}</p>
        <p>{this.props.user.last}</p>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {user: state.activeUser};

}

export default connect(mapStateToProps)(UserDetail);

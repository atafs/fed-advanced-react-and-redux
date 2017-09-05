import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../actions';

class UsersList extends Component {
  componentWillMount() {
    this.props.fetchUsers();

  }

  renderUsers(users) {
    return (
      <div className="card card-block">
        <h4 className="card-title">{users.name}</h4>
        <p className="card-text">Cheese Factory</p>
        <a className="btn btn-primary">Check Credit Cards</a>
      </div>
    );
  }

  render() {
    return (
      <div className="users-list">
        { this.props.users.map(this.renderUsers) }
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { users: state.users };
}

export default connect(mapStateToProps, actions)(UsersList);

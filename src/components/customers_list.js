import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../actions';

class CustomersList extends Component {
  componentWillMount() {
    this.props.fetchCustomers();

  }

  renderCustomers(customer) {
    return (
      <div className="card card-block">
        <h4 className="card-title">{customer.first_name}</h4>
        <p className="card-text">{customer.employment_status}</p>
        <a className="btn btn-primary">Check Credit Cards</a>
      </div>
    );
  }

  render() {
    return (
      <div className="customers-list">
        { this.props.customers.map(this.renderCustomers) }
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { customers: state.customers };
}

export default connect(mapStateToProps, actions)(CustomersList);

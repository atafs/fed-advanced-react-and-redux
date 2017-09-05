import React, { Component } from 'react';

import CustomersList from './customers_list';
import CardsList from './cards_list';

export default class App extends Component {
  render() {
    return (
      <div>
        <CustomersList />
        <CardsList />
      </div>
    );
  }
}

import React, { Component } from 'react';
import SearchForm from '../containers/searchForm';
import BookingsTable from '../components/bookigsTable';

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <SearchForm />
        <BookingsTable />
      </div>
    );
  }
}

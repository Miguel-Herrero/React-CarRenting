import React, { Component } from 'react';
// import SearchBar from '../components/searchBar.jsx';
import SearchForm from '../containers/searchForm';
import CarList from '../components/carsList.jsx';
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

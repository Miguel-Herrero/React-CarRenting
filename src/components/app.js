import React, { Component } from 'react';
import SearchBar from '../components/searchBar.jsx';
import CarList from '../components/carsList.jsx';

export default class App extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <CarList />
      </div>
    );
  }
}

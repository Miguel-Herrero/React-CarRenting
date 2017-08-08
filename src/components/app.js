import React, { Component } from 'react';
import Header from './header';
import Footer from './footer';
import SearchForm from '../containers/searchForm';
import BookingsTable from '../components/bookigsTable';

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <SearchForm />
        <BookingsTable />
        <Footer />
      </div>
    );
  }
}

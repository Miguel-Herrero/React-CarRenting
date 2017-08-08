import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import fetchCarsBooked from '../actions/';

class BookingList extends Component {
  render() {
    console.log(this.props.cars)
    return (
      <div>
        <ul>
          <li>BookingList</li>
        </ul>
      </div>
    );
  }
}

function mapStateToProps({ cars }) {
  console.log(cars);
  return { cars };
}

export default connect(mapStateToProps)(BookingList);
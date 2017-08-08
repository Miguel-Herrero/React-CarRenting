import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookingCheck extends Component {
  render() {
    const availableCars = this.props.bookings.availableCars;
    return (
      <div>
        <div className="alert alert-success">There are {availableCars} cars available!</div>
      </div>
    );
  }
}

function mapStateToProps({ bookings }) {
  return { bookings };
}

export default connect(mapStateToProps)(BookingCheck);
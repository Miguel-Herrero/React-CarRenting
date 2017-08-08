import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookingsTable extends Component {
  renderBooking(bookingData) {
    const id = bookingData['_id'];
    const { fromDate, toDate } = bookingData;

    return (
      <tr key={id}>
        <td>{fromDate}</td>
        <td>{toDate}</td>
      </tr>
    );
  }

  render() {
    if (!this.props.bookings.bookings) {
      return (
        <div>Loading…</div>
      );
    }

    console.log('this.props.bookings.bookings', this.props.bookings.bookings);

    return (
      <div>
        <h3>These are the current bookings:</h3>
        <table className="table table-hover">
          <thead>
            <tr>
                <th>From</th>
                <th>To</th>
            </tr>
          </thead>
          <tbody>
                {this.props.bookings.bookings.map(this.renderBooking)}  
          </tbody>
        </table>
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log('state', state);
  return { bookings: state.bookings };
}

export default connect(mapStateToProps)(BookingsTable);
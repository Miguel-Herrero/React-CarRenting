import React, { Component } from 'react';
import { connect } from 'react-redux';
import Moment from 'moment-timezone';

class BookingsTable extends Component {
  renderBooking(bookingData) {
    const id = bookingData['_id'];
    let { fromDate, toDate } = bookingData;

    fromDate = Moment.tz(fromDate, "Europe/Madrid").format();
    toDate = Moment.tz(toDate, "Europe/Madrid").format();

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

function mapStateToProps({ bookings }) {
  return { bookings };
}

export default connect(mapStateToProps)(BookingsTable);
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Datetime from 'react-datetime';
import Moment from 'moment';
import { fetchBookings } from '../actions';
import BookingsCheck from '../components/bookingsCheck';

class SearchForm extends Component {
  constructor(props) {
    super(props);

    // Set initial state for search form inputs
    this.state = {
      from: null,
      to: ''
    };

    // Fetch current bookings when no dates are selected
    this.props.fetchBookings();

    // To allow these functions to access this
    this.onFromDatetimeChange = this.onFromDatetimeChange.bind(this);
    this.onToDatetimeChange = this.onToDatetimeChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  /**
   * Set the from value after selecting a datetime
   * @param {Object} datetime 
   */
  onFromDatetimeChange(datetime) {
    this.setState({ from: datetime });
  }

  /**
   * Set the tp value after selecting a datetime
   * @param {Object} datetime 
   */
  onToDatetimeChange(datetime) {
    this.setState({ to: datetime });
  }

  /**
   * Fetch bookings for selected time range
   * @param {*} event 
   */
  onFormSubmit(event) {
    // Stop browser from reloading when pressing enter or submitting the form
    event.preventDefault();

    if (this.state.from && this.state.to) {
      const from = this.state.from.valueOf();
      const to = this.state.to.valueOf();
      this.props.fetchBookings(from, to);
    } else {
      this.props.fetchBookings();
    } 
  }

  /**
   * Only allow dates after now, not past dates
   * @param {Object} currentDate 
   * @param {Object} selectedDate 
   */
  isValidDate(currentDate, selectedDate) {
    const yesterday = Datetime.moment().subtract( 1, 'day' );
    return currentDate.isAfter( yesterday );
  }

  render() {
    return (
      <div className="searchForm">
        <h2 className="searchFormTitle">Check if we have cars for you!</h2>
        <form onSubmit={this.onFormSubmit} className="input-group">
          <div className="col-md-5">
            <Datetime
              locale="es"
              onChange={this.onFromDatetimeChange}
              isValidDate={this.isValidDate}
              closeOnSelect={true}
              value={this.state.from}
            />
          </div>
          <div className="col-md-5">
            <Datetime
              locale="es"
              onChange={this.onToDatetimeChange}
              isValidDate={this.isValidDate}
              closeOnSelect={true}
              value={this.state.to}
            />
          </div>
          <div className="col-md-2">
            <span className="input-group-btn">
              <button type="submit" className="btn btn-primary">Check dates!</button>
            </span>
          </div>
        </form>
        <BookingsCheck />
      </div>
    );
  }
}

export default connect(null, { fetchBookings })(SearchForm);
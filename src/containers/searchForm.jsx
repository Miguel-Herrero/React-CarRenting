import React, { Component } from 'react';
import { connect } from 'react-redux';
import Datetime from 'react-datetime';
import Moment from 'moment';
import { fetchBookings } from '../actions';
import BookingsCheck from '../components/bookingsCheck';

class SearchForm extends Component {
  constructor(props) {
    super(props);

    // this.state = { 
    //   from: Moment().add(1, 'hour'),
    //   to: Moment().add(1, 'day').add(1, 'hour')
    // };
    this.state = {
      from: '',
      to: ''
    };

    this.props.fetchBookings();

    // To allow this functions to access this
    this.onFromDatetimeChange = this.onFromDatetimeChange.bind(this);
    this.onToDatetimeChange = this.onToDatetimeChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onFromDatetimeChange(datetime) {
    this.setState({ from: datetime });
  }

  onToDatetimeChange(datetime) {
    this.setState({ to: datetime });
  }

  onFormSubmit(event) {
    // Stop browser from reloading when pressing enter or submitting the form
    event.preventDefault();

    const from = this.state.from.valueOf();
    const to = this.state.to.valueOf();

    // TO-DO: sent error If from > to

    // Fetch the number of available cars
    this.props.fetchBookings(from, to);
  }

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
              onChange={this.onFromDatetimeChange}
              isValidDate={this.isValidDate}
              closeOnSelect={true}
              value={this.state.from}
            />
          </div>
          <div className="col-md-5">
            <Datetime
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
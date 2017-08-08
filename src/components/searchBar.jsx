import React, { Component } from 'react';
import Datetime from 'react-datetime';
import { bindActionCreators } from 'redux';
import { fetchCarsAvailable } from '../actions/';
import { connect } from 'react-redux';
import Moment from 'moment';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { 
      from: Moment().add(1, 'hour'),
      to: Moment().add(1, 'day').add(1, 'hour') };

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
    this.props.fetchCarsAvailable(from, to);
  }

  // var yesterday = Datetime.moment().subtract( 1, 'day' );

  isValidDate(currentDate, selectedDate) {
    const yesterday = Datetime.moment().subtract( 1, 'day' );
    return currentDate.isAfter( yesterday );
  }

  render() {
    return (
      <div>
      <form onSubmit={this.onFormSubmit}>
        <Datetime
          locale="es"
          onChange={this.onFromDatetimeChange}
          isValidDate={this.isValidDate}
          closeOnSelect={true}
          value={this.state.from}
        />
        <Datetime
          locale="es"
          onChange={this.onToDatetimeChange}
          isValidDate={this.isValidDate}
          closeOnSelect={true}
          value={this.state.to}
        />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Submit</button>
        </span>
      </form>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchCarsAvailable }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Moment from 'moment';

class CarList extends Component {
  render() {
    const cars = this.props.cars;

    if (!cars.availableCars) {
      return (<div></div>);
    }

    // Parse Datetimes
    const fromDate = Moment.unix(parseInt(cars.from) / 1000).format("MM/DD/YYYY HH:mm");
    const toDate = Moment.unix(parseInt(cars.to) / 1000).format("MM/DD/YYYY HH:mm");

    return (
      <div>
        <p>{`Total of cars is: ${cars.availableCars}`}</p>
        <p>{`You have selected from ${fromDate} to ${toDate}`}</p>
      </div>
    );
  }
}

function mapStateToProps({ cars }) {
  console.log('mapStateToProps ', cars)
  return { cars };
}

export default connect(mapStateToProps)(CarList);
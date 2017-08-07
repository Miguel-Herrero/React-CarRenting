import React, { Component } from 'react';
import Datetime from 'react-datetime';

export default class SearchForm extends Component {
  onChangeDatetime(event) {
    console.log(event)
  }

  render() {
    return (
      <div>
      <Datetime 
        onChange={this.onChangeDatetime}
      />
      </div>
    );
  }
}

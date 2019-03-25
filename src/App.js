import React, { Component } from 'react';
import './App.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: null,
      endDate: null,
      dayDifference: null
    };
    this.handleChangeStart = this.handleChangeStart.bind(this);
    this.handleChangeEnd = this.handleChangeEnd.bind(this);
  }
  handleChangeStart(date) {
    this.setState({
      startDate: date
    });
    let dayDiff = this.daysdifference(date, this.state.endDate);
    this.setState( {
      dayDifference: dayDiff
    });
  }
  handleChangeEnd(date) {
    this.setState({
      endDate: date
    });
    let dayDiff = this.daysdifference(this.state.startDate, date);
    this.setState( {
      dayDifference: dayDiff
    });
  }
  daysdifference(date1, date2) {
    // The number of milliseconds in one day
    console.log(date1);
    console.log(date1);
    if(date1 == null || date2 == null) {
      return null;
    }
    let ONEDAY = 1000 * 60 * 60 * 24;
    // Convert both dates to milliseconds
    let date1_ms = date1.getTime();

    let date2_ms = date2.getTime();
    // Calculate the difference in milliseconds
    let difference_ms = Math.abs(date1_ms - date2_ms);
console.log(difference_ms);
    // Convert back to days and return
    return String(Math.round(difference_ms/ONEDAY));
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="row"><label>Start Date : </label><DatePicker
              selected={this.state.startDate}
              onChange={this.handleChangeStart}
              id="startDate"
          /></div>
          <div className="row"><label>End Date : </label><DatePicker
              selected={this.state.endDate}
              onChange={this.handleChangeEnd}
              id="endDate"
          /></div>
          <div className="row"><label>Days Difference : </label><label>{this.state.dayDifference}</label></div>
        </header>
      </div>
    );
  }
}

export default App;

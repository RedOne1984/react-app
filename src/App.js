import React, { Component } from 'react';
import './App.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import TreeView from "react-treeview";
import "react-treeview/react-treeview.css";

const dataSource = [
    ['Apple', 'Orange'],
    ['Facebook', 'Google'],
    ['Celery', 'Cheeseburger'],
];

class App extends Component {


  constructor(props) {
    super(props);
    this.state = {
      startDate: null,
      endDate: null,
      dayDifference: null,
      collapsedBookkeeping: dataSource.map(() => false)
    };
    //this.handleChangeStart = this.handleChangeStart.bind(this);
    //this.handleChangeEnd = this.handleChangeEnd.bind(this);
  }

    handleClick(i){
        let [...collapsedBookkeeping] = this.state.collapsedBookkeeping;
        collapsedBookkeeping[i] = !collapsedBookkeeping[i];
        this.setState({collapsedBookkeeping: collapsedBookkeeping});
    }

    collapseAll() {
        this.setState({
            collapsedBookkeeping: this.state.collapsedBookkeeping.map(() => true),
        });
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
    let difference_ms = date2_ms - date1_ms;
console.log(difference_ms);
    // Convert back to days and return
    return String(Math.round(difference_ms/ONEDAY));
  }
  render() {
      const collapsedBookkeeping = this.state.collapsedBookkeeping;
    return (
      <div className="App">
        <header className="App-header">
          <div className="row"><label>Start Date : </label><DatePicker
              selected={this.state.startDate}
              onChange={this.handleChangeStart.bind(this)}
              id="startDate"
          /></div>
          <div className="row"><label>End Date : </label><DatePicker
              selected={this.state.endDate}
              onChange={this.handleChangeEnd.bind(this)}
              id="endDate"
          /></div>
          <div className="row"><label>Days Difference : </label><label>{this.state.dayDifference}</label></div>
            <div>
                <button onClick={this.collapseAll}>Collapse all</button>
                {dataSource.map((node, i) => {
                    // Let's make it so that the tree also toggles when we click the
                    // label. Controlled components make this effortless.
                    const label =
                        <span className="node" onClick={this.handleClick.bind(this, i)}>
              Type {i}
            </span>;
                    return (
                        <TreeView
                            key={i}
                            nodeLabel={label}
                            collapsed={collapsedBookkeeping[i]}
                            onClick={this.handleClick.bind(this, i)}>
                            {node.map(entry => <div className="info" key={entry}>{entry}</div>)}
                        </TreeView>
                    );
                })}
            </div>
        </header>
      </div>
    );
  }
}

export default App;

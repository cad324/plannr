import React, { Component } from 'react';
import './App.css';
import * as ReactDOM from 'react-dom';
import ProgressBar from './components/ProgressBar'
import TimeTable from './components/TimeTable'

class App extends Component {
  constructor(props) {
    super();
    this.state = {percentage: 0};
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = () => {
    let countCompleted = ReactDOM.findDOMNode(this).querySelectorAll('#completed div div');
    this.setState({percentage: parseInt(countCompleted.length/6 * 100)});
  }

  componentDidMount = () => {
    this.handleChange();
  }

  render() {
    return (
      <div className="App">
        <h1>Plannr</h1>
        <h2>Keep track of your day's activities with Plannr</h2>
        <div id="progress-div">
          <ProgressBar percentage={this.state.percentage}/>
        </div>
        <div></div>
        <TimeTable updatePercent={this.handleChange}/>
      </div>
    );
  }
}

export default App;

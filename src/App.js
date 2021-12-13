import React, { Component } from 'react';
import './App.css';
import RecordFuel from './RecordFuel';
import FrontScreen from './FrontScreen';
import RecordMileage from './RecordMileage';
import ResultsScreen from './ResultsScreen';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showRecordFuel: false,
      showFrontScreen: true,
      showRecordMileage: false,
      showResultsScreen: false
    }

    this.recordFuelToggle = this.recordFuelToggle.bind(this);
    this.frontScreenToggle = this.frontScreenToggle.bind(this);
    this.recordMileageToggle = this.recordMileageToggle.bind(this);
    this.resultsScreenToggle = this.resultsScreenToggle.bind(this);

  }

  recordFuelToggle() {
    this.setState(
      {
        showRecordFuel: true,
        showFrontScreen: false,
        showRecordMileage: false,
        showResultsScreen: false
      });
  }

  frontScreenToggle() {
    this.setState(
      {
        showRecordFuel: false,
        showFrontScreen: true,
        showRecordMileage: false,
        showResultsScreen: false
      });
  }

  recordMileageToggle() {
    this.setState(
      {
        showRecordFuel: false,
        showFrontScreen: false,
        showRecordMileage: true,
        showResultsScreen: false
      });
  }
  resultsScreenToggle() {
    this.setState(
      {
        showRecordFuel: false,
        showFrontScreen: false,
        showRecordMileage: false,
        showResultsScreen: true
      });
  }

  render() {
    return (

      <div class="col-13 offset-0 my-5">

        {/* Renders the FrontScreen */}
        {
          this.state.showFrontScreen ? 
          <FrontScreen 
          recordFuelToggle={this.recordFuelToggle} 
          recordMileageToggle={this.recordMileageToggle} 
          resultsScreenToggle={this.resultsScreenToggle}
          /> : null
        }

        {
          this.state.showRecordFuel ? <RecordFuel /> : null
        }

        {
          this.state.showRecordMileage ? <RecordMileage /> : null
        }

        {
          this.state.showResultsScreen ? <ResultsScreen /> : null
        }

      </div>
    );
  }
}
export default App;
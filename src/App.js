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

    this.showRecordFuel = this.showRecordFuel.bind(this);
    this.showFrontScreen = this.showFrontScreen.bind(this);
    this.showRecordMileage = this.showRecordMileage.bind(this);
    this.showResultsScreen = this.showResultsScreen.bind(this);

  }

  showRecordFuel() {
    this.setState(
      {
        showRecordFuel: true,
        showFrontScreen: false,
        showRecordMileage: false,
        showResultsScreen: false
      });
  }
  showRecordMileage() {
    this.setState(
      {
        showRecordFuel: false,
        showFrontScreen: false,
        showRecordMileage: true,
        showResultsScreen: false
      });
  }
  showResultsScreen() {
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
        {
          this.state.showRecordFuel ? <RecordFuel /> : null
        }

        {
          this.state.showFrontScreen ? <FrontScreen showRecordFuel={this.showRecordFuel} /> : null
        }

        {
          this.state.showRecordMileage ? <RecordMileage showRecordMileage={this.showRecordMileage} /> : null
        }

        {
          this.state.showResultsScreen ? <ResultsScreen showResultsScreen={this.showResultsScreen} /> : null
        }

      </div>
    );
  }
}
export default App;
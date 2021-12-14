import React, { Component } from 'react';
import FrontScreen from './FrontScreen';
import RecordFuel from './RecordFuel';
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

  frontScreenToggle() {
    this.setState(
      {
        showFrontScreen: true,
        showRecordFuel: false,
        showRecordMileage: false,
        showResultsScreen: false
      });
  }

  recordFuelToggle() {
    this.setState(
      {
        showFrontScreen: false,
        showRecordFuel: true,
        showRecordMileage: false,
        showResultsScreen: false
      });
  }

  recordMileageToggle() {
    this.setState(
      {
        showFrontScreen: false,
        showRecordFuel: false,
        showRecordMileage: true,
        showResultsScreen: false
      });
  }
  resultsScreenToggle() {
    this.setState(
      {
        showFrontScreen: false,
        showRecordFuel: false,
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
          this.state.showRecordFuel ? <RecordFuel 
          frontScreenToggle={this.frontScreenToggle}
          /> : null
        }

        {
          this.state.showRecordMileage ? <RecordMileage 
          frontScreenToggle={this.frontScreenToggle}/> : null
        }

        {
          this.state.showResultsScreen ? <ResultsScreen 
          frontScreenToggle={this.frontScreenToggle}/> : null
        }

      </div>
    );
  }
}
export default App;


/* hideComponent(name) {

  console.log(name);

  switch (name) {
    case "showRecordFuel":
      this.setState({ showRecordFuel: !this.recordFuelToggle });
      break;

    case "showRecordMileage":
      this.setState({ showRecordMileage: !this.state.showRecordMileage });
      break;

    case "showResultsScreen":
      this.setState({ showResultsScreen: !this.state.showResultsScreen });
      break;

    default:
      this.setState({ showFrontScreen: !this.state.showFrontScreen });

  }
}

render() {

  const { showFrontScreen, showRecordFuel, showRecordMileage, showResultsScreen } = this.state;
  return (
    <div>

      <button onClick={() => this.hideComponent("showFrontScreen")}>

        Click to hide Demo1 component

      </button>

      <button onClick={() => this.hideComponent("showRecordFuel")}>

        Click to hide Demo2 component

      </button>

      <button onClick={() => this.hideComponent("showRecordMileage")}>

        Click to hide Demo3 component

      </button>

      <button onClick={() => this.hideComponent("showResultsScreen")}>

        Click to hide Demo4 component

      </button>

      <div>
        {showFrontScreen && <FrontScreen />}

        {showRecordFuel && <RecordFuel />}

        {showRecordMileage && <RecordMileage />}

        {showResultsScreen && <ResultsScreen />}

      </div>
    </div>

  ); */
import React, { Component } from 'react';
import './App.css';
import RecordFuel from './RecordFuel';
import FrontScreen from './FrontScreen';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showRecordFuel: false,
      showFrontScreen: true
    }

    this.showRecordFuel = this.showRecordFuel.bind(this);
  }

  showRecordFuel() {
    this.setState(
      {
        showRecordFuel: true,
        showFrontScreen: false
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

        </div>
    );
  }
}
export default App;
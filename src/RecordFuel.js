import React, { Component } from 'react';
import './FrontScreen';

class RecordFuel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showRecordFuel: true,
      showFrontScreen: false
    }

    this.showFrontScreen = this.showFrontScreen.bind(this);
  }

  showFrontScreen() {
    this.setState(
      {
        showRecordFuel: false,
        showFrontScreen: true
      });
    }

  render() {
    return (

        <div class="card">
            <div class="card-body">

            <h5>Fuel Expenditure, Record Fuel</h5>   
            <div>
                    <button onClick={this.showFrontScreen}>
                        Back
                    </button>
                </div>
            </div>
        </div>
    );
  }
}
export default RecordFuel;
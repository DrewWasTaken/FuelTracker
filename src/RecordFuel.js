import React, { Component } from 'react';
import Button from './Button';

// import DateTimePicker from 'react-datetime-picker';

class RecordFuel extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }

    this.showFrontScreen = this.showFrontScreen.bind(this);
  }

  showFrontScreen() {
    this.props.showFrontScreen()
  }


  render() {
    return (

      <div class="card">
        <div class="card-body">

          <Button theme="BackButton" onClick={this.showFrontScreen}>
            Back
          </Button>

          <div class="jumbotron">
            <h3 class="display-5"> Fuel Expenditure, Record Fuel</h3>
          </div>
        </div>

        <div>
          <label>
            Fuel Type:
            <select>
              <option value="petrol">Petrol</option>
              <option value="diesel">Diesel</option>
              <option value="electric">Electric</option>
              <option value="hybrid">Hybrid</option>
            </select>
          </label>
        </div>

        <form>
          <label>
            Amount (L):
            <input type="number" name="amount" />
          </label>
          <br />

          <label>
            Price (£):
            <input type="number" name="price" />
            VAT inc?
            <input type="checkbox" name="checkbox" />
          </label>
        </form>

        Time and Date Picker
        <br />
        Upload Picture

      </div>
    );
  }
}
export default RecordFuel;
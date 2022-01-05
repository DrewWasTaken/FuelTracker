import React, { Component } from 'react';
import Button from './Button';

// import DateTimePicker from 'react-datetime-picker';

class RecordMileage extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }

  }


  render() {
    return (

      <div class="card">
        <div class="card-body">

          {/* Back Button */}
          <Button theme="BackButton" onClick={this.props.frontScreenToggle}>
            Back
          </Button>

          {/* Title */}
          <div class="jumbotron">
            <h3 class="display-5"> Mileage Tracker</h3>
          </div>
        </div>

        {/* Select Car */}
        <div>
          <label>
            Select Car:
            <select>
              <option value="car1">Car1</option>
              <option value="car2">Car2</option>
              <option value="car3">Car3</option>
              <option value="car4">Car4</option>
            </select>
          </label>
        </div>

        {/* Miles Driven Input*/}
        <form>
          <label>
            Miles Driven:
            <input type="number" name="miles" placeholder="Enter Miles" />
          </label>
          <br />
        </form>

        Time and Date Picker
        <br />
        <div>
          Upload Receipt: <input type="file" name="price" onChange={this.fileSelectedHandler} />
          {/* <button onClick={this.fileSelectedHandler}>Upload</button> */}
        </div>

      </div>
    );
  }
}
export default RecordMileage;
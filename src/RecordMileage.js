import React, { Component } from 'react';

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

          <h5>Mileage Tracker</h5>
          <MyChart />

        </div>
      </div>
    );
  }
}
export default RecordMileage;
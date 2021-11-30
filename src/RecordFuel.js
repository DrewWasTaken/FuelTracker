import React, { Component } from 'react';
import styled from 'styled-components';
import './App.css';
import MyChart from './MyChart';


class RecordFuel extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return (        
        <div class="card">
            <div class="card-body">

            <h5>Fuel Expenditure</h5>   
            <MyChart/>   

            </div>
        </div>
    );
  }
}
export default RecordFuel;
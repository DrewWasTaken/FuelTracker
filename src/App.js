import React, { Component } from 'react';
import { Chart } from 'react-charts/dist/react-charts.development';
import './App.css';
import MyChart from './MyChart';
import Main from './Main';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showMe:true
    }
  }

  render() {

    function clickMe()
  {
      alert ('You clicked me!')
  }
    
  return (
      
    <div className="container">
        <div class="jumbotron">
          <h3 class="display-5">Fuel + Mileage Tracker</h3>
        </div>
        
              <div class="col-13 offset-0 my-5">
                  <div class="card">
                    <div class="card-body">
                      <h5>Fuel Expenditure</h5>
                      {/* {
                        this.state.showMe()
                      } */}
                      
                  <MyChart />
                  <Main />
              </div>
            </div>
          </div>
        </div>
    );    
  }
}
export default App;
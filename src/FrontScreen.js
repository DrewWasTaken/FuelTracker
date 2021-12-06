import React, { Component } from 'react';
import Button from './Button'; 

class FrontScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }

        this.showRecordFuel = this.showRecordFuel.bind(this);
    }

    showRecordFuel() {
        this.props.showRecordFuel()
    }


    render() {
        return (
            <div className="container">

            <div class="jumbotron">
            <h3 class="display-5">Fuel + Mileage Tracker</h3>
            </div>

            <div class="card">
                <div class="card-body">
                    <Button theme="RecordButton" onClick={this.showRecordFuel}>
                        Record Fuel
                    </Button>
                </div>

                <div>
                    <Button theme="RecordButton" onClick={this.showRecordMileage}>
                        Record Mileage
                    </Button>
                </div>

                <div>
                    <Button theme="ResultsButton" onClick={this.showResults}>
                        View Results
                    </Button>
                </div>
            </div>
            </div>            
        );
    }
}
export default FrontScreen;
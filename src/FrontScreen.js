import React, { Component } from 'react';
import Button from './Button';
import background from "./background.png";

class FrontScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showRecordFuel: false,
            showFrontScreen: true,
            showRecordMileage: false,
            showResultsScreen: false
        }

        this.recordFuelToggle = this.recordFuelToggle.bind(this);
        this.recordMileageToggle = this.recordMileageToggle.bind(this);
        this.resultsScreenToggle = this.resultsScreenToggle.bind(this);

    }

    recordFuelToggle() {
        this.props.recordFuelToggle()
    }

    recordMileageToggle() {
        this.props.recordMileageToggle()
    }

    resultsScreenToggle() {
        this.props.resultsScreenToggle()
    }


    render() {
        return (
            <div className="container">
                {/* Background Image */}
                <div style={{ backgroundImage: `url(${background})` }}> </div>

                {/* Title */}
                <div class="jumbotron">
                    <h3 class="display-5">Fuel + Mileage Tracker</h3>
                </div>

                {/* RecordFuel Button */}
                <div class="card">
                    <Button theme="RecordButton" onClick={this.recordFuelToggle}>
                        Record Fuel
                    </Button>
                </div>

                {/* RecordMileage Button */}
                <div class="card">
                    <Button theme="RecordButton" onClick={this.recordMileageToggle}>
                        Record Mileage
                    </Button>
                </div>

                {/* ShowResults Button */}
                <div class="card">
                    <Button theme="ResultsButton" onClick={this.resultsScreenToggle}>
                        View Results
                    </Button>
                </div>
            </div>
        );
    }
}
export default FrontScreen;
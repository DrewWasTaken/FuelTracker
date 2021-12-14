import React, { Component } from 'react';
import Button from './Button';

class FrontScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
        
    }

    render() {
        return (
            <div className="container">

                {/* Title */}
                <div class="jumbotron">
                    <h3 class="display-5">Fuel + Mileage Tracker</h3>
                </div>

                {/* RecordFuel Button */}
                <div class="card">
                    <Button theme="RecordButton" onClick={this.props.recordFuelToggle}>
                        Record Fuel
                    </Button>
                </div>

                {/* RecordMileage Button */}
                <div class="card">
                    <Button theme="RecordButton" onClick={this.props.recordMileageToggle}>
                        Record Mileage
                    </Button>
                </div>

                {/* ShowResults Button */}
                <div class="card">
                    <Button theme="ResultsButton" onClick={this.props.resultsScreenToggle}>
                        View Results
                    </Button>
                </div>
            </div>
        );
    }
}
export default FrontScreen;
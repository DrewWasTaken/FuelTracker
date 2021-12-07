import React, { Component } from 'react';
import Button from './Button';
import background from "./background.png";

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
                {/* Background Image */}
                <div style={{ backgroundImage: `url(${background})` }}> </div>

                {/* Title */}
                <div class="jumbotron">
                    <h3 class="display-5">Fuel + Mileage Tracker</h3>
                </div>

                {/* RecordFuel Button */}
                <div class="card">
                    <Button theme="RecordButton" onClick={this.showRecordFuel}>
                        Record Fuel
                    </Button>
                </div>

                {/* RecordMileage Button */}
                <div class="card">
                    <Button theme="RecordButton" onClick={this.showRecordMileage}>
                        Record Mileage
                    </Button>
                </div>

                {/* ShowResults Button */}
                <div class="card">
                    <Button theme="ResultsButton" onClick={this.showResults}>
                        View Results
                    </Button>
                </div>
            </div>
        );
    }
}
export default FrontScreen;
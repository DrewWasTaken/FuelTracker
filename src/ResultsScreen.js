import React, { Component } from 'react';
import Button from './Button';
import MyChart from './MyChart';


class ResultsScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }

        this.showResultsScreen = this.showResultsScreen.bind(this);
    }

    showResultsScreen() {
        this.props.showResultsScreen()
    }


    render() {
        return (

            <div class="card">
                <div class="card-body">

                    {/* Back Button */}
                    <Button theme="BackButton" onClick={this.showFrontScreen}>
                        Back
                    </Button>

                    {/* Title */}
                    <div class="jumbotron">
                        <h3 class="display-5"> Results</h3>
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

                {/* Chart Example */}
                <div>
                    <MyChart />
                </div>

                {/* Price Input */}
                <form>
                    <label>
                        Price (£):
                        <input type="number" name="price" placeholder="Enter Price" />
                        VAT inc?

                        {/* VAT Checkbox */}
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
export default ResultsScreen;
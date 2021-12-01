import React, { Component } from 'react';
import styled from 'styled-components';
import './App.css';
import MyChart from './MyChart';

const theme = {
    RecordButton: {
        default: '#31CACF', //Light-Blue
        hover: '#D5D5D5'    //Light-Grey
    },
    ResultsButton: {
        default: '#F26627', //Orange
        hover: '#EF3D59'    //Red
    }
}

const Button = styled.button`
    background-color: ${props => theme[props.theme].default};
    color: black;
    padding: 5px 15px
    border-radius: 5px;
    outline: 0;
    text-transform: uppercase;
    margin: 10px 0px;
    box-shadow: 0px 2px 2px lightgrey;
    cursor: pointer;
    transition: ease background-color 250ms;
    &:hover {
    background-color: ${props => theme[props.theme].hover};
    }`

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
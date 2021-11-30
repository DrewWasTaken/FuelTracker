import { buildQueries } from '@testing-library/react';
import React from 'react'
import styled from 'styled-components';

//Individual Button Stylings
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

//Button Styling
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
     background-color: ${props => theme[props.theme].hover};;
 }
`
function clickMe()
{
    alert ('You clicked me!')
}

function Main() {


/*   const Search = () => {
    const [showResults, setShowResults] = React.useState(false)
    const onClick = () => setShowResults(true)
    return (
      <div>
        <input type="submit" value="Search" onClick={onClick} />
        { showResults ? <Results /> : null }
      </div>
    )
  }
  
  const Results = () => (
    <div id="results" className="search-results">
      <MyChart />
      <RecordMileage />
      <RecordFuel />

    </div>
  ) */
  
  return (
    <>
        <div>
            <Button theme="RecordButton" onClick={clickMe}>
            Record Fuel
            </Button>
        </div>
        <div>
        <Button theme="RecordButton" onClick={clickMe}>
            Record Mileage

            </Button>
        </div>
        <div>
        <Button theme="ResultsButton" onClick={clickMe}>
            View Results
            </Button>
        </div>
    </>
  )
}

export default Main;
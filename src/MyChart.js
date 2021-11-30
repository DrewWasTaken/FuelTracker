import React from 'react'
import { Chart } from 'react-charts'

function MyChart() {

  //Add back button
  //Change type to bar graph
  //Add text boxes for input


  const data = React.useMemo(
    () => [
      {
        //Lines On Chart
        label: 'Money',
        data: [[0, 1], [1, 2], [2, 4], [3, 2], [4, 7]]
      },
    ],
    []
  )

  const axes = React.useMemo(
    () => [
      { primary: true, type: 'linear', position: 'bottom' },
      { type: 'linear', position: 'left' }
    ],
    []
  )

  return (
    <div style={{ width: '325px', height: '300px' }}>
      <Chart data={data} axes={axes} chartType="BarChart" />

    </div>
  )
}
export default MyChart;
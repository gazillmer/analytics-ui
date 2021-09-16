import React from 'react'
import Highcharts from 'highcharts'
import HighChartsReact from 'highcharts-react-official'

import './lineChart.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const options = {
    chart: {
        type: 'areaspline',
        reflow: true,
        height: 320
    },
    title: {
        text:''
    },
    legend: {
        enabled: false
    },
    xAxis: {
        categories: ['01-2010','02-2010','03-2010','07-2010','08-2010','06-2010']
    },
    series: [{
        name: "Flights",
        data: [10, 20, 30, 25, 35, 20]
    }]
  }

const LineChart = () => {
    return (
        <div className="chart-container">
            <div className="chart-title">
                Flights from POA to BSB
                <FontAwesomeIcon icon={faTimes} id='button-close'/>
            </div>
            <HighChartsReact
                highcharts={Highcharts}
                options={options}
            />
        </div>
    )
}

export default LineChart

/*
<div className='chart-container'>
            
            <div className="chart-title">
                Flights from POA to BSB
                <FontAwesomeIcon icon={faTimes} id='button-close'/>
            </div>

            <Line
                data = {{
                    labels: ['01-2010','02-2010','03-2010','07-2010','08-2010','06-2010'],
                    datasets: [
                        {
                            label: 'Number of flight intentions',
                            data: [10, 20, 30, 25, 35, 20],
                            borderColor: 'rgba(14, 0, 199, 1)',
                            backgroundColor: 'rgba(14, 0, 199, 0.3)',
                            lineTension: 0.4,  
                            fill: true
                        }
                    ]
                }}
                height={310}
                width={600}
                options={{
                    plugins:{
                        legend:{
                            display: false
                        }
                    },
                    scales: {
                        x: {
                            grid:{
                                display:false
                            }
                        },
                        y: {
                            grid:{
                                display:false
                            }
                        }
                    }
                }}
            />
        </div>
    )
}

*/
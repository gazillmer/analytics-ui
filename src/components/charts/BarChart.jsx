import React from 'react'
import { Line } from 'react-chartjs-2'
import { Button, CloseButton } from 'react-bootstrap';
import './barChart.css'

const BarChart = () => {
    return (
        <div className='chart-container'>
            <CloseButton variant="white" />
            <div className="chart-title">Flights from POA to BSB</div>
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

export default BarChart
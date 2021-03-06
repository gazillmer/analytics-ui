import React, { useState, useEffect } from 'react'
import Highcharts from 'highcharts'
import HighChartsReact from 'highcharts-react-official'

const options = {
    chart: {
        type: 'column',
        reflow: true,
        height: 280
    },
    colors: ['#5a6099'],
    title: {
        text: ''
    },
    legend: {
        enabled: false
    },
    xAxis: {
        categories: [],
        crosshair: true,
        lineColor: 'transparent',
        tickLength: 0
    },
    yAxis: {
        title: {
            text: 'Number of flights'
        }
    },
    plotOptions: {
        column: {
            pointPadding: 0.2,
            borderWidth: 0
        }
    },
    series: []
}

const BarChart = ({ indexes, values, yaxis}) => {
    const [chartData, setChartData] = useState(options);

    useEffect(() => {
        setChartData({
            ...chartData,
            series: [{
                name: "Flights",
                data: values
            }],
            xAxis: {
                categories: indexes,
                crosshair: true,
                lineColor: 'transparent',
                tickLength: 0
            },
            yAxis: {
                title: {
                    text: yaxis,
                },
            },
        })
    }, []);

    return (
        <HighChartsReact
            highcharts={Highcharts}
            options={chartData}
        />
    )
}

export default BarChart

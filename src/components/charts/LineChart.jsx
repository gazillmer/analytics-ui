import React, {useEffect, useState} from 'react'
import Highcharts from 'highcharts'
import HighChartsReact from 'highcharts-react-official'

const options = {
    chart: {
        type: 'areaspline',
        reflow: true,
        height: 280
    },
    colors: ['#5a6099'],
    title: {
        text:''
    },
    legend: {
        enabled: false
    },
    xAxis: {
        categories: [],
        lineColor: 'transparent',
        tickLength: 0
    },
    yAxis: {
        title: {
            text: 'Number of Flights'
        },
    },
    series: []
}

const LineChart = ({indexes, values}) => {
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
                lineColor: 'transparent',
                tickLength: 0
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

export default LineChart
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
        categories: ['01-2010','02-2010','03-2010','07-2010','08-2010','06-2010'],
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

const LineChart = ({series, categories}) => {
    const [chartData, setChartData] = useState(options);

    useEffect(() => {
        setChartData({
            ...chartData,
            series: [{
                name: "Flights",
                data: series
            }],
            xAxis: {
                categories: categories,
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
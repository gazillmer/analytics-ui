import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Highcharts from 'highcharts'
import HighChartsReact from 'highcharts-react-official'

import { API_URL } from '../../constants';

import './travelWebsites.css'

function TravelWebsites() {

    const [chartData, setChartData] = useState([])

    useEffect(() => {
        axios.get(`${API_URL}websites/info`)
            .then(response => {
                setChartData(response.data)
            })
    }, [API_URL])

    //const keys = Object.keys(chartData);

    const options = {
        chart: {
            type: 'line',
            reflow: true,
            height: 600
        },
        title: {
            text: ''
        },
        legend: {
            enabled: true
        },
        xAxis: {
            categories: chartData["Month"],
            lineColor: 'transparent',
            tickLength: 0
        },
        yAxis: {
            title: {
                text: 'Number of Visits'
            },
        },
        series: [
            {
                name: 'CVC',
                data: chartData['CVC']
            },
            {
                name: 'Melhores Destinos',
                data: chartData['Melhores Destinos']
            },
            {
                name: 'Passagens Imperdíveis',
                data: chartData['Passagens Imperdíveis']
            },
            {
                name: 'Submarino Viagens',
                data: chartData['Submarino Viagens']
            },
            {
                name: 'Decolar.com',
                data: chartData['Decolar.com']
            },
            {
                name: 'ViajaNet',
                data: chartData['ViajaNet']
            }
        ]

    }

    return (
        <div className="p-container">
            <div className="chart-card">
                <div className="chart-title">
                    Traffic on Travel-related Websites
                </div>
                <div className="chart-wrapper">
                    <HighChartsReact
                        highcharts={Highcharts}
                        options={options}
                    />
                </div>
            </div>
        </div>
    )
}
export default TravelWebsites

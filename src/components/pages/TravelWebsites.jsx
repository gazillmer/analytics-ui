import React, { useState } from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';

import Highcharts from 'highcharts'
import HighChartsReact from 'highcharts-react-official'

import { API_URL } from '../../constants';
import { Spinner } from 'react-bootstrap';

import './travelWebsites.css'

const URL = `https://analytics-api-325214.rj.r.appspot.com/websites/info`

function TravelWebsites() {

    const { data, status } = useQuery('chart-data', () => axios.get(URL));


    /*const options = {
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
            categories: data["Month"],
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
                data: data['CVC']
            },
            {
                name: 'Melhores Destinos',
                data: data['Melhores Destinos']
            },
            {
                name: 'Passagens Imperdíveis',
                data: data['Passagens Imperdíveis']
            },
            {
                name: 'Submarino Viagens',
                data: data['Submarino Viagens']
            },
            {
                name: 'Decolar.com',
                data: data['Decolar.com']
            },
            {
                name: 'ViajaNet',
                data: data['ViajaNet']
            }
        ]

    }
*/
    return (
        <div className="p-container">
            <div className="chart-card">
                <div className="chart-title">
                    Traffic on Travel-related Websites
                </div>
                <div className="chart-wrapper">
                    {(status === 'loading')
                        ? (<Spinner />)
                        : (data.Month)
                    }
                </div>
            </div>
        </div>
    )
}
export default TravelWebsites

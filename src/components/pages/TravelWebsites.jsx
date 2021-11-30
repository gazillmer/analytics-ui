import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Highcharts from 'highcharts'
import HighChartsReact from 'highcharts-react-official'

import styled from 'styled-components';

const URL = `https://analytics-api-325214.rj.r.appspot.com/websites/info`

function TravelWebsites() {

    const [chartData, setChartData] = useState([]);

    useEffect(() => {
        axios.get(URL)
            .then(res => setChartData(res.data))
    }, [URL])

    const chartSettings = {
        chart: {
            type: 'line',
            height: 600,
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
        <Container>
            <ChartCard>
                <Title>
                    Traffic on Travel-related Websites
                </Title>
                <ChartContent>
                    <HighChartsReact
                        highcharts={Highcharts}
                        options={chartSettings}
                    />
                </ChartContent>
            </ChartCard>
        </Container>
    )
}

const Container = styled.div`
    width: calc(100vw - 275px);
    //padding: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
`
const ChartCard = styled.div`
    background-color: white;
    margin: 20px;
    width: 90%;
    height: 80%;
    padding: 30px;
    justify-content: center;
    border-radius: 10px;
    white-space: nowrap;
    -webkit-box-shadow: 0px 0px 5px -1px rgba(0,0,0,0.5); 
    box-shadow: 0px 0px 5px -1px rgba(0,0,0,0.5);
`
const Title = styled.div`
    font-size: 24px;
    font-weight: 700;
    background-color: white;
    margin-bottom: 10px;
`
const ChartContent = styled.div`
    width: 100%;
    background-color: #fafafa;
`

export default TravelWebsites

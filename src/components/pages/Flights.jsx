import './flights.css'
import React, { useState } from 'react'
import { useEffect } from 'react';
import styled from 'styled-components'
import ChartEditor from '../charts/ChartEditor';
import LineChart from '../charts/LineChart'

function Flights() {

    const [showEditor, setShowEditor] = useState(false);
    const [charts, setCharts] = useState([]);
    const [chartId, setChartId] = useState("")

    const getChartId = () => {
        return new Date().getTime().toString(16)
    }

    useEffect(() => {
        localStorage.setItem('saved-charts', JSON.stringify(charts));
    }, [charts]);

    console.log(chartId)

    return (
        <div className="flights-container">
            <LineChart title="Flights from POA to GRU"/>
            <LineChart title="Flights from GRU to GIG"/>
            <LineChart title="Flights from POA to EZE"/>

            <Button
                onClick={() => setShowEditor(true)}
                chartId={() => setChartId(new Date().getTime().toString(16))}
            >
                +
            </Button>
           
            {showEditor &&
                <ChartEditor
                    onClose={() => setShowEditor(false)}
                    endpoint='flights'
                />
            }
        </div>
    )
}

const Button = styled.button`
    font-size: 30px;
    
    position: fixed;
    right: 20px;
    top: calc(100% - 80px);

    height: 60px;
    width: 60px;
    
    border-radius: 50%;
    
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    color: white;
    background-color: rgb(98, 41, 189);

    -webkit-box-shadow: 0px 0px 11px -1px rgba(0,0,0,0.5); 
    box-shadow: 0px 0px 5px -1px rgba(0,0,0,0.5);

    &:hover {
        background-color: rgb(55, 41, 105);
    }
`

export default Flights

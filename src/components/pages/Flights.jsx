import './flights.css'
import React, { useState } from 'react'
import { useEffect } from 'react';
import styled from 'styled-components'
import ChartEditor from '../charts/ChartEditor';
import {initialCharts} from "../../services/data/initialCharts";
import ChartManager from "../charts/ChartManager/ChartManager";
import {Requests} from "../../services/axios/requests";

function Flights() {

    const [showEditor, setShowEditor] = useState(false);
    const [charts, setCharts] = useState(initialCharts);
    const [chartId, setChartId] = useState("")

    useEffect(() => {
       const storageData = localStorage.getItem('saved-charts');
        setCharts(JSON.parse(storageData));
    }, []);

    useEffect(() => {
        localStorage.setItem('saved-charts', JSON.stringify(charts));
    }, [charts]);

    const handleNewChart = async (data) => {
        const handleData = async () => {
            const apiReturn = await new Requests().getGraphDataInfo(data);
            setCharts([...charts, apiReturn])
        }
        handleData();
    }

    return (
        <div className="flights-container">
            {
                charts.map(chart => (
                        <ChartManager {...chart}/>
                    )
                )
            }

            <Button
                onClick={() => setShowEditor(true)}
                chartId={() => setChartId(new Date().getTime().toString(16))}
            >
                +
            </Button>
           
            {showEditor &&
                <ChartEditor
                    onAddChart={handleNewChart}
                    onClose={() => setShowEditor(false)}
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

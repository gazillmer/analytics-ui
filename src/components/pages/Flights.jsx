import React, { useState } from 'react'
import { useEffect } from 'react';
import styled from 'styled-components'

import ReactTooltip from "react-tooltip";
import ChartEditor from '../charts/ChartEditor';
import { initialCharts } from "../../services/data/initialCharts";
import ChartManager from "../charts/ChartManager/ChartManager";
import { Requests } from "../../services/axios/requests";

function Flights() {

    const [showEditor, setShowEditor] = useState(false);
    const [charts, setCharts] = useState(initialCharts);

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
        <FlightsContainer>
            {charts.map(chart => (
                <ChartManager {...chart} />
            ))
            }

            <Button
                onClick={() => setShowEditor(true)}
                data-tip 
                data-for="create"
            > + </Button>
            <ReactTooltip
                backgroundColor="#5a6099"
                id="create"
                data-offset="{'top': 10, 'left': 10}"
            >
                Create new chart
            </ReactTooltip>

            {showEditor &&
                <ChartEditor
                    onAddChart={handleNewChart}
                    onClose={() => setShowEditor(false)}
                />
            }
        </FlightsContainer>
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
const FlightsContainer = styled.div`
    padding: 20px;
    position: relative;
    width: calc(100% - 275px);
    display: grid;
    grid-gap: 20px;
    grid-template-columns: repeat(auto-fill, minmax(450px, 1fr));
`

export default Flights

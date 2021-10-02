import React, { useState } from 'react'
import { useEffect } from 'react';
import styled from 'styled-components'
//import getDefaultCharts  from "../../services/data/defaultCharts";

import ReactTooltip from "react-tooltip";
import ChartEditor from '../charts/ChartEditor';
//import { initialCharts } from "../../services/data/initialCharts";
import ChartManager from "../charts/ChartManager/ChartManager";
import { Requests } from "../../services/axios/requests";

const getDefaultCharts = () => {
    const savedCharts = localStorage.getItem("tweet-charts");

    if (savedCharts) {
        try {
            const fromStorage = JSON.parse(savedCharts);
            return fromStorage;
        } catch { }
    }
    return [
        {
            name: 'Example Chart 1',
            values: [1, 2, 3, 4, 5, 6],
            indexes: ['01-2010', '02-2010', '03-2010', '04-2010', '05-2010', '06-2010'],
            type: 'line',
        },
        {
            name: 'Example Chart 2',
            values: [10, 20, 30, 25, 35, 20],
            indexes: ['01-2010', '02-2010', '03-2010', '04-2010', '05-2010', '06-2010'],
            type: 'line',
        },
    ]
}

function Tweets() {

    const [showEditor, setShowEditor] = useState(false);
    const [charts, setCharts] = useState(getDefaultCharts);

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
            {
                charts.map(chart => (
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

            {
                showEditor &&
                <ChartEditor
                    onAddChart={handleNewChart}
                    onClose={() => setShowEditor(false)}
                />
            }
        </FlightsContainer >
    )
}

export default Tweets

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
    background-color: #5a6099;

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


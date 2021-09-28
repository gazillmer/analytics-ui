import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import ReactTooltip from "react-tooltip";
import LineChart from "../LineChart";
import BarChart from "../BarChart";
import styled from "styled-components";

const ChartContainer = styled.div`
    white-space: nowrap;
    -webkit-box-shadow: 0px 0px 5px -1px rgba(0,0,0,0.5); 
    box-shadow: 0px 0px 5px -1px rgba(0,0,0,0.5);
    padding: 20px 20px 0 20px;
    border-radius: 10px;
    height: 350px;
    width: 550px;
    background-color: #FFFFFF;
`
const Title = styled.div`
    font-size: 18pt;
    font-weight: 700;
    margin-bottom: 25px;
    position: relative;
    background-color: #FFFFFF;
`
const CloseButton = styled.button`
    outline: none;
    border: none;
    background-color: white;
    cursor: pointer;
    position: absolute;
    right: 0;
    top: 0;
    color: gray;

    &hover {
        color: black
    }
`
const ChartManager = ({ name, series, categories, type }) => {
    return (
        <ChartContainer>
            <Title>
                {name}
                <CloseButton
                    data-tip
                    data-for="ttp">
                    <FontAwesomeIcon
                        icon={faTimes}
                    />
                </CloseButton>
                <ReactTooltip
                    backgroundColor="#5a6099"
                    id="ttp"
                    data-offset="{'top': 10, 'left': 10}"
                >
                    Delete chart
                </ReactTooltip>
            </Title>

            {(() => {
                switch (type) {
                    case 'line':
                        return (<LineChart series={series} categories={categories} />)
                }
                switch (type) {
                    case 'bar':
                        return (<BarChart series={series} categories={categories} />)
                }
                switch (type) {
                    case 'heatmap':
                        return (<HeatmapChart series={series} categories={categories} />)
                }
            })()
            }
        </ChartContainer>
    )
}

export default ChartManager
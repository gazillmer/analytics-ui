import { Close, ArrowDownward, Twitter, Flight } from '@material-ui/icons';
import React from "react";
import { CSVLink } from 'react-csv';
import ReactTooltip from "react-tooltip";
import LineChart from "../LineChart";
import BarChart from "../BarChart";
import styled from "styled-components";

const ChartManager = ({ name, indexes, values, type, yaxis, filters, onDelete, onDownload }) => {
    
    return (
        <ChartContainer>
            <Title>
                <Source>
                    {filters.source == 'flights'
                        ? (<Flight style={{ color: "#be03b5" }} />)
                        : (<Twitter style={{ color: "#1DA1F2" }} />)
                    }
                </Source>
                {name}

                <Options>
                    {/* Download Button */}
                    {filters.source == 'twitter' &&
                        <>
                            <DownloadButton
                                data-tip
                                data-for="data"
                                onClick={onDownload}>
                                <ArrowDownward />
                            </DownloadButton>
                            <ReactTooltip
                                backgroundColor="#5a6099"
                                id="data"
                                data-offset="{'top': 10, 'left': 10}"
                            >
                                download chart data
                            </ReactTooltip>
                        </>
                    }
                    {/* Close Button */}
                    <CloseButton
                        data-tip
                        data-for="ttp"
                        onClick={onDelete}
                    >
                        <Close />
                    </CloseButton>
                    <ReactTooltip
                        backgroundColor="#5a6099"
                        id="ttp"
                        data-offset="{'top': 10, 'left': 10}"
                    >
                        delete chart
                    </ReactTooltip>
                </Options>
            </Title>

            {(() => {
                switch (type) {
                    case 'line':
                        return (<LineChart values={values} indexes={indexes} yaxis={yaxis} />)
                }
                switch (type) {
                    case 'bar':
                        return (<BarChart values={values} indexes={indexes} yaxis={yaxis} />)
                }
            })()
            }
        </ChartContainer>
    )
}

export default ChartManager

// Styled Components

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
    color: gray;

    &:hover {
        color: black;
        background-color: white
    }
`

const DownloadButton = styled.button`
    outline: none;
    border: none;
    background-color: white;
    cursor: pointer;
    color: gray;

    &:hover {
        color: black;
        background-color: white
    }
`

const Options = styled.div`
    outline: none;
    border: none;
    background-color: white;
    position: absolute;
    right: 0;
    top: 0;
`

const Source = styled.div`
    margin-right: 10px;
    display: inline;
`

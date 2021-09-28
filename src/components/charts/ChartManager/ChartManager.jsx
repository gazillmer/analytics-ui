import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTimes} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import LineChart from "../LineChart/LineChart";

const ChartManager = ({name, series, categories, type}) => {

    return (
        <div className="chart-container">
            <div className="chart-title">
                {name}
                <FontAwesomeIcon icon={faTimes} id='button-close'/>
            </div>
            {(() => {
                switch(type) {
                    case 'line':
                        return (<LineChart series={series} categories={categories}/>)
                }
            })()
            }
        </div>
    )
}

export default ChartManager
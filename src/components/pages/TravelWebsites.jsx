import React from 'react';
import LineChart from '../charts/LineChart';
import ChartEditor from '../charts/ChartEditor';

function TravelWebsites() {
    return (
        <div className = 'container'>
            <LineChart />
            <LineChart />
            <LineChart />
            <LineChart />
            <ChartEditor />
        </div>
    )
}
export default TravelWebsites

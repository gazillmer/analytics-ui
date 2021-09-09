import React from 'react';
import Axios from 'axios'

function TravelWebsites() {

    const getData = () => {
        Axios.get("https://analytics-api-325214.rj.r.appspot.com/flights/info").then(
            (response) => {
                console.log(response)
            }
        );
    };

    return (
        <div>
            Hello
            <button onClick={getData}>Get Data from Flights</button>
        </div>
    )
}

export default TravelWebsites

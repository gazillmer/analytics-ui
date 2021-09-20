import React from 'react'
import Axios from 'axios'

import './apiRequest.css'

function ApiRequest() {

    const getValues = () => {
        /*
        Axios.get("http://127.0.0.1:5000/tweets/test").then((response) => {
            console.log(response)
        })*/

        const response = Axios.get("http://127.0.0.1:5000/tweets/info")
        return response
    }

    return (
        <div className = 'api-container'>
            <button onClick={getValues}>Get Values</button>
        </div>
    )
}

export default ApiRequest

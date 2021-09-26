import './flights.css'
import React, { useState } from 'react'
import styled from 'styled-components'
import ChartEditor from '../charts/ChartEditor';

function Flights() {

    const [showEditor, setShowEditor] = useState(false);
    const [charts, setCharts] = useState(getDefault);

    useEffect(() => {
      localStorage.setItem('saved-charts', JSON.stringify(charts));
    }, [charts]);

    return (
        <div className="flights-container">

            <Button onClick={() => setShowEditor(true)}> + </Button>

            {showEditor &&
                <ChartEditor onClose={() => setShowEditor(false)} />
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
    background-color: rgb(15, 15, 202);

    -webkit-box-shadow: 0px 0px 11px -1px rgba(0,0,0,0.5); 
    box-shadow: 0px 0px 5px -1px rgba(0,0,0,0.5);

    &:hover {
        background-color: rgb(55, 41, 105);
    }
`

export default Flights

import React, { useState } from 'react'
import ButtonAdd from '../others/ButtonAdd'
import ChartEditor from '../charts/ChartEditor';
import './flights.css'

function Flights() {
    return(
        <ChartEditor />
    )
}

export default Flights
/*
<div className='flights-grid'>
            <ButtonAdd onClick={handleShow}/>
            {show ? <ChartEditor /> : null}
        </div>
*/
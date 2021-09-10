import React, { useState } from 'react'
import ButtonAdd from '../others/ButtonAdd'
import ChartEditor from '../charts/ChartEditor';

function Flights() {

    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);


    return (
        <div className='flights-grid'>
            <ButtonAdd onClick={handleShow}/>
            {show ? <ChartEditor /> : null}
        </div>
    )
}

export default Flights

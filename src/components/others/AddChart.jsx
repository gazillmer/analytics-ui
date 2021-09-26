import React, { useState } from 'react'
import styled from 'styled-components'
import ChartEditor from '../charts/ChartEditor';

import { FaPlus } from "react-icons/fa";

// Styling
const Button = styled.div`
    font-size: 30px;
    
    top: 90%;
    right: 30px;
    height: 50px;
    width: 50px;
    position: fixed;
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

function AddChart() {

    // Modal chart  control
    const [show, setShow] = useState(false);

    const handleModal = () => {
        setShow(prev => !prev);
    }

    return (
        <>
            <Button onClick={handleModal}>
                + 
            </Button>
            {show ? (<ChartEditor show={show} setShow={setShow} />) : null}
        </>
    )
}


export default AddChart

import React, { useState } from 'react'
import './chartEditor.css'

import {
    Alert, 
    Button,
    Col,
    Dropdown,
    DropdownButton, 
    Form,
    InputGroup, 
    Modal
} from "react-bootstrap";

function ChartEditor() {

    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    const [title, setTitle] = useState("Untitled chart");
    const [type, setType] = useState("line");
    const [fromYear, setFromYear] = useState("2016");
    const [toYear, setToYear] = useState('2021');
    const [index, setIndex] = useState('passengers_paid');
    const [filters, setFilters] = useState('');



    return (
        <div>
            <Button variant="primary" onClick={handleShow}>
                +
            </Button>   
            <Modal show={show} size={"lg"} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add New Chart</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <div>
                        {/* Chart Title */}
                        <Form.Group controlId="title">
                            <Form.Label>Title</Form.Label>
                            <Form.Control
                                placeholder="Enter chart title"
                                value={title}
                                //onchange={({ target: { value } }) => setTitle(value)}
                            />
                        </Form.Group>

                        {/* Select Chart Type */}
                        <Form.Group controlId="chart_type">
                            <Form.Label>Chart type</Form.Label>
                            <Form.Control
                                as="select"
                                custom
                                value={type}
                                //onChange={({ target: { value } }) => setType(value)}
                            >
                                <option value={"Line"}>Line Chart</option>
                                <option value={"Bar"}>Bar Chart</option>
                                <option value={"Heatmap"}>Heatmap Chart</option>
                            </Form.Control>
                        </Form.Group>

                        <Form.Row>
                            {/* From date */}
                            <Form.Group as={Col} controlId="from_year">
                                <Form.Label>From year</Form.Label>
                                <Form.Control
                                    type="number"
                                    placeholder="Enter start month-year"
                                    value={fromYear}
                                // onChange={({ target: { value } }) => setStartYear(value)}
                                />
                            </Form.Group>
                            {/* To date */}
                            <Form.Group as={Col} controlId="to_year">
                                <Form.Label>To year</Form.Label>
                                <Form.Control
                                    type="number"
                                    placeholder="Enter end month-year"
                                    value={toYear}
                                    //onChange={({ target: { value } }) => setEndYear(value)}
                                />
                            </Form.Group>
                        </Form.Row>

                        <Form.Group controlId="index">
                            <Form.Label>Calculate values by</Form.Label>
                            <Form.Control
                                as="select"
                                custom
                                value={index}
                                //onChange={({ target: { value } }) => setIndex(value)}
                            >
                            </Form.Control>
                        </Form.Group>    
                    </div>



                </Modal.Body>


            </Modal>
        </div>
    )
}

export default ChartEditor

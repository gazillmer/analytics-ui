import React, { useState } from 'react'
import './chartEditor.css'

import {
    Alert, Button,
    Col,
    Dropdown,
    DropdownButton, Form,
    InputGroup, Modal
} from "react-bootstrap";

function ChartEditor() {
    return (
        <Modal show size={"lg"} onHide={onCancel}>
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
                            onchange={({ target: { value } }) => setTitle(value)}
                        />
                    </Form.Group>

                    {/* Select Chart Type */}
                    <Form.Group controlId="chart_type">
                        <Form.Label>Chart type</Form.Label>
                        <Form.Control
                            as="select"
                            custom
                            value={type}
                            onChange={({ target: { value } }) => setType(value)}
                        >
                            <option value={"yearly"}>Heatmap Chart</option>
                            <option value={"bump"}>Bump Chart</option>
                        </Form.Control>
                    </Form.Group>

                    <Form.Row>
                        {/* From date */}
                        <Form.Group as={Col} controlId="start_year">
                            <Form.Label>From year</Form.Label>
                            <Form.Control
                                type="number"
                                placeholder="Enter earliest year"
                                value={startYear}
                                onChange={({ target: { value } }) => setStartYear(value)}
                            />
                        </Form.Group>
                        {/* To date */}
                        <Form.Group as={Col} controlId="end_year">
                            <Form.Label>To year</Form.Label>
                            <Form.Control
                                type="number"
                                placeholder="Enter latest year"
                                value={endYear}
                                onChange={({ target: { value } }) => setEndYear(value)}
                            />
                        </Form.Group>
                    </Form.Row>

                    <Form.Group controlId="index">
                        <Form.Label>Index</Form.Label>
                        <Form.Control
                            as="select"
                            custom
                            value={index}
                            onChange={({ target: { value } }) => setIndex(value)}
                        >
                        </Form.Control>
                        <Form.Text className="text-muted">
                            The <strong>Index</strong> is what we use to calculate each
                            record value.
                        </Form.Text>
                    </Form.Group>    
                </div>



            </Modal.Body>


        </Modal>
    )
}

export default ChartEditor

import React, { useState } from 'react'
import Modal from 'react-modal'
import './chartEditor.css'

function ChartEditor() {

    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    const [title, setTitle] = useState("Untitled chart");
    const [chartType, setChartType] = useState("line");
    const [fromYear, setFromYear] = useState("2016");
    const [toYear, setToYear] = useState('2021');
    const [index, setIndex] = useState('passengers_paid');
    const [filters, setFilters] = useState('');

    return (
        <div>
            <button id='create-chart-button' onClick={handleShow}>
                <div id="plus-icon">
                    +
                </div>
            </button>

            <Modal
                className='modal-container'
                closeTimeoutMS={500}
                isOpen={show}
                onRequestClose={handleClose}
                contentLabel="Example Modal"
            >
                <div className="modal-title">Create New Chart</div>
                <hr />
                <form className='form-content'>
                    <label>
                        Name
                        <input
                            type="text"
                            name="name"
                            placeholder="Add chart title"
                            value={title}
                            onChange={({ target: { value } }) => setTitle(value)}
                        />
                    </label>
                    <label>
                        Calculate by
                        <input
                            type="text"
                            name="inxed"
                            placeholder="Select value you want to calculate"
                            value={index}
                            onChange={({ target: { value } }) => setIndex(value)}
                        />
                    </label>
                    <label>
                        Set start year
                        <input
                            type="text"
                            name="fromYear"
                            placeholder="From"
                            value={fromYear}
                            onChange={({ target: { value } }) => setFromYear(value)}
                        />
                    </label>
                    <label>
                        Set end year
                        <input
                            type="text"
                            name="toYear"
                            placeholder="To"
                            value={toYear}
                            onChange={({ target: { value } }) => setToYear(value)}
                        />
                    </label>
                    <label>
                        Chart Type
                        <select
                            value={chartType}
                            name="chart-type"
                            onChange={({ target: { value } }) => setChartType(value)}>
                            <option value={""}>Please choose an option</option>
                            <option value="line">Line</option>
                            <option value="bar">Bar</option>
                            <option value="heatmap">Heatmap</option>
                        </select>
                    </label>

                    <button className='button-submit' type="submit">Create chart</button>
                </form>
            </Modal>
        </div>
    )
}
export default ChartEditor

import React, { useState, useEffect } from 'react'
import { API_URL } from '../../constants';
import axios from 'axios';
import Modal from 'react-modal'
import Loader from '../others/Loader'
import './chartEditor.css'

function ChartEditor() {

    // Modal chart editor control
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    // Chart data
    const [title, setTitle] = useState("Untitled chart");
    const [chartType, setChartType] = useState("line");
    const [fromYear, setFromYear] = useState("2016");
    const [toYear, setToYear] = useState('2021');
    const [index, setIndex] = useState('passengers_paid');
    const [filters, setFilters] = useState('');
    const [chartData, setChartData] = useState(null)

    const url = API_URL

    useEffect(() => {
        axios.get(`${API_URL}/tweets/info`)
            .then(response => {
                setChartData(response.data)
            })
    }, [API_URL])

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
                contentLabel="Chart Editor"
                ariaHideApp={false}
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
                        <select
                            value={index}
                            name="index"
                            placeholder="Select value you want to calculate"
                            onChange={({ target: { value } }) => setIndex(value)}
                        >
                        </select>
                    </label>
                    <label>
                        Set starting date
                        <input
                            type="date"
                            name="fromYear"
                            placeholder="From"
                            value={fromYear}
                            onChange={({ target: { value } }) => setFromYear(value)}
                        />
                    </label>
                    <label>
                        Set ending date
                        <input
                            type="date"
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
                            onChange={({ target: { value } }) => setChartType(value)}
                        >
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

/*
{loading ? (
                    <Loader />
                ) : ( */
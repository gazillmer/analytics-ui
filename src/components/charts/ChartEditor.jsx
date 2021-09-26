import React, { useState } from 'react'
import { useQuery } from 'react-query';
import { API_URL } from '../../constants';
import axios from 'axios';
import Modal from 'react-modal'
import Loader from 'react-loader-spinner';

import './chartEditor.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons';

function ChartEditor({ showEditor, setShowEditor }) {

    // Chart data
    const [title, setTitle] = useState("Untitled chart");
    const [chartType, setChartType] = useState("line");
    const [fromYear, setFromYear] = useState("2016");
    const [toYear, setToYear] = useState('2021');
    const [index, setIndex] = useState('Select value');
    const [filters, setFilters] = useState('');
    //const [chartData, setChartData] = useState([])

    const { data, status } = useQuery('get-info', () => axios.get(`${API_URL}flights/info`))
    console.log(data)

    return (
        <Modal
            onRequestClose={false}
            className='modal-container'
            closeTimeoutMS={500}
            isOpen={true}
            contentLabel="Chart Editor"
            ariaHideApp={false}
        >
            {status === 'loading' ?
                (<div className="spinner">
                    <Loader type={"TailSpin"} color={"#2f324e"} />
                </div>) :
                (<>
                    <div className="modal-header">
                        <div className="modal-title">Create New Chart</div>
                        <FontAwesomeIcon icon={faTimes} className='modal-button-close' />
                    </div>
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
                                onChange={({ target: { value } }) => setIndex(value)}
                            >
                                <option value={""}>Select value</option>
                                {data.data['indexes'].map(value => (
                                    <option key={value} value={value}>{value}</option>
                                ))
                                }
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
                        <label>
                            Filters
                            <select
                                value={filters}
                                name="filters"
                                onChange={({ target: { value } }) => setFilters(value)}
                            >
                                <option value={""}>Select filters</option>
                                {Object.keys(data.data['filters']).map(value => (
                                    <option key={value} value={value}>{value}</option>
                                ))
                                }
                            </select>
                        </label>

                        <button className='button-submit' type="submit">Create chart</button>
                    </form>
                </>)}
        </Modal>
    )
}
export default ChartEditor
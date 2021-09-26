import React, { useState } from 'react'
import { useQuery } from 'react-query';
import { API_URL } from '../../constants';
import axios from 'axios';
import Loader from 'react-loader-spinner';
import Dropdown from 'react-dropdown'

import './chartEditor.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons';

function ChartEditor({ onClose = () => { } }) {

    // Chart data
    const [title, setTitle] = useState("");
    const [chartType, setChartType] = useState("");
    const [fromYear, setFromYear] = useState("2016");
    const [toYear, setToYear] = useState('2021');
    const [index, setIndex] = useState('');
    const [filters, setFilters] = useState('');
    //const [chartData, setChartData] = useState([])

    const { data, status } = useQuery('get-info', () => axios.get(`${API_URL}flights/info`))
    console.log(data)

    return (
        <div className="modal">
            <div className="modal-container">
                {status === 'loading' ?
                    (<div className="spinner">
                        <Loader type={"TailSpin"} color={"#2f324e"} />
                    </div>) :
                    (<>
                        <div className="modal-header">
                            <div className="modal-title">Create New Chart</div>
                            <button className='modal-button-close' onClick={onClose}>
                                <FontAwesomeIcon icon={faTimes} />
                            </button>
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

                                </select>
                            </label>

                            {index === 'Select Value' ? (
                                <p className='alert-index'>Please select a valid index</p>
                            ) : null}
                            <button className='button-submit' type="submit">Create chart</button>
                        </form>
                    </>)}
            </div>
        </div>
    )
}
export default ChartEditor
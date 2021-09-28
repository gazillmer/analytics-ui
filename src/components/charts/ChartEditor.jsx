import React, { useState, useEffect } from 'react'
import Loader from 'react-loader-spinner';

import './chartEditor.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import {Requests} from "../../services/axios/requests";

function ChartEditor({ 
    onClose = () => {},
    onAddChart = () => {}
}) {
    const [chartType, setChartType] = useState("");
    const [formData, setFormData] = useState({});
    const [loading, setLoading] = useState(true);
    const [chartData, setChartData] = useState(null);

    useEffect(() => {
        const getData = async () => {
            setLoading(true);
            const data = await new Requests().getModalData();
            setChartData(data);
            setLoading(false);
        }

        getData();
    }, []);

    const handleFieldChange = (data, fieldName) => {
            setFormData({
                ...formData,
                [fieldName]: data.target.value
            });
    }

    const handleSaveForm = () => {
        onAddChart(formData);
    }

    return (
        <div className="modal">
            <div className="modal-container">
                {loading ?
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
                            <label>
                                Name
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Add chart title"
                                    value={formData?.title}
                                    onChange={e => handleFieldChange(e, 'title')}
                                />
                            </label>
                            <label>
                                Calculate by
                                <select
                                    value={formData?.index}
                                    name="index"
                                    onChange={e => handleFieldChange(e, 'index')}
                                >
                                    <option value={""}>Select value</option>
                                    {chartData['indexes'].map(value => (
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
                                    value={formData?.fromYear}
                                    onChange={e => handleFieldChange(e, 'fromYear')}
                                />
                            </label>
                            <label>
                                Set ending date
                                <input
                                    type="date"
                                    name="toYear"
                                    placeholder="To"
                                    value={formData?.toYear}
                                    onChange={e => handleFieldChange(e, 'toYear')}
                                />
                            </label>
                            <label>
                                Chart Type
                                <select
                                    value={formData?.chartType}
                                    name="chart-type"
                                    onChange={e => handleFieldChange(e, 'chartType')}
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
                                    value={formData?.filters}
                                    name="filters"
                                    onChange={e => handleFieldChange(e, 'filters')}
                                >

                                </select>
                            </label>

                            <button
                                className='button-submit'
                                onClick={handleSaveForm}
                            >Create chart</button>
                    </>)}
            </div>
        </div>
    )
}
export default ChartEditor
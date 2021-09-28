import React, { useState, useEffect } from 'react'
import Loader from 'react-loader-spinner';
import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { Requests } from "../../services/axios/requests";

function ChartEditor({
    onClose = () => { },
    onAddChart = () => { }
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
        <Modal>
            {loading ?
                (<Spinner>
                    <Loader type={"TailSpin"} color={"#2f324e"} />
                </Spinner>) :
                (<>
                    <ModalHeader>
                        <ModalTitle>Create New Chart</ModalTitle>
                        <CloseButton onClick={onClose}>
                            <FontAwesomeIcon icon={faTimes} />
                        </CloseButton>
                    </ModalHeader>
                    <hr style={{marginBottom: "20px", color:"lightgray"}} />
                    <label>
                        Name
                        <Input
                            type="text"
                            name="name"
                            placeholder="Add chart title"
                            value={formData?.title}
                            onChange={e => handleFieldChange(e, 'title')}
                        />
                    </label>
                    <label>
                        Calculate by
                        <Select
                            value={formData?.index}
                            name="index"
                            onChange={e => handleFieldChange(e, 'index')}
                        >
                            <option value={""}>Select value</option>
                            {chartData['indexes'].map(value => (
                                <option key={value} value={value}>{value}</option>
                            ))
                            }
                        </Select>
                    </label>
                    <label>
                        Set starting date
                        <Input
                            type="date"
                            name="fromYear"
                            placeholder="From"
                            value={formData?.fromYear}
                            onChange={e => handleFieldChange(e, 'fromYear')}
                        />
                    </label>
                    <label>
                        Set ending date
                        <Input
                            type="date"
                            name="toYear"
                            placeholder="To"
                            value={formData?.toYear}
                            onChange={e => handleFieldChange(e, 'toYear')}
                        />
                    </label>
                    <label>
                        Chart Type
                        <Select
                            value={formData?.chartType}
                            name="chart-type"
                            onChange={e => handleFieldChange(e, 'chartType')}
                        >
                            <option value={""}>Please choose an option</option>
                            <option value="line">Line</option>
                            <option value="bar">Bar</option>
                            <option value="heatmap">Heatmap</option>
                        </Select>
                    </label>
                    <label>
                        Filters
                        <Select
                            value={formData?.filters}
                            name="filters"
                            onChange={e => handleFieldChange(e, 'filters')}
                        >
                        </Select>
                    </label>

                    <SubmitButton onClick={handleSaveForm}>Create chart</SubmitButton>
                </>)
            }
        </Modal>
    )
}

const Modal = styled.div`
    z-index: 100;
    width:20%;
    position:fixed;
    bottom:0;
    right:0;
    margin:0;
    padding: 20px;
    background-color: #fafafa;
    border-radius: 15px 0 0 15px;
    -webkit-box-shadow: 0px 0px 10px -1px rgba(0,0,0,0.5); 
    box-shadow: 0px 0px 10px -1px rgba(0,0,0,0.5);
    border: none;

    transition: transform 10s;
`
const Spinner = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`
const ModalHeader = styled.div`
    display: flex;
    position: relative;
`
const ModalTitle = styled.div`
    margin-top: 20px;
    margin-bottom: 10px;
    font-size: 28px;
    font-weight: 700;
    background-color: inherit;
`
const CloseButton = styled.button`
    outline: none;
    border: none;
    position: absolute;
    right: 0;
    top: 40%;
    cursor: pointer;

    &hover {
        color: grey;
    }
`
const SubmitButton = styled.button`
    margin: 20px 0;
    width: 100%;
    padding: 12px 20px;
    font-size: 16px;
    border-radius: 10px;
    border: none;
    background-color: rgb(47, 50, 78);
    color: white;
    cursor: pointer;

    &hover {
    background-color: rgb(67, 70, 102);
}
`
const Select = styled.select`
    outline: none;
    background-color: white;
    width: 100%;
    padding: 12px 20px;
    margin: 5px 0 15px 0;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 10px;
    box-sizing: border-box;
`
const Input = styled.input`
    outline: none;
    background-color: white;
    width: 100%;
    padding: 12px 20px;
    margin: 5px 0 15px 0;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 10px;
    box-sizing: border-box;
`

export default ChartEditor
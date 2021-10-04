import React, { useState, useEffect } from 'react'
import Loader from 'react-loader-spinner';
import styled from 'styled-components';

import { Requests } from "../../services/axios/requests";
import { Twitter, Flight, Close, Delete } from '@material-ui/icons';

function ChartEditor({
    onClose = () => { },
    onAddChart = () => { }
}) {

    const [formData, setFormData] = useState({});
    const [loading, setLoading] = useState(true);
    const [chartData, setChartData] = useState(null);
    const [filters, setFilters] = useState({});
    const [flights, setFlights] = useState(true);

    useEffect(() => {
        const getData = async () => {
            setLoading(true);
            const data = await new Requests().getModalData();
            setChartData(data);
            setLoading(false);
        }
        getData();
    }, []);

    const handleFieldChange = (e, fieldName) => {
        setFormData({
            ...formData,
            [fieldName]: e.target.value
        })
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
                            <Close />
                        </CloseButton>
                    </ModalHeader>
                    <ModalContent>
                        <hr style={{ marginBottom: "20px", color: "lightgray" }} />
                        <ChartSource>
                            Source
                            {flights ? (
                                <>
                                    <TwitterButtonInactive
                                        onClick={() => setFlights(false)}
                                        value={formData?.source}
                                    >
                                        <Twitter style={{ color: "#1DA1F2" }} />
                                        <p>Twitter</p>
                                    </TwitterButtonInactive>
                                    <FlightsButton
                                        onClick={() => setFlights(true)}
                                        value={formData?.source}
                                        onChange={e => handleFieldChange(e, 'flights')}
                                    >
                                        <Flight style={{ color: "white" }} />
                                        <p>Flights</p>
                                    </FlightsButton>
                                </>
                            ) : (
                                <>
                                    <TwitterButton
                                        onClick={() => setFlights(false)}
                                        value={formData?.source}
                                        onChange={e => handleFieldChange(e, 'twitter')}>
                                        <Twitter style={{ color: "white" }} />
                                        <p>Twitter</p>
                                    </TwitterButton>
                                    <FlightsButtonInactive
                                        onClick={() => setFlights(true)}
                                        value={formData?.source}
                                        onChange={e => handleFieldChange(e, 'flights')}>
                                        <Flight style={{ color: "#026b02" }} />
                                        <p>Flights</p>
                                    </FlightsButtonInactive>
                                </>)
                            }
                        </ChartSource>
                        {flights ? (
                            //Flights
                            <FlightsSection>
                                <label>{/* Chart Title */}
                                    Title
                                    <Input
                                        type="text"
                                        name="title"
                                        placeholder="Add chart title"
                                        value={formData?.title}
                                        onChange={e => handleFieldChange(e, 'title')}
                                    />
                                </label>
                                <label>{/* Index */}
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
                                <label>{/* Starting Date */}
                                    Set starting date
                                    <Input
                                        type="date"
                                        name="startDate"
                                        placeholder="From"
                                        value={formData?.startDate}
                                        onChange={e => handleFieldChange(e, 'startDate')}
                                    />
                                </label>
                                <label>{/* Ending Date */}
                                    Set ending date
                                    <Input
                                        type="date"
                                        name="endDate"
                                        placeholder="To"
                                        value={formData?.endDate}
                                        onChange={e => handleFieldChange(e, 'endDate')}
                                    />
                                </label>
                                <label>{/* Chart Type*/}
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
                                {formData.chartType === 'bar' && (
                                    <label>{/* Chart Title */}
                                        Number of values you wish to see
                                        <Input
                                            type="number"
                                            min="5"
                                            max="15"
                                            name="values"
                                            placeholder="Add chart title"
                                            value={formData?.nValues}
                                            onChange={e => handleFieldChange(e, 'nValues')}
                                        />
                                    </label>
                                )}
                                <label>{/* Filters */}
                                    Filters {/* Seleção do filtro: OK */}
                                    <Dropdown
                                        placeholder="Select an option"
                                    >
                                        <option value={""}>Not available yet</option>
                                        {Object.keys(chartData['filters']).map((filter) => {
                                            return (
                                                <option
                                                    key={filter}
                                                    value={formData?.filters}
                                                    onClick={() =>
                                                        setFilters(existing => ({
                                                            ...existing, [filter]: ""
                                                        }))
                                                    }
                                                >
                                                    {filter}
                                                </option>
                                            )
                                        })
                                        }
                                        {console.log(filters)}
                                    </Dropdown>
                                    {Object.entries(filters).map((filter) => {
                                        console.log(filters);
                                        return (
                                            <>
                                                <FilterDsc>
                                                    {filter}
                                                </FilterDsc>
                                                <Filters>
                                                    <FilterInput
                                                        type="text"
                                                        name="filterValue"
                                                        placeholder="Select value"
                                                        value={filters?.filter}
                                                        onChange={(e) => {
                                                            setFilters(current => ({
                                                                ...current,
                                                                [filter]: e.target.value
                                                            }))
                                                        }}
                                                    />
                                                    <FilterDelete
                                                        onClick={() => setFilters(current => {
                                                            console.log("delete: ", filter);
                                                            const { [filter]: x, ...rest } = current;
                                                            return rest;
                                                        })}
                                                    >
                                                        <Delete />
                                                    </FilterDelete>
                                                </Filters>
                                            </>
                                        )
                                    })}
                                </label>
                            </FlightsSection>
                        ) : (
                            // Twitter section
                            <TwitterSection>
                                <label>{/* Chart Title */}
                                    Name
                                    <Input
                                        type="text"
                                        name="name"
                                        placeholder="Add chart title"
                                        value={formData?.title}
                                        onChange={e => handleFieldChange(e, 'title')}
                                    />
                                </label>
                                <label>{/* Starting Date */}
                                    Set starting date
                                    <Input
                                        type="date"
                                        name="startDate"
                                        placeholder="From"
                                        value={formData?.startDate}
                                        onChange={e => handleFieldChange(e, 'startDate')}
                                    />
                                </label>
                                <label>{/* Ending Date */}
                                    Set ending date
                                    <Input
                                        type="date"
                                        name="endDate"
                                        placeholder="To"
                                        value={formData?.endDate}
                                        onChange={e => handleFieldChange(e, 'endDate')}
                                    />
                                </label>
                                <label>{/* Chart Type*/}
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
                                <label style={{ display: "inline" }}>{/* Filters */}
                                    Filters
                                    <Dropdown
                                        placeholder="Select an option"
                                        onChange={e => handleFieldChange(e, 'filters')}
                                        value={formData?.filters}
                                    >
                                        <option value={""}>Not available yet</option>
                                        {Object.keys(chartData['filters']).map((filter) => {
                                            return (
                                                <option
                                                    key={filter}
                                                    value={filter}
                                                    onClick={() =>
                                                        setFilters((existing) => ({
                                                            ...existing,
                                                            [filter]: [],
                                                        }))
                                                    }>
                                                    {filter}
                                                </option>
                                            )
                                        })
                                        }
                                    </Dropdown>
                                </label>
                            </TwitterSection>
                        )
                        }
                        <SubmitButton onClick={handleSaveForm}>Create chart</SubmitButton>
                    </ModalContent>
                </>)
            }
        </Modal >
    )
}

export default ChartEditor

// Styled Components -------------------------------------

const Modal = styled.div`
    z-index: 100;
    height: 100vh;
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
const ModalContent = styled.div`
    overflow: auto;
`
const ChartSource = styled.div`
    display: flex;
    margin-bottom: 20px;
    line-height: 40px;
    vertical-align: center;
`
const TwitterSection = styled.div`
    transition: 0.5s;
`
const FlightsSection = styled.div`
    transition: 0.5s;
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
    background-color: #fafafa;

    &:hover {
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

    &:hover {
        transition: 0.1s;
        background-color: #5a6099;
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
    height: 40px;
    padding: 12px 20px;
    margin: 5px 0 15px 0;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 10px;
    box-sizing: border-box;
`
const Dropdown = styled(Select)`
    width: 100%;
    padding: 12px 10px;
`
const TwitterButton = styled.div`
    background-color: #1DA1F2;
    height: 30px;
    width: 100px;
    border-radius: 10px;
    border: 1px solid #1DA1F2;
    display: flex;
    padding: 5px;
    align-items: center;
    margin-left: 15px;
    color: white;
    justify-content: space-around;
    cursor: pointer;
    font-size: 14px;

    &:hover {
        background-color: #188fda;
        transition: 0.1s;
    }
`
const FlightsButton = styled.div`
    background-color: green;
    height: 30px;
    width: 100px;
    border-radius: 10px;
    border: 1px solid #026b02;
    display: flex;
    padding: 5px;
    align-items: center;
    margin-left: 15px;
    color: white;
    justify-content: space-around;

    cursor: pointer;
    font-size: 14px;

    &:hover {
        background-color: #026b02;
        transition: 0.1s;
    }
`
const TwitterButtonInactive = styled(TwitterButton)`
    background-color: #fafafa;
    color: #1DA1F2;
    border: 1px solid #1DA1F2;

    &:hover {
        background-color: #188fda;
        transition: 0.1s;
    }
`
const FlightsButtonInactive = styled(FlightsButton)`
    background-color: #fafafa;
    color: #026b02;
    border: 1px solid #026b02;

    &:hover {
        background-color: #026b02;
        transition: 0.1s;
    }
`
const FilterDsc = styled.div`
    font-size: 14px;
    margin: 10px 0 10px 0;
`
const Filters = styled.div`
    display: flex;
    flex-flow: row wrap;
`
const FilterInput = styled.input`
    outline: none;
    height: 40px;
    background-color: white;
    border-radius: 10px 0 0 10px;
    width: calc(100% - 40px);
    padding: 12px 20px;
    display: inline;
    border: 1px solid #ccc;
    box-sizing: border-box;
`
const FilterDelete = styled.button`
    color: white;
    background-color: rgb(47, 50, 78);
    border: none;
    border-radius: 0 10px 10px 0;
    height: 40px;
    width: 40px;
    cursor: pointer;

    &:hover {
        transition: 0.1s;
        background-color: #5a6099;
    }

`

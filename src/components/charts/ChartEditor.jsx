import React, { useState, useEffect } from 'react'
import Loader from 'react-loader-spinner';
import styled from 'styled-components';

import { Requests } from "../../services/axios/requests";
import { Twitter, Flight, Close, Delete, ErrorOutline } from '@material-ui/icons';

function ChartEditor({
    onClose = () => { },
    onAddChart = () => { }
}) {

    const [formData, setFormData] = useState({});
    const [loading, setLoading] = useState(true);
    const [chartData, setChartData] = useState(null);
    const [twitterData, setTwitterData] = useState(null);
    const [filters, setFilters] = useState({});
    const [source, setSource] = useState('flights');
    const [retrieveData, setRetrieveData] = useState({})

    useEffect(() => {
        const getData = async () => {
            setLoading(true);

            const data = await new Requests().getModalData('flights');
            setChartData(data);

            const twitterData = await new Requests().getModalData('twitter');
            setTwitterData(twitterData);

            setLoading(false);
        }
        getData();

        setFormData({
            ...formData,
            'source': 'flights'
        })
    }, []);

    useEffect(() => {
        setRetrieveData({
            ...formData,
            'filters': filters
        })
    }, [filters])

    const handleFieldChange = (e, fieldName) => {
        setFormData({
            ...formData,
            [fieldName]: e.target.value
        })
    }
    const handleSaveForm = () => {
        onAddChart(retrieveData);
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
                        <Line />
                        <ChartSource>
                            Source
                            {source == 'flights' ? (
                                <>
                                    <TwitterButtonInactive
                                        onClick={() => {
                                            setSource('twitter');
                                            setFormData({
                                                ...formData,
                                                'source': 'twitter'
                                            });
                                        }}>
                                        <Twitter style={{ color: "#1DA1F2" }} />
                                        <p>Twitter</p>
                                    </TwitterButtonInactive>
                                    <FlightsButton>
                                        <Flight style={{ color: "white" }} />
                                        <p>Flights</p>
                                    </FlightsButton>
                                </>
                            ) : (
                                <>
                                    <TwitterButton>
                                        <Twitter style={{ color: "white" }} />
                                        <p>Twitter</p>
                                    </TwitterButton>
                                    <FlightsButtonInactive
                                        onClick={() => {
                                            setSource('flights');
                                            setFormData({
                                                ...formData,
                                                'source': 'flights'
                                            });
                                        }}>
                                        <Flight style={{ color: "#be03b5" }} />
                                        <p>Flights</p>
                                    </FlightsButtonInactive>
                                </>)
                            }
                        </ChartSource>
                        {source == 'flights' ? (
                            //Flights
                            <FlightsSection>
                                Title
                                <Input
                                    type="text"
                                    name="title"
                                    placeholder="Add chart title"
                                    value={formData?.title}
                                    onChange={e => handleFieldChange(e, 'title')}
                                />
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
                                Set starting date
                                <Input
                                    type="date"
                                    name="startDate"
                                    placeholder="From"
                                    value={formData?.startDate}
                                    onChange={e => handleFieldChange(e, 'startDate')}
                                />
                                Set ending date
                                <Input
                                    type="date"
                                    name="endDate"
                                    placeholder="To"
                                    value={formData?.endDate}
                                    onChange={e => handleFieldChange(e, 'endDate')}
                                />
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
                                {formData.chartType === 'bar' && (
                                    <label>Select number of values
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
                                <Dropdown>
                                    <option value="">Select filters</option>
                                    {Object.keys(chartData?.filters).map((filter) => {
                                        return (
                                            <option
                                                key={filter}
                                                onClick={() => setFilters({
                                                    ...filters, [filter]: []
                                                })}
                                            /* onClick={() => {
                                                setFormData(current => ({
                                                    ...current,
                                                    filters: { [filter]: "" }
                                                }));
                                                console.log(formData)
                                            }} */
                                            >
                                                {filter}
                                            </option>
                                        )
                                    })}
                                </Dropdown>

                                {Object.entries(filters).map(([filter, sel]) => {
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
                                                    /*                                                     onChange={(e) => {
                                                                                                            setFormData(current => ({ ...current, filters: { [filter]: e.target.value } }))
                                                                                                        }} */
                                                    onChange={(e) => {
                                                        setFilters(current => ({ ...current, [filter]: e.target.value }))
                                                    }}
                                                />
                                                <FilterDeleteButton
                                                    onClick={() => setFilters(current => {
                                                        const { [filter]: _, ...rest } = current;
                                                        return rest;
                                                    })}

                                                >
                                                    <Delete />
                                                </FilterDeleteButton>
                                            </Filters>
                                        </>
                                    )
                                })}
                                {(Object.keys(filters).length > 1 && formData.chartType == 'bar') &&
                                    <FilterWarningMsg>
                                        <ErrorOutline />
                                        Warning: bar chart only accepts one filter.
                                    </FilterWarningMsg>
                                }
                            </FlightsSection>
                        ) : (
                            // Twitter section
                            <TwitterSection>
                                Title
                                <Input
                                    type="text"
                                    name="title"
                                    placeholder="Add chart title"
                                    value={formData?.title}
                                    onChange={e => handleFieldChange(e, 'title')}
                                />
                                Set starting date
                                <Input
                                    type="date"
                                    name="startDate"
                                    placeholder="From"
                                    value={formData?.startDate}
                                    onChange={e => handleFieldChange(e, 'startDate')}
                                />
                                Set ending date
                                <Input
                                    type="date"
                                    name="endDate"
                                    placeholder="To"
                                    value={formData?.endDate}
                                    onChange={e => handleFieldChange(e, 'endDate')}
                                />
                                Chart Type
                                <Select
                                    value={formData?.chartType}
                                    name="chart-type"
                                    onChange={e => handleFieldChange(e, 'chartType')}
                                >
                                    <option value={""}>Please choose an option</option>
                                    <option value="line">Line</option>
                                    <option value="bar">Bar</option>
                                </Select>
                                {formData.chartType === 'bar' && (
                                    <>
                                        <Input
                                            type="number"
                                            min="5"
                                            max="15"
                                            name="values"
                                            placeholder="Select number of values"
                                            value={formData?.nValues}
                                            onChange={e => handleFieldChange(e, 'nValues')}
                                        />

                                    </>
                                )}
                                <Dropdown>
                                    <option value="">Select filters</option>
                                    {Object.keys(twitterData['filters']).map((filter) => {
                                        return (
                                            <option
                                                key={filter}
                                                onClick={() => setFilters({
                                                    ...filters, [filter]: []
                                                })}
                                            >
                                                {filter}
                                            </option>
                                        )
                                    })}
                                </Dropdown>
                                {Object.entries(filters).map(([filter, sel]) => {
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
                                                    onChange={(e) => {
                                                        setFilters(current => ({ ...current, [filter]: e.target.value }))
                                                    }}
                                                />
                                                <FilterDeleteButton
                                                    onClick={() => setFilters(current => {
                                                        const { [filter]: _, ...rest } = current;
                                                        return rest;
                                                    })}
                                                >
                                                    <Delete />
                                                </FilterDeleteButton>
                                            </Filters>
                                        </>
                                    )
                                })}
                                {formData.chartType === 'bar' && (
                                    <>
                                        Select value
                                        <Dropdown>
                                            <option value="">Select value you want to check</option>
                                            {Object.keys(twitterData['filters']).map((filter) => {
                                                return (
                                                    <option
                                                        key={filter}
                                                        onClick={() => setRetrieveData({
                                                            ...retrieveData,
                                                            'calcBy': filter
                                                        })}
                                                    >
                                                        {filter}
                                                    </option>
                                                )
                                            })}
                                        </Dropdown>
                                    </>
                                )}
                            </TwitterSection>
                        )
                        }
                        <SubmitButton onClick={handleSaveForm}>
                            Create chart
                        </SubmitButton>
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
    overflow-y: auto;
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
`
const Line = styled.hr`
    margin-bottom: 20px;
    color: #fafafa;
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
    margin-top: 20px;
    margin-bottom: 30px;
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
    background-color: #5a6099;
    color: white;
    border: none;
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
    background-color: rgb(190, 3, 181);
    height: 30px;
    width: 100px;
    border-radius: 10px;
    border: 1px solid rgb(190, 3, 181);
    display: flex;
    padding: 5px;
    align-items: center;
    margin-left: 15px;
    color: white;
    justify-content: space-around;

    cursor: pointer;
    font-size: 14px;

    &:hover {
        background-color: rgb(190, 3, 181);
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
    color: rgb(190, 3, 181);
    border: 1px solid rgb(190, 3, 181);

    &:hover {
        background-color: rgb(190, 3, 181);
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
const FilterDeleteButton = styled.button`
    color: white;
    font-size: 18px;
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
const FilterWarningMsg = styled.div`
    margin-top: 20px;
    font-size: 16px;
    line-height: 20px;
    display: flex;
    align-items: center;
    height: 30px;
    padding: 10px;
    background-color: yellow;
    border-radius: 10px;
    column-gap: 10px;
    -webkit-box-shadow: 0px 0px 10px -1px rgba(0,0,0,0.5); 
    box-shadow: 0px 0px 10px -1px rgba(0,0,0,0.5);

`
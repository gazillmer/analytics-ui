import React from 'react'
import { Link } from 'react-router-dom'
import { FlightTakeoff, Info, Twitter, Work } from '@material-ui/icons';
import styled from 'styled-components';

import './sidebar.css'

const SidebarMenu = styled.div`
    width: 275px;
    height: 100vh;
    background-color: rgb(47, 50, 78);
    color: white;  
    position: sticky;
`
const SidebarTitle = styled.div`
    font-size: 36px;
    height: 150px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgb(36, 38, 59);
    cursor: pointer;
`
const SidebarList = styled.div`
    list-style: none;
    background-color: rgb(47, 50, 78);
`
const SidebarListItem = styled.div`
    padding: 5px;
    padding-left: 10px;
    cursor: pointer;
    display: flex;
    align-items: center;
    border-radius: 10px;
    height: 35px;
    margin-bottom: 5px;
    background-color: inherit;

    &.active {
        background-color: rgb(67, 70, 102);
    }

    &:hover {
        margin-left: 5px;
        transition: 0.1s;
    } 
`
const SidebarListItemPOA = styled.div`
    padding: 5px;
    font-size: 14px;
    color: red;
    cursor: pointer;
    display: flex;
    align-items: center;
    height: 35px;
    margin-bottom: 5px;
    padding-left: 55px;
    background-color: rgb(67, 70, 102);

    &:hover {
        margin-left: 15px;
        transition: 0.1s
    } 
`
function Sidebar() {
    return (
        <SidebarMenu>
            <SidebarTitle>Analytics UI</SidebarTitle>
            <SidebarList>
                <SidebarListItem>
                    <Link to="/flights" style={{ textDecoration: 'none', color: "white" }}>
                        <FlightTakeoff className="sidebarIcon" />
                        dashboard
                    </Link>
                </SidebarListItem>
                <SidebarListItemPOA>
                    <Link to="/POA" style={{ textDecoration: 'none', color: "white" }}>
                        Porto Alegre
                    </Link>
                </SidebarListItemPOA>
                <SidebarListItem>
                    <Link to="/websites" style={{ textDecoration: 'none', color: "white" }}>
                        <Work className="sidebarIcon" />
                        travel-related websites
                    </Link>
                </SidebarListItem>
                <SidebarListItem>
                    <Link to="/about" style={{ textDecoration: 'none', color: "white" }}>
                        <Info className="sidebarIcon" />
                        about
                    </Link>
                </SidebarListItem>
            </SidebarList>
        </SidebarMenu>
    )
}

export default Sidebar

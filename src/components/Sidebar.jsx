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
    padding: 10px;
    background-color: rgb(47, 50, 78);
`
const SidebarListItem = styled.div`
    padding: 5px;
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
        transition: 5px;
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
                        flight information
                    </Link>
                </SidebarListItem>
                <SidebarListItem>
                    <Link to="/tweets" style={{ textDecoration: 'none', color: "white" }}>
                        <Twitter className="sidebarIcon" />
                        social-media
                    </Link>
                    </SidebarListItem>
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

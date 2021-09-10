import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import { FlightTakeoff, Info, Twitter, Work, Poll } from '@material-ui/icons';

import './sidebar.css'

function Sidebar() {
    return (
        <div className="sidebar">
            <h3 className="sidebarTitle">Analytics UI</h3>
            <ul className="sidebarList">
                <li className="sidebarListItem">
                    <Link to="/flights" style={{ textDecoration: 'none', color: "white"}}>
                        <FlightTakeoff className="sidebarIcon" />
                        flight information
                    </Link>
                </li>
                <li className="sidebarListItem">
                    <Link to="/#" style={{ textDecoration: 'none', color: "white"}}>
                        <Twitter className="sidebarIcon" />
                        social-media
                    </Link>
                </li>
                <li className="sidebarListItem">
                    <Link to="/#" style={{ textDecoration: 'none', color: "white"}}>
                        <Work className="sidebarIcon" />
                        travel-related websites
                    </Link>
                </li>
                <li className="sidebarListItem">
                    <Link to="/about" style={{ textDecoration: 'none', color: "white"}}>
                        <Info className="sidebarIcon" />
                        about
                    </Link>
                </li>
            </ul>

        </div>
    )
}

export default Sidebar

import React from 'react'
import './sidebar.css'

import { FlightTakeoff, Info, Twitter, Work, Poll } from '@material-ui/icons';


function Sidebar() {
    return (
        <div className="sidebar">

            <h3 className="sidebarTitle">Analytics UI</h3>
            <ul className="sidebarList">
                <li className="sidebarListItem active">
                    <FlightTakeoff className="sidebarIcon" />
                    flight information
                </li>
                <li className="sidebarListItem">
                    <Twitter className="sidebarIcon" />
                    social-media
                </li>
                <li className="sidebarListItem">
                    <Work className="sidebarIcon" />
                    travel-related websites
                </li>
                <li className="sidebarListItem">
                    <Poll className="sidebarIcon" />
                    google trends
                </li>
                <li className="sidebarListItem">
                    <Info className="sidebarIcon" />
                    about
                </li>
            </ul>

        </div>
    )
}

export default Sidebar

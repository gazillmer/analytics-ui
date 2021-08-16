import React from 'react'
import './featuredInfo.css'

import {ArrowDownward, ArrowUpward} from "@material-ui/icons"

function FeaturedInfo() {
    return (
        <div className='featured'>
            <div className="featuredItem">
                <span className="featuredTitle">Flights from POA to GRU</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">Some chart here</span>
                    <span className="featuredMoneyRate">Movement <ArrowDownward /> </span>
                    <span className="featuredSub">Some info here</span>
                </div>
            </div>
            
            <div className="featuredItem">
                <span className="featuredTitle">Profit</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">R$ 16,96</span>
                    <span className="featuredMoneyRate">+13,4 <ArrowUpward /> </span>
                    <span className="featuredSub">Compared to last month</span>
                </div>
            </div>
        </div>
    )
}

export default FeaturedInfo

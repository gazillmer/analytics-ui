import React from 'react'
import Spinner from 'react-loader-spinner'

function Loader() {
    return (
        <div className = 'loader-wrapper'>
            <Spinner 
                type="Plane"
                color="#00BFFF"
                height={100}
                width={100}
                visible={true}
            />         
        </div>
    )
}
export default Loader

import React from 'react'
import Nodataimage from "../../assets/image/no-data.png"
import "./nodata.scss"

export default function Nodatacomponent() {
    return (
        <div class="no-data-screen-main" style={{display: "none"}}>
            <div class="no-data-icon">
                <div className="no-data-image-one">
                    <img src={Nodataimage} alt="Nodataimage" />
                </div>
                <div className="no-data-image-two">
                    <img src={Nodataimage} alt="Nodataimage" />
                </div>
            </div>
            <div class="no-data-message">
                <span>No Data Available</span>
                <span>No Data Available</span>
            </div>
            <div class="no-data-subtext">
                <p>Please check back later or upload data</p>
                <p>Please check back later or upload data</p>
            </div>
        </div>
    )
}

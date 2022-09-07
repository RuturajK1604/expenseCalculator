import React from "react";
import "./ChartBar.css"

const ChartBar = props => {

    let barFilled= "0%";

    if(props.max >0){
        barFilled = Math.round((props.value/props.maxValu) * 100) +"%";
    }
    return<div className="chart-bar">
        <div className="chart-bar__inner">
            <div className="chart-bar__fill" style={{height:barFilled}}></div>
        </div>
        <div className="chart-bar__lable">{props.lable}</div>
    </div>
}

export default ChartBar;
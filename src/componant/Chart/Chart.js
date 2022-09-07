import React from "react";
import "./Chart.css";
import ChartBar from "./ChartBar"


const Chart = (props) => {
    const dataPoints = props.dataPoints.map(dataPoint => dataPoints.value)
    const maxValue = Math.max(...dataPointValues);
    return(
        <div className="chart">
            {props.dataPoints.map((dataPoint) => (
               <ChartBar key={dataPoint.lable}
               value={dataPoint.value}
               maxValue={maxValue}
               lable={dataPoint.lable}
               /> 
            ))}
        </div>
    )
}

export default Chart;
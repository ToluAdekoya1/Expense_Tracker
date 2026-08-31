// import React from "react";
// import { useState } from "react";
import ChartBar from "./ChartBar";

export default function Chart(props: any) {
  const dataPointValues = props.dataPoints.map((dataPoint: any) => dataPoint.value);
  const totalMaximum = Math.max(...dataPointValues); //Gets the maximum values from dataPointValues

  return (
    <div className="chart p-[1rem] rounded-xl text-black bg-[#fad4c7] text-center flex justify-around h-[10rem]">
      {props.dataPoints.map((dataPoint: any) => (
        <ChartBar
          value={dataPoint.value}
          key={dataPoint.label}
          maxValue={totalMaximum}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
}

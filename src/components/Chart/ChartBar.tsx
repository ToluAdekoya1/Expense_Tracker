// import React from "react";
// import { useState } from "react";
import "./ChartBar.css";
export default function ChartBar(props: any) {
  let barFillHeight = "0%";

  if (props.maxValue > 0) {
    barFillHeight = Math.round((props.value / props.maxValue) * 100) + "%"; //Configure the percentage between 0 and 100 by which the bar will be filled.
  }
  return (
    <div
      className="chart-bar h-[100%] flex flex-col 
		items-center"
    >
      <div
        className="chart-bar_inner h-[100%] 
			w-[0.9rem] rounded-xl flex flex-col justify-end"
      >
        <div className="chart-bar_fill" style={{ height: barFillHeight }}></div>
      </div>
      <div className="chart-bar_label font-bold text-[0.5rem] text-center;">
        {props.label}
      </div>
    </div>
  );
}

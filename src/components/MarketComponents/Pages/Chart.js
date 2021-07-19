import React from "react";

import TermsSwitcher from "../../TermsSwitcher";
import Chart from "../../../assets/chart.png";
import classes from "./pages.module.css";

const ChartPage = (props) => {
  return (
    <div className={classes.chart}>
      <div className="flex-between">
        <h1>{props.title}</h1>
        <TermsSwitcher term1="24 Hours" term2="1 Week" term3="1 Month" />
      </div>
      <img src={Chart} alt="chart" />
    </div>
  );
};

export default ChartPage;

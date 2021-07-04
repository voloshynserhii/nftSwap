import React from "react";
import classes from "./home-slider.module.css";

const SliderItem = (props) => {
  
  return (
    <div className={`flex-column ${props.className}`}>
      <img className={classes.logo} src={props.image} alt={props.name} />
      <div className="flex-center">
        <h5>{props.name}</h5>
        <span>${props.price}</span>
      </div>
      <h3 style={props.percentageColor}>{props.percentage}%</h3>
    </div>
  );
};

export default SliderItem;

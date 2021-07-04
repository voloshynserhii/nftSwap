import React from "react";

const SliderItem = (props) => {
  return (
    <div className={`flex-center ${props.className}`}>
      <img src={props.image} alt={props.name} />
      <div className="flex-center">
        <h5>{props.name}</h5>
        <span>${props.price}</span>
        <h3>{props.percentage}%</h3>
      </div>
    </div>
  );
};

export default SliderItem;

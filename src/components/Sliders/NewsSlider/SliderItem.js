import React from "react";
import classes from "../sliders.module.css";

const SliderItem = (props) => {
  return (
    <div className={`flex ${props.className}`}>
      <img className={classes.newsImage} src={props.image} alt={props.name} />
      <div className="flex-column flex-left">
        <div className={`inline ${classes.newsTitle}`}>
          <span>{props.source}</span>
          <span>{props.date}</span>
          <span>{props.topic}</span>
        </div>
        <div className={classes.newsText}>{props.text}</div>
        <div className={classes.link} onClick={props.onRead}>Read More</div>
      </div>
    </div>
  );
};

export default SliderItem;

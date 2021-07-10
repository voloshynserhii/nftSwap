import React, {useState, useEffect} from "react";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

import SliderItem from "./SliderItem";
import ArrowIcon from "../../../assets/icons/slider-arrow.svg";
import {NEWS} from './utils';
import classes from "../sliders.module.css";

const NewsSlider = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    setNews(NEWS);
  }, []);
  
  return (
    <CarouselProvider
      className={classes.carousel}
      naturalSlideWidth={400}
      naturalSlideHeight={400}
      visibleSlides={1.2}
      totalSlides={3}
      step={1}
      isIntrinsicHeight
      infinite
    >
      <h2>News</h2>
      <Slider className={classes.slider}>
      {news.map((slide, index) => (
          <Slide key={index} index={index} classNameHidden="mobile-hidden">
            <SliderItem
              className={classes.sliderItem}
              image={slide.image}
              source={slide.source}
              date={slide.date}
              topic={slide.topic}
              text={slide.text}
            />
          </Slide>
        ))}
      </Slider>
      <ButtonBack className={classes.buttonBack}>
        <img src={ArrowIcon} alt="back" />
      </ButtonBack>
      <ButtonNext className={classes.buttonNext}>
        <img src={ArrowIcon} alt="next" />
      </ButtonNext>
    </CarouselProvider>
  );
};
export default NewsSlider;

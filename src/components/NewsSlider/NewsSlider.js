import React from "react";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

import SliderItem from "../TopMoversSlider/SliderItem";
import ArrowIcon from "../../assets/icons/slider-arrow.svg";
import classes from "../TopMoversSlider/home-slider.module.css";

const NewsSlider = () => {
  return (
    <CarouselProvider
      className={classes.carousel}
      naturalSlideWidth={400}
      naturalSlideHeight={400}
      visibleSlides={1.5}
      totalSlides={3}
      step={1}
      isIntrinsicHeight
      infinite
    >
      <h2>News</h2>
      <Slider>
        <Slide index={0} classNameHidden="mobile-hidden">
          <SliderItem className={classes.sliderItem} />
        </Slide>
        <Slide index={1} classNameHidden="mobile-hidden">
          <SliderItem className={classes.sliderItem} />
        </Slide>
        <Slide index={2} classNameHidden="mobile-hidden">
          <SliderItem className={classes.sliderItem} />
        </Slide>
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

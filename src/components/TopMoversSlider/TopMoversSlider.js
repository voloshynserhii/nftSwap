import React, { useState, useEffect } from "react";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

import SliderItem from "./SliderItem";
import ArrowIcon from "../../assets/icons/slider-arrow.svg";
import classes from "./home-slider.module.css";
import { TOP_MOVERS } from "./utils";

const TopMoversSlider = () => {
  const [movers, setmovers] = useState(TOP_MOVERS);

  useEffect(() => {
    setmovers(TOP_MOVERS);
  }, []);

  return (
    <CarouselProvider
      className={classes.carousel}
      naturalSlideWidth={400}
      naturalSlideHeight={400}
      visibleSlides={3}
      totalSlides={movers.length}
      step={1}
      isIntrinsicHeight
      infinite
    >
      <h2>Top Movers</h2>
      <Slider className={classes.slider}>
        {movers.map((slide, index) => (
          <Slide key={index} index={index} classNameHidden="mobile-hidden">
            <SliderItem
              className={classes.sliderItem}
              image={slide.image}
              name={slide.name}
              price={slide.price}
              percentage={slide.percentage}
              percentageColor={slide.percentage > 0 ? {color: '#0EC9B5'} : {color: '#FF2A57'}}
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
export default TopMoversSlider;

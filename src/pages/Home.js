import React from "react";

import {TopMoversSlider, NewsSlider} from "../components/Sliders";
import { LogoName, StartButton } from "../components/UI";
import CryptocurrencyTable from "../components/CryptocurrencyTable";
import HomeImage from "../assets/home-front.png";
import classes from "./home.module.css";

const Home = () => {
  return (
    <div className={`${classes.home} full-width`}>
      <div className={`${classes.start}`} style={bg}>
        <LogoName path="/" className={classes.logo} />
        <h3>Smart Bridge to Community</h3>
        <h6>
          A platform to create, stake and swap Dfinity tokens. Swap your ICP to
          multiple assets on the Dfinity chain.
        </h6>
        <StartButton className={classes.startButton}>Get Started</StartButton>
      </div>
      <div className="flex-between">
        <TopMoversSlider />
        <NewsSlider />
      </div>
    
      <CryptocurrencyTable />
   
    </div>
  );
};

let bg = {
  background: `url(${HomeImage}) center no-repeat`,
  backgroundSize: "cover",
};

export default Home;

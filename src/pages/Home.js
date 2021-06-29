import React from 'react';

import HomeImage from '../assets/home-front.png';
import classes from './home.module.css';

const Home = () => {
    return (
        <div className={classes.home}>
            <div className={`${classes.start} full-width`}>
                <img className="full-width" src={HomeImage} alt="home" />
            </div>
        </div>
    )
};

export default Home;
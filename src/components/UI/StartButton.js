import React from 'react';

import StartArrowIcon from '../../assets/icons/startArrow.svg';
import './ui.css';

const StartButton = props => {
    return (
        <div className={`flex-center ${props.className}`} onClick={props.onStart}>
            <span>{props.children}</span>
            <img src={StartArrowIcon} alt="start" />
        </div>
    );
};

export default StartButton;
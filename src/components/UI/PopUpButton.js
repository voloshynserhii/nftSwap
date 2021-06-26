import React from 'react';

import './ui.css';

const PopUpButton = props => {
    return (
        <div className={`popup-button ${props.className}`} onClick={props.onClick}>
            <span>{props.children}</span>
        </div>
    );
};

export default PopUpButton;
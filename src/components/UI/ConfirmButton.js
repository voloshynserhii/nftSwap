import React from 'react';

import './ui.css';

const ConfirmButton = props => {
    return (
        <button className={`flex-center button-popup confirm-button ${props.className}`} onClick={props.onConfirm}>
            {props.children}
        </button>
    );
};

export default ConfirmButton;
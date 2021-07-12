import React from 'react';

import './ui.css';

const ConfirmButton = props => {
    return (
        <div className="flex-center confirm-button">
            {props.children}
        </div>
    );
};

export default ConfirmButton;
import React from 'react';

const SwitchMode = props => {
    return (
        <div className={`switch flex-center ${props.className}`} onClick={props.onSwitchMode}>
            <img src={props.image} alt="mode" />
        </div>
    );
};

export default SwitchMode;
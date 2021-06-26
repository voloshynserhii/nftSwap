import React from 'react';

import './popup-components.css';

const PopUpLayer = props => {
    return (
        <div className="popup-layer">
            {props.children}
        </div>
    )
};
export default PopUpLayer;
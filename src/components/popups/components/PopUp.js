import React from 'react';

import './popup-components.css';

const PopUp = props => {
    return (
        <div className="popup flex-column">
            {props.children}
        </div>
    )
};
export default PopUp;
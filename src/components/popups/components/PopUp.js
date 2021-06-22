import React from 'react';

import './popup-components.css';

const PopUp = props => {
    return (
        <div className="popup">
            {props.children}
        </div>
    )
};
export default PopUp;
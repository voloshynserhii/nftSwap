import React from 'react';

import './ui.css';

const HeaderButton = props => {
    return (
        <div className="border-purple connect-wallet flex-center" onClick={props.onClick}>
            <span>CONNECT WALLET</span>
        </div>
    );
};

export default HeaderButton;
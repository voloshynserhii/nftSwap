import React from 'react';

import './ui.css';

const HeaderButton = props => {
    return (
        <div className="connect-wallet flex-center" onClick={props.showWallet}>
            <span>CONNECT WALLET</span>
        </div>
    );
};

export default HeaderButton;
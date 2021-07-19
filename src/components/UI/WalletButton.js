import React from 'react';

import WalletIcon from '../../assets/icons/Wallet.svg';
import './ui.css';

const WalletButton = props => {
    return (
        <div className="flex-center square icon-button" onClick={props.onOpenWallet}>
            <img src={WalletIcon} alt="wallet" />
        </div>
    );
};

export default WalletButton;
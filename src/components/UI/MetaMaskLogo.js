import React from 'react';

import MetaMask from '../../assets/popups/face.png';
import './ui.css';

const MetaMaskLogo = () => {
    return (
        <div className="metamask-logo">
            <img src={MetaMask} alt="meta mask logo" />
        </div>
    )
}
export default MetaMaskLogo;
import React from 'react';

import HamburgerIcon from '../../assets/icons/hamburger-menu.svg';
import './ui.css';

const Hamburger = props => {
    return (
        <div className="hamburger flex-center" onClick={props.onOpenMenu}>
            <img src={HamburgerIcon} alt="hamburger menu" />
        </div>
    );
};

export default Hamburger;
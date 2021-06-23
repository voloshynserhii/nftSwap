import React from 'react';
import { NavLink } from "react-router-dom";

import LogoNameIcon from '../../assets/icons/logoName.png';

const LogoName = props => {
    return (
        <NavLink className="header-logoName" to={props.path}>
            <img src={LogoNameIcon} alt="logo" />
        </NavLink>
    );
};

export default LogoName;
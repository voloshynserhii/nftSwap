import React from 'react';
import { NavLink } from "react-router-dom";

import LogoIcon from '../../assets/icons/logo.png';

const LogoName = props => {
    return (
        <NavLink className="header-logoName" to={props.path}>
            <img src={LogoIcon} alt="logo" />
        </NavLink>
    );
};

export default LogoName;
import React from "react";
import { NavLink } from "react-router-dom";

import LogoIcon from "../../assets/icons/logo.png";

const Logo = (props) => {
  return (
    <NavLink className={`header-logo ${props.className}`} to={props.path}>
        <img src={LogoIcon} alt="logo" />
    </NavLink>
  );
};

export default Logo;

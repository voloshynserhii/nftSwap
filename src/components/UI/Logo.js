import React from "react";
import { NavLink } from "react-router-dom";

import LogoIcon from "../../assets/icons/logo.png";

const Logo = (props) => {
  return (
    <NavLink className="header-logo full-height flex-center" to={props.path}>
      <span>Infinity &nbsp;</span>
      <img src={LogoIcon} alt="logo" />
      <span>wap</span>
    </NavLink>
  );
};

export default Logo;

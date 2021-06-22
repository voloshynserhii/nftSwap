import React from 'react';
import { NavLink } from "react-router-dom";


const MainMenuButton = (props) => {
  return (
    <li className="flex-center">
      <NavLink className="sidebar-link" to={props.path} exact>
        <img src={props.image} alt={props.children} />
        {props.children}
      </NavLink>
    </li>
  );
};
export default MainMenuButton;
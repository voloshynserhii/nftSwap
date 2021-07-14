import React from 'react';
import { NavLink } from "react-router-dom";

const MainMenuButton = (props) => {
  
  return (
    <li className="flex-center">
      <NavLink className="sidebar-link" activeClassName="sidebar-link-selected" to={props.path} exact>
        <img className="sidebar-image" src={props.image} alt={props.children} />
        <img className="sidebar-image-selected" src={props.imageActive} alt={props.children} />
        {props.children}
      </NavLink>
    </li>
  );
};
export default MainMenuButton;
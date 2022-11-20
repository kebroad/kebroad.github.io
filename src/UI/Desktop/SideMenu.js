import React from "react";
import Navigation from "../Navigation";
import classes from "./SideMenu.module.css";

const SideMenu = (props) => {
  return (
    <aside>
      <Navigation currentPage={props.currentPage}></Navigation>
    </aside>
  );
};

export default SideMenu;

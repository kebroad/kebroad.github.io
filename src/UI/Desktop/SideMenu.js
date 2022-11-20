import React from "react";
import Navigation from "../Navigation";
import classes from "./SideMenu.module.css";

const SideMenu = (props) => {
  return (
    <aside>
      <Navigation
        sectionType={props.sectionType}
        setSectionType={props.setSectionType}
      ></Navigation>
    </aside>
  );
};

export default SideMenu;

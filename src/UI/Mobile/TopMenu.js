import React from "react";
import Header from "../Header";
import classes from "./TopMenu.module.css";

const TopMenu = (props) => {
  return (
    <div className={classes["top-menu"]}>
      <Header
        sectionType={props.sectionType}
        isMobile={props.isMobile}
        toggleDrawerHandler={props.openDrawerHandler}
      ></Header>
    </div>
  );
};

export default TopMenu;

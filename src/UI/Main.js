import React from "react";
import classes from "./Main.module.css";
const Main = (props) => {
  const mainClass = props.isMobile
    ? classes["main-mobile"]
    : classes["main-desktop"];
  return <main className={mainClass}>{props.children}</main>;
};

export default Main;

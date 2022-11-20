import React from "react";
import classes from "./Link.module.css";
const Link = (props) => {
  const routeClass = props.highlight ? classes.highlighted : null;
  return (
    <a className={routeClass} href={props.route}>
      <h1 className={classes["section-link"]}>{props.children}</h1>
    </a>
  );
};

export default Link;

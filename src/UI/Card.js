import React from "react";
import classes from "./Card.module.css";
const Card = (props) => {
  const classNames = `${classes.card} ${props.className}`;
  return (
    <div style={props.style} className={classNames}>
      {props.children}
    </div>
  );
};

export default Card;

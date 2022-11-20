import React from "react";
import classes from "./Header.module.css";
import { GiHamburgerMenu } from "react-icons/gi";
import Button from "./Button";
const Header = (props) => {
  return (
    <div className={classes.header}>
      {props.isMobile && (
        <Button onClick={props.toggleDrawerHandler}>
          <GiHamburgerMenu className={classes["menu-icon"]}></GiHamburgerMenu>
        </Button>
      )}
      <h1
        className={classes["header-text"]}
        style={{ textAlign: props.isMobile ? "left" : "center" }}
      >
        K<span className={classes.highlight}>e</span>vin
      </h1>
    </div>
  );
};

export default Header;

import React from "react";
import classes from "./Header.module.css";
import { GiHamburgerMenu } from "react-icons/gi";
import Button from "./Button";
const Header = (props) => {
  let sectionName = "About";
  switch (props.sectionType) {
    case "experience":
      sectionName = "Experience";
      break;
    case "projects":
      sectionName = "Projects";
      break;
    case "skills":
      sectionName = "Skills";
      break;
  }
  return (
    <>
      <div className={classes.header}>
        <div className={classes["header-row"]}>
          {props.isMobile && (
            <Button onClick={props.toggleDrawerHandler}>
              <GiHamburgerMenu
                className={classes["menu-icon"]}
              ></GiHamburgerMenu>
            </Button>
          )}
          <h1
            className={classes["header-text"]}
            style={{
              textAlign: props.isMobile ? "left" : "center",
            }}
          >
            K<span className={classes.highlight}>e</span>vin
          </h1>
        </div>
        {props.isMobile && props.sectionType != "navigation" ? (
          <h2 className={classes.page}>{sectionName}</h2>
        ) : props.isMobile ? (
          <div className={classes.spacing}></div>
        ) : null}
      </div>
    </>
  );
};

export default Header;

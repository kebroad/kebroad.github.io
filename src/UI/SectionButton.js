import React from "react";
import Button from "./Button";
import classes from "./SectionButton.module.css";
const SectionButton = (props) => {
  const sectionClass = props.highlight ? classes.highlighted : null;
  const changeSectionHandler = () => {
    props.setSectionType(props.choice);
    props.closeDrawerHandler();
  };
  return (
    <Button onClick={changeSectionHandler}>
      <h1 className={classes["section-link"]}>{props.children}</h1>
    </Button>
  );
};

export default SectionButton;

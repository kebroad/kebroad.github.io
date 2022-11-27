import React from "react";
import classes from "./SkillExperience.module.css";
import { BsLaptop, BsLaptopFill } from "react-icons/bs";
import Card from "../../UI/Card";
const SkillExperience = (props) => {
  return (
    <Card
      className={classes["skill-description"]}
      style={{ width: props.isMobile ? "90%" : "80vh" }}
    >
      <h1 className={classes["skill-name"]}>{props.skill.name}</h1>
      <hr className={classes.break}></hr>
      {props.skill.level && (
        <div className={classes["level-row"]}>
          <h2 className={classes["experience"]}>Experience: </h2>
          {props.skill.level > 0 ? (
            <BsLaptopFill className={classes.level} />
          ) : (
            <BsLaptop className={classes.level} />
          )}
          {props.skill.level > 1 ? (
            <BsLaptopFill className={classes.level} />
          ) : (
            <BsLaptop className={classes.level} />
          )}
          {props.skill.level > 2 ? (
            <BsLaptopFill className={classes.level} />
          ) : (
            <BsLaptop className={classes.level} />
          )}
          {props.skill.level > 3 ? (
            <BsLaptopFill className={classes.level} />
          ) : (
            <BsLaptop className={classes.level} />
          )}
          {props.skill.level > 4 ? (
            <BsLaptopFill className={classes.level} />
          ) : (
            <BsLaptop className={classes.level} />
          )}
        </div>
      )}
    </Card>
  );
};

export default SkillExperience;

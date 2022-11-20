import React from "react";
import classes from "./TimelineSection.module.css";

const TimelineSection = (props) => {
  const timelineClass = props.isMobile
    ? "timeline-section-mobile"
    : "timeline-section-desktop";
  return (
    <div className={classes[timelineClass]}>
      <div className={classes.dates}>{props.dates}</div>
      <div className={classes.company}>{props.company}</div>
      <div className={classes.position}>{props.position}</div>
      <img className={classes["timeline-image"]} src={props.imagesrc} />
    </div>
  );
};

export default TimelineSection;

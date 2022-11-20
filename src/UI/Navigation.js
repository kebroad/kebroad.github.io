import React from "react";
import classes from "./Navigation.module.css";
import Button from "./Button";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import Header from "./Header";
import Link from "./SectionButton";
import SectionButton from "./SectionButton";
const Navigation = (props) => {
  return (
    <nav className={classes.navbar}>
      <Header
        isMobile={props.isMobile}
        toggleDrawerHandler={props.closeDrawerHandler}
      ></Header>
      <SectionButton
        choice="about"
        highlight={props.sectionType === "about"}
        setSectionType={props.setSectionType}
        closeDrawerHandler={props.closeDrawerHandler}
      >
        About
      </SectionButton>
      <SectionButton
        choice="experience"
        highlight={props.sectionType === "experience"}
        setSectionType={props.setSectionType}
        closeDrawerHandler={props.closeDrawerHandler}
      >
        Experience
      </SectionButton>
      <SectionButton
        choice="skills"
        highlight={props.sectionType === "skills"}
        setSectionType={props.setSectionType}
        closeDrawerHandler={props.closeDrawerHandler}
      >
        Skills
      </SectionButton>
      <SectionButton
        choice="projects"
        highlight={props.sectionType === "projects"}
        setSectionType={props.setSectionType}
        closeDrawerHandler={props.closeDrawerHandler}
      >
        Projects
      </SectionButton>

      {/* <Link route="experience" highlight={props.sectionType === "experience"}>
        Experience
      </Link>
      <Link route="skills" highlight={props.sectionType === "skills"}>
        Skills
      </Link>
      <Link route="projects" highlight={props.sectionType === "projects"}>
        Projects
      </Link> */}
      <div className={classes.external}>
        <Button>
          <AiFillGithub className={classes.icon}></AiFillGithub>
        </Button>
        <Button>
          <AiFillLinkedin className={classes.icon}></AiFillLinkedin>
        </Button>
      </div>
    </nav>
  );
};

export default Navigation;

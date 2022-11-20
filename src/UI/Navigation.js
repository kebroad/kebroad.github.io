import React from "react";
import classes from "./Navigation.module.css";
import Button from "./Button";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import Header from "./Header";
import Link from "./Link";
const Navigation = (props) => {
  return (
    <nav className={classes.navbar}>
      <Header
        isMobile={props.isMobile}
        toggleDrawerHandler={props.closeDrawerHandler}
      ></Header>
      <Link route="/" highlight={props.currentPage === "/"}>
        Home
      </Link>
      <Link route="experience" highlight={props.currentPage === "experience"}>
        Experience
      </Link>
      <Link route="skills" highlight={props.currentPage === "skills"}>
        Skills
      </Link>
      <Link route="projects" highlight={props.currentPage === "projects"}>
        Projects
      </Link>
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

import React from "react";
import useMobile from "../hooks/useMobile";
import Page from "../UI/Page";

const Skills = () => {
  const isMobile = useMobile();
  return (
    <Page isMobile={isMobile} currentPage="skills">
      <div>Skills</div>
    </Page>
  );
};

export default Skills;

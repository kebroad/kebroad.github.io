import React from "react";
import useMobile from "../hooks/useMobile";
import Page from "../UI/Page";


const Projects = () => {
  const isMobile = useMobile();
  return (
    <Page isMobile={isMobile} currentPage="projects">
      <div>Projects</div>
    </Page>
  );
};

export default Projects;

import "./App.css";
import useMobile from "./hooks/useMobile";
import { useState } from "react";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import Home from "./sections/About";
import Experience from "./sections/Experience/Experience";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills/Skills.tsx";
import SideMenu from "./UI/Desktop/SideMenu";
import TopMenu from "./UI/Mobile/TopMenu";
import Navigation from "./UI/Navigation";
import Main from "./UI/Main";
const App = () => {
  const [sectionType, setSectionType] = useState("about");
  const isMobile = useMobile();

  let section = <Home></Home>;
  switch (sectionType) {
    case "experience":
      section = <Experience></Experience>;
      break;
    case "projects":
      section = <Projects></Projects>;
      break;
    case "skills":
      section = <Skills></Skills>;
      break;
  }
  const [drawerIsShown, setDrawerIsShown] = useState(false);

  const openDrawerHandler = () => {
    setDrawerIsShown(true);
  };

  const closeDrawerHandler = () => {
    setDrawerIsShown(false);
  };

  const setSectionTypeHandler = (choice) => {
    setSectionType(choice);
  };

  return isMobile ? (
    <>
      {drawerIsShown ? (
        <Navigation
          sectionType={sectionType}
          setSectionType={setSectionTypeHandler}
          isMobile={isMobile}
          closeDrawerHandler={closeDrawerHandler}
        ></Navigation>
      ) : (
        <>
          <TopMenu
            sectionType={sectionType}
            isMobile={isMobile}
            openDrawerHandler={openDrawerHandler}
          ></TopMenu>
          <Main isMobile={isMobile}>{section}</Main>
        </>
      )}
    </>
  ) : (
    <>
      <SideMenu
        sectionType={sectionType}
        setSectionType={setSectionTypeHandler}
      ></SideMenu>
      <Main isMobile={isMobile}>{section}</Main>
    </>
  );
};

export default App;

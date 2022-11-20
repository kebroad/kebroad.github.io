import React from "react";
import classes from "./Page.module.css";
import Main from "./Main";

import { useState } from "react";
import Navigation from "./Navigation";
import SideMenu from "./Desktop/SideMenu";
import TopMenu from "./Mobile/TopMenu";
const Page = (props) => {
  const [drawerIsShown, setDrawerIsShown] = useState(false);

  const openDrawerHandler = () => {
    setDrawerIsShown(true);
  };

  const closeDrawerHandler = () => {
    setDrawerIsShown(false);
  };

  return props.isMobile ? (
    <>
      {drawerIsShown ? (
        <Navigation
          currentPage={props.currentPage}
          isMobile={props.isMobile}
          closeDrawerHandler={closeDrawerHandler}
        ></Navigation>
      ) : (
        <>
          <TopMenu
            isMobile={props.isMobile}
            openDrawerHandler={openDrawerHandler}
          ></TopMenu>
          <Main isMobile={props.isMobile}>{props.children}</Main>
        </>
      )}
    </>
  ) : (
    <>
      <SideMenu currentPage={props.currentPage}></SideMenu>
      <Main isMobile={props.isMobile}>{props.children}</Main>
    </>
  );
};

export default Page;

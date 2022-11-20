import React from "react";
import useMobile from "../hooks/useMobile";
import Page from "../UI/Page";

const Home = () => {
  const isMobile = useMobile();
  return (
    <Page isMobile={isMobile} currentPage="/">
      <div>Home</div>
    </Page>
  );
};

export default Home;

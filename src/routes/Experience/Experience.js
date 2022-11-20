import React from "react";
import Page from "../../UI/Page";
// import CvsImage from "../assets/images/cvs.png";
import classes from "./Experience.module.css";
import useMobile from "../../hooks/useMobile";
import TimelineSection from "./TimelineSection";
import cruise from "../../assets/images/cruise.jpg";
import cvs from "../../assets/images/cvs.jpg";
import entergy from "../../assets/images/entergy.jpg";
import exxon from "../../assets/images/exxon.jpg";
import lsu from "../../assets/images/lsu.jpg";

const Experience = () => {
  const isMobile = useMobile();
  return (
    <Page isMobile={isMobile} currentPage="experience">
      <TimelineSection
        dates="December 2022-Present"
        company="Cruise"
        position="Senior Site Reliability Engineer"
        imagesrc={cruise}
        isMobile={isMobile}
      ></TimelineSection>
      <TimelineSection
        dates="May 2021-December 2022"
        company="CVS Health"
        position="Senior Cloud & Kubernetes Engineer"
        imagesrc={cvs}
        isMobile={isMobile}
      ></TimelineSection>
      <TimelineSection
        dates="August 2019-May 2021"
        company="ExxonMobil"
        position="Cloud Platform Engineer"
        imagesrc={exxon}
        isMobile={isMobile}
      ></TimelineSection>
      <TimelineSection
        dates="August 2018-May 2018"
        company="ExxonMobil"
        position="Linux Servers Intern"
        imagesrc={exxon}
        isMobile={isMobile}
      ></TimelineSection>
      <TimelineSection
        dates="August 2017-May 2017"
        company="Entergy"
        position="Project Management Intern"
        imagesrc={entergy}
        isMobile={isMobile}
      ></TimelineSection>
      <TimelineSection
        dates="August 2017-May 2017"
        company="Entergy"
        position="Transmission Engineering Intern"
        imagesrc={entergy}
        isMobile={isMobile}
      ></TimelineSection>
      <TimelineSection
        dates="August 2015-May 2019"
        company="LSU"
        position="Student Lab Assistant, Protolab"
        imagesrc={lsu}
        isMobile={isMobile}
      ></TimelineSection>
    </Page>
  );
};

export default Experience;

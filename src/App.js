import logo from './logo.svg';
import './App.css';
import React, { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import sailboat from "./assets/images/sailboat.svg";
import classes from "./About.module.css";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import SectionHeader from "./UI/SectionHeader";
import Experience from './sections/Experience/Experience';
import { experience, education, skills, projects } from './data/content';
import portrait from "./assets/images/portait.png"
import Education from './sections/Education/Education';
import Skills from './sections/Skills/Skills';
import Projects from './sections/Projects/Projects';

function App() {

  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);

  return (
    <div className="App">
      <div className={classes.main}>
        <div className={classes["header-row"]}>
          <h1 className={classes["header-text"]}>Kevin Broadbridge</h1>
          <div className={classes["header-icon-row"]}>
            <AiFillGithub className={classes["header-icon"]}/>
            <AiFillLinkedin className={classes["header-icon"]}/>
          </div>
        </div>
        <div className={classes.card}>
          <div className={classes.profile}>
            <div className={classes.description}>
              <p>🙋🏼‍♂️Welcome to my website! </p>
              <p>I'm an engineer and tinkerer with a passion for infrastructure, software, and robotics, amongst other things. </p>
            </div>
            <img className={classes.portrait} src={portrait}></img>
          </div>  
          <Experience experience={experience}/>
          <Education education={education}/>
          <Skills skills={skills}/>
          <Projects projects={projects}/>
          

          
        </div>
      </div>
      <Particles
        className={classes.particles}
        style={{ display: "block" }}
        // height="100%"
        // width="100%"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          background: {
            color: {
              value: "#3A7D8C"
             // value: "#056994",
            },
          },
          fullScreen: {
            enable: true,
            zIndex: -1,
          },
          fpsLimit: 120,
          interactivity: {
            detect_on: "canvas",
            events: {
              onhover: { enable: true, mode: "bubble" },
              onclick: { enable: true, mode: "repulse" },
              resize: true,
            },
            modes: {
              grab: { distance: 400, line_linked: { opacity: 1 } },
              // bubble: {
              //   distance: 250,
              //   size: 0,
              //   duration: 2,
              //   opacity: 0,
              //   speed: 3,
              // },
              repulse: { distance: 200, duration: 0.4 },
              push: { particles_nb: 4 },
              remove: { particles_nb: 2 },
            },
          },
          particles: {
            color: {
              value: "#ffffff",
            },
            line_linked: {
              enable: false,
              distance: 150,
              color: "#ffffff",
              opacity: 1,
              width: 1,
            },
            collisions: {
              enable: false,
            },
            move: {
              enable: true,
              speed: 0.75,
              direction: "right",
              random: true,
              straight: true,
              out_mode: "out",
              bounce: false,
              attract: { enable: false, rotateX: 600, rotateY: 600 },
            },
            number: {
              density: {
                enable: true,
                area: 1400,
              },
              value: 200,
            },
            opacity: {
              value: 1,
              random: false,
              anim: { enable: false, speed: 1, opacity_min: 0, sync: false },
            },
            shape: {
              type: "image",
              stroke: { width: 0, color: "#000000" },
              polygon: { nb_sides: 5 },
              image: {
                src: sailboat,
                width: "500",
                height: "500",
              },
            },
            size: {
              value: { min: 7, max: 16 },
              // random: true,

              // anim: { enable: true, speed: 4, size_min: 18, sync: false },
            },
          },
          detectRetina: true,
        }}
      />
    </div>
  );
}

export default App;

import React, { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import sailboat from "../../assets/images/sailboat.svg";
import './Background.css'

const Background = () => {

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
      <Particles
        className="particles"
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
  )
}

export default Background
import React, { useCallback, useState } from "react";
import WordCloud from "react-d3-cloud";
import useMobile from "../../hooks/useMobile";
import SkillsGraph from "./SkillsGraph";
import { Cloud, renderSimpleIcon } from "react-icon-cloud";
import {
  siJavascript,
  siNextdotjs,
  siKubernetes,
  siArgo,
  siDocker,
  siReact,
  siGo,
  siPowershell,
  siHelm,
  siGnubash,
  siMicrosoftazure,
  siCplusplus,
  siCss3,
  siRos,
  siArduino,
  siPython,
  siIstio,
} from "simple-icons/icons";

import { SiJavascript } from "react-icons/si";

const skills = [
  { name: "Kubernetes", icon: siKubernetes, level: "Expert" },
  { name: "Argo", icon: siArgo, level: "Expert" },
  { name: "Docker", icon: siDocker, level: "Expert" },
  { name: "React", icon: siReact, level: "Intermediate" },
  { name: "Go", icon: siGo, level: "Intermediate" },
  { name: "PowerShell", icon: siPowershell, level: "Intermediate" },
  { name: "Helm", icon: siHelm, level: "Expert" },
  { name: "GNU Bash", icon: siGnubash, level: "Intermediate" },
  { name: "Microsoft Azure", icon: siMicrosoftazure, level: "Expert" },
  { name: "C++", icon: siCplusplus, level: "Intermediate" },
  { name: "CSS3", icon: siCss3, level: "Intermediate" },
  { name: "ROS", icon: siRos, level: "Intermediate" },
  { name: "Arduino", icon: siArduino, level: "Intermediate" },
  { name: "Python", icon: siPython, level: "Intermediate" },
  { name: "Istio", icon: siIstio, level: "Intermediate" },
];

// const icons = skills.map((skill) => {
//   return <a>
//     <h1>{skill.name}</h1>
//     <
//   </a>
// })

const Skills = () => {
  const [currentSkill, setCurrentSkill] = useState({
    name: "Click on a Skill to get Started!",
    icon: null,
    level: null,
  });
  const icons = skills.map((skill) => {
    const i = renderSimpleIcon({
      icon: skill.icon,
      size: 42,
      aProps: {
        onClick: (e) => {
          e.preventDefault();
          setCurrentSkill(
            skills.filter((skill) => {
              return skill.name === e.target.title;
            })[0]
          );
          console.log(currentSkill);
          console.log(e.target.title);
        },
      },
    });
    return i;
  });
  return (
    <>
      <Cloud
        options={{
          imageMode: "both",
          imagePosition: "top",
          textHeight: "20",
        }}
      >
        {icons}
      </Cloud>
      <h1>{currentSkill.name}</h1>
    </>
  );
  // const colors = [
  //   "#1e5252da",
  //   "#C35550",
  //   "#000000",
  //   "#FFFFFF",
  //   // "#48CAE4",
  //   // "#00B4D8",
  //   // "#0077B6",
  //   // "#023E8A",
  // ];
  // const rotate = useCallback(() => 0, []);
  // const fontSize = useCallback((word) => 10 * word.value, []);
  // const fill = useCallback(
  //   () => colors[Math.floor(Math.random() * colors.length)],
  //   []
  // );
  // const words = [
  //   {
  //     text: "Terraform",
  //     value: 5,
  //   },
  //   {
  //     text: "Git",
  //     value: 5,
  //   },
  //   {
  //     text: "Docker",
  //     value: 5,
  //   },
  //   {
  //     text: "Kubernetes",
  //     value: 5,
  //   },
  //   {
  //     text: "Helm",
  //     value: 5,
  //   },
  //   {
  //     text: "Jenkins",
  //     value: 5,
  //   },
  //   {
  //     text: "ArgoCD",
  //     value: 5,
  //   },
  //   {
  //     text: "Flux",
  //     value: 5,
  //   },
  //   {
  //     text: "Vagrant",
  //     value: 3,
  //   },
  //   {
  //     text: "Bash",
  //     value: 4,
  //   },
  //   {
  //     text: "Python",
  //     value: 4,
  //   },
  //   {
  //     text: "Javascript",
  //     value: 4,
  //   },
  //   {
  //     text: "Powershell",
  //     value: 5,
  //   },
  //   {
  //     text: "Go",
  //     value: 3,
  //   },
  //   {
  //     text: "C++",
  //     value: 3,
  //   },
  //   {
  //     text: "Azure",
  //     value: 5,
  //   },
  //   {
  //     text: "GCP",
  //     value: 2,
  //   },
  // ];
  // const options = {
  //   rotations: 0,
  //   rotationAngles: [0, 0],
  // };
  // const isMobile = useMobile();
  // return (
  //   <>
  //     <WordCloud
  //       font="Tomorrow"
  //       options={options}
  //       data={words}
  //       maxWords={20}
  //       fontSize={fontSize}
  //       fill={fill}
  //       rotate={rotate}
  //       onWordMouseOver={(event, d) => {
  //         console.log(`onWordMouseOver: ${d.text}`);
  //       }}
  //     />
  //   </>
  // );
};

export default Skills;

import React, { useCallback, useState, useMemo } from "react";
import WordCloud from "react-d3-cloud";
import useMobile from "../../hooks/useMobile";
import SkillsGraph from "./SkillsGraph";
import { Cloud, renderSimpleIcon } from "react-icon-cloud";
import classes from "./Skills.module.css";
import Card from "../../UI/Card";
import SkillExperience from "./SkillExperience";
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
  siNginx,
  siGit,
  siFlutter,
} from "simple-icons/icons";

import { SiJavascript } from "react-icons/si";

const skills = [
  { name: "Kubernetes", icon: siKubernetes, level: 5 },
  { name: "Argo", icon: siArgo, level: 5 },
  { name: "Docker", icon: siDocker, level: 5 },
  { name: "React", icon: siReact, level: 3 },
  { name: "Go", icon: siGo, level: 3 },
  { name: "PowerShell", icon: siPowershell, level: 4 },
  { name: "Helm", icon: siHelm, level: 5 },
  { name: "GNU Bash", icon: siGnubash, level: 3 },
  { name: "Microsoft Azure", icon: siMicrosoftazure, level: 5 },
  { name: "C++", icon: siCplusplus, level: 3 },
  { name: "CSS3", icon: siCss3, level: 3 },
  { name: "ROS", icon: siRos, level: 3 },
  { name: "Arduino", icon: siArduino, level: 4 },
  { name: "Python", icon: siPython, level: 3 },
  { name: "Istio", icon: siIstio, level: 3 },
  { name: "NGINX", icon: siNginx, level: 3 },
  { name: "Git", icon: siGit, level: 5 },
  { name: "Flutter", icon: siFlutter, level: 4 },
];

// const icons = skills.map((skill) => {
//   return <a>
//     <h1>{skill.name}</h1>
//     <
//   </a>
// })

const Skills = (props) => {
  const [currentSkill, setCurrentSkill] = useState({
    name: "Click on a Skill to get Started!",
    icon: null,
    level: null,
  });
  const icons = skills.map((skill) => {
    const i = renderSimpleIcon({
      icon: skill.icon,
      size: 85,
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

  const cloud = useMemo(
    () => (
      <Cloud
        canvasProps={{
          style: { height: "100%", margin: "auto", display: "block" },
          // width: "100%",
          // height: "100%",
        }}
        containerProps={{
          style: { height: "80vh", width: "100%" },
          // width: "10rem",
          // height: "10rem",
        }}
        options={
          {
            // imageMode: "both",
            // imagePosition: "top",
            // textHeight: "20",
          }
        }
      >
        {icons}
      </Cloud>
    ),
    []
  );
  return (
    <div className={classes["skills-background"]}>
      {cloud}
      <SkillExperience skill={currentSkill} />
    </div>
  );
};

export default Skills;

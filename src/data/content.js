import Cruise from '../assets/images/cruise.svg';
import CVS from '../assets/images/cvs.svg';
import ExxonMobil from '../assets/images/exxonmobil.svg';
import LSU from '../assets/images/lsu.svg';
import RobotDesign from '../assets/images/robot-design.png';
import RobotGIF from '../assets/images/robot.gif';
import RobotPlanning from '../assets/images/robot-planning.gif';
import RaspberryPiCluster from '../assets/images/raspberry-pi-cluster.jpg';
import Kubernetes from '../assets/images/kubernetes.png';

export const about = {
    description: "🙋🏼‍♂️Welcome to my website! I'm an engineer and tinkerer with a passion for infrastructure, software, and robotics, amongst other things."
}

export const experience = [
    { company: "Cruise", position: "Site Reliability Engineer", years: "2022 - Present", logo: Cruise },
    { company: "CVS Health", position: "Cloud/Kubernetes Engineer", years: "2021 - 2022", logo: CVS},
    { company: "ExxonMobil", position: "Cloud Platform Engineer", years: "2019 - 2021", logo: ExxonMobil},
]

export const education = [
    { university: "Louisiana State University", degree: "B.S., Computer Engineering", years: "2015 - 2019", logo: LSU}
]

export const skills = [
    { type: "Languages", list: ["Golang","Python",  "C", "C++", "JavaScript", "Bash", "TypeScript", "HTML", "CSS" ]},
    { type: "Frameworks", list: [ "Kubernetes", "Docker", "Terraform", "Ansible","React", "Jenkins", "GCP", "Azure"]},
    { type: "Tools", list: ["Git", "Github", "Jira", "Confluence", "Slack", "VS Code", "Vim"]},
    { type: "Other", list: ["Agile", "Scrum", "Kanban", "CI/CD", "DevOps" ]}
]

export const projects = [
    { 
        photos: [RobotDesign, RobotGIF, RobotPlanning ], 
        title: "6 DOF (Degrees of Freedom) Robotic Arm",
        description: "Designed, 3D printed, and built a robotic ARM. The arm uses a combination of stepper and servo motors with a custom-made cycloidal gearbox on each joint. I developed it with ROS using python nodes and MoveIt! for motion planning. Used Gazebo for simulation."
    },
    {
        photos: [Kubernetes, RaspberryPiCluster],
        title: "Raspberry Pi Kubernetes Cluster",
        description: "Built a 4 node Raspberry Pi Kubernetes cluster. Used Ansible to automate the setup of the cluster. Used cert-manager for SSL certificates."
    },


]

export const talks = [
]
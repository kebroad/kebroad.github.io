import './App.css';
import React from "react";
import Experience from './sections/Experience/Experience';
import { name, githubLink, linkedInLink, portrait, description, experience, education, skills, projects } from './data/content';
import Education from './sections/Education/Education';
import Skills from './sections/Skills/Skills';
import Projects from './sections/Projects/Projects';
import Header from './UI/Header/Header';
import Profile from './sections/Profile/Profile';
import Card from './UI/Card/Card';
import Main from './UI/Main/Main';
import Background from './UI/Background/Background';
import Footer from './UI/Footer/Footer';

function App() {

  return (
    <div className="App">
      <Main>
        <Header name={name} githubLink={githubLink} linkedInLink={linkedInLink} />
        <Card>
          <Profile description={description} portrait={portrait}/>
          <Experience experience={experience}/>
          <Education education={education}/>
          <Skills skills={skills}/>
          <Projects projects={projects}/>
        </Card>
        <Footer/>
      </Main>
      <Background/>
    </div>
  );
}

export default App;

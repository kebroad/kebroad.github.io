import './App.css';
import React from "react";
import Experience from './sections/Experience/Experience';
import { name, githubLink, linkedInLink, portrait, description, experience, education, skills, projects, footerText} from './data/content';
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

          <Profile description={description} portrait={portrait}/>
        <Card>
          <Experience experience={experience}/>
        </Card>
        <Card>
          <Education education={education}/>
        </Card>
        <Card>
          <Skills skills={skills}/>
        </Card>
        <Card>
          <Projects projects={projects}/>
        </Card>
        <Footer text={footerText}/>
      </Main>
      <Background/>
    </div>
  );
}

export default App;

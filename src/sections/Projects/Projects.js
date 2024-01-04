import React from 'react'
import SectionHeader from '../../UI/SectionHeader/SectionHeader';
import { MdRocketLaunch } from 'react-icons/md';
import './Projects.css'

const Projects = ({projects}) => {
  return (
    <>
        <SectionHeader title="Projects" icon={<MdRocketLaunch/>}/>
        <div className='projects'>
        {projects.map((project, index) => (
            <div className='project'>
                <div className='project-header'>
                    <h3 className='project-title'>{project.title}</h3>
                </div>
                <p className='project-description'>{project.description}</p>
                {project.link && (
                  <a href={project.link} className='project-link'>Link</a>
                )}
                <div className='project-photos'>
                  {project.photos.map((photo, _) => (
                    <img className='project-photo' style={{width: project.photos.length}}  src={photo}></img>
                  ))}
                </div>
            </div>
        ))}
        </div>
    </>
  )
}

export default Projects
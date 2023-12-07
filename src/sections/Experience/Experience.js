import React from 'react'
import { experience } from '../../data/content';
import './Experience.css'

const Experience = () => {
  

  return (
    <div className="timeline-display">
      <div className="timeline-nodes">
        {experience.map((exp, index) => (
            // <div key={index} className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}>
            <div className='timeline-node'>
              <div className='timeline-content'>
                <div className='spacing'></div>
                <img className='logo' src={exp.logo} alt={`${exp.company} logo`} />
                <div className='experience-content'>
                  <h3 className='experience-content-top'>{exp.company} | {exp.years}</h3>
                  <p className='experience-content-bottom'>{exp.position}</p>
                </div>
              </div>
                {index !== experience.length - 1 && (<div className="line" />)}
            </div>
        ))}
      </div>
    </div>

  )
}

export default Experience

                // <div className="timeline-content">
                //     <h3>{exp.company} | {exp.years}</h3>
                //     <p>{exp.position}</p>
            //     // </div>
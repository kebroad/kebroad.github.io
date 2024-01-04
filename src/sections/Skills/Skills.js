import React from 'react'
import './Skills.css'
import SectionHeader from '../../UI/SectionHeader/SectionHeader';
import { FaTools } from 'react-icons/fa';

const Skills = ({skills}) => {
  return (
    <>
      <SectionHeader title="Skills" icon={<FaTools/>}/>
      <div className='skills'>
      {skills.map((skill, index) => (
          <div className='skill'>
          <h3 className='skill-type'>{skill.type}</h3>
          {skill.list.map((item, index) => (
              <p className='skill-name'>{item}</p>
          ))}
          </div>
      ))}
      </div>
    </>
  )
}

export default Skills
import React from 'react'

import './Experience.css'
import Timeline from '../../UI/Timeline/Timeline';
import SectionHeader from '../../UI/SectionHeader/SectionHeader';
import { MdWork } from 'react-icons/md';

const Experience = ({experience}) => {
  const timeline = experience.map((exp, index) => {
    return {
      logo: exp.logo,
      topText: `${exp.company} | ${exp.years}`,
      bottomText: exp.position
    }
  })

  return (
    <>
      <SectionHeader title="Experience" icon={<MdWork/>}/>
      <Timeline timeline={timeline}/>
    </>
  )
}

export default Experience
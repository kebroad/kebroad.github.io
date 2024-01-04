
import React from 'react'

import Timeline from '../../UI/Timeline';
import SectionHeader from '../../UI/SectionHeader';
import { RiGraduationCapFill } from 'react-icons/ri';

const Education = ({education}) => {
    const timeline = education.map((edu, index) => {
        return {
            logo: edu.logo,
            topText: `${edu.university} | ${edu.years}`,
            bottomText: edu.degree
        }
    })
  return (
    <>
      <SectionHeader title="Education" icon={<RiGraduationCapFill/>}/>
      <Timeline timeline={timeline}/>
    </>
  )
}

export default Education
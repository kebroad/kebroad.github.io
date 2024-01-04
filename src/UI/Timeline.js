import React from 'react'
import './Timeline.css'

const Timeline = ({timeline}) => {
  return (
    <div className="timeline">
      <div className="timeline-nodes">
        {timeline.map((item, index) => (
            // <div key={index} className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}>
            <div className='timeline-node'>
                <div className='timeline-node-circle'>
                    <img className='logo' src={item.logo} />
                </div>
                {index !== timeline.length - 1 && (<div className="line" />)}
            </div>
        ))}
      </div>
      <div className='timeline-contents'>
          {timeline.map((item, index) => (
            <>
            <div className='timeline-content'>
                  <h3 className='timeline-content-top'>{item.topText}</h3>
                  <p className='timeline-content-bottom'>{item.bottomText}</p>
            </div>
            {index !== timeline.length - 1 && (<div className="space" />)}
            </>
        ))}
      </div>
    </div>
  )
}

export default Timeline
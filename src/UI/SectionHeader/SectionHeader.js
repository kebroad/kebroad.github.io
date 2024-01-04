import React from 'react'
import './SectionHeader.css'

const SectionHeader = ({ title, icon }) => {
    const iconWithClass = icon ? React.cloneElement(icon, { className: "icon" }) : null;


    return (
        <div className="section-header">
            {iconWithClass}
            <h1 className="title">{title}</h1>
        </div>
    );
}

export default SectionHeader;
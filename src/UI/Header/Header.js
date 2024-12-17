import React from 'react'
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import './Header.css'

const Header = ({name, githubLink, linkedInLink}) => {
    return (
        <header className="header-row">
                <h1 className="header-text">{name}</h1>
                <div className="header-icon-container">
                        <a href={githubLink} target="_blank" rel="noopener noreferrer">
                                <AiFillGithub className="header-icon"/>
                        </a>
                        <a href={linkedInLink} target="_blank" rel="noopener noreferrer">
                                <AiFillLinkedin className="header-icon"/>
                        </a>
                </div>
        </header>
    )
}

export default Header




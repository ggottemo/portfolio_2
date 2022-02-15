//Imports
import * as React from 'react'
import github from '../icons/github.svg'
import linkedin from '../icons/linkedin.svg'

// style
import {
    socialContainer,
    socialIcon,
} from '../styles/socials.module.css'

const Socials = () => {
    return (
        <div className = { socialContainer }>
            <a href="https://github.com/ggottemo" target="_blank" rel="noopener noreferrer">
            <img className = { socialIcon } src = { github } alt = "Github icon" />
            </a>
            <a href="https://www.linkedin.com/in/george-gottemoeller/" target="_blank" rel="noopener noreferrer">
            <img className = { socialIcon } src = { linkedin } alt = "LinkedIn icon" />
            </a>
        </div>
    )
}
        
 export default Socials       
            
//Imports
import * as React from 'react'
import github from '../icons/github.svg'
import linkedin from '../icons/linkedin.svg'

// style
import {
    socialContainer,
    socialIcon,
} from '../styles/socials.module.css'

import {
    navLinkItem,
 
} from '../styles/layout.module.css'

const Socials = () => {
    return (
        <div className = { socialContainer }  >
            <a href="https://github.com/ggottemo" target="_blank"  rel="noopener noreferrer">
            <img className = { socialIcon + ' ' + navLinkItem }  src = { github } alt = "Github icon" />
            </a>
            <a href="https://www.linkedin.com/in/george-gottemoeller/" target="_blank" rel="noopener noreferrer">
            <img className = { socialIcon + ' ' + navLinkItem }  src = { linkedin } alt = "LinkedIn icon" />
            </a>
        </div>
    )
}
        
 export default Socials       
            
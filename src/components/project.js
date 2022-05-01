//imports
import * as React from 'react'
import {
    project,
    project_tags,
    project_description,
    
    
} from "../styles/project.module.css"
import "../styles/project.css"
//create project component
const Project = ( props ) => {
 
    return (
        <div className={project}>
            <h3>{ props.title }</h3>
            {/* generate divs with appropriate class for each tag */}
            {/* inteded to use for styling later */}
            <div className={project_tags}> { props.tags.map((tag) => (
                <div className={'tag_' + tag}>{tag}</div>
    )) }</div>
            <p className={project_tags}>{ props.description }</p>
            <a href={ props.github }>Github</a> <br></br>
            {/* Check to see if there is a deploy link */}
            { props.deployed ? <a href={ props.deployed }>Deployed</a> : null }

        </div>
    )
}



export default Project

//imports
import * as React from 'react';


//create project component
const Project = ( props ) => {
    return (
        <div className="project">
            <h3>{ props.title }</h3>
            <div className="project-tags"> { props.tags }</div>
            <p className="project-description">{ props.description }</p>
            <a href={ props.github }>Github</a> <br></br>
            <a href={ props.deployed }>Deployed</a>
        </div>
    )
}



export default Project

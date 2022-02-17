//imports
import * as React from 'react';


//create project component
const Project = ( props ) => {
 
    return (
        <div className="project">
            <h3>{ props.title }</h3>
            {/* generate divs with appropriate class for each tag */}
            {/* inteded to use for styling later */}
            <div className="project-tags"> { props.tags.map((tag) => (
                <div className={'tag-' + tag}>{tag}</div>
    )) }</div>
            <p className="project-description">{ props.description }</p>
            <a href={ props.github }>Github</a> <br></br>
            {/* Check to see if there is a deploy link */}
            { props.deployed ? <a href={ props.deployed }>Deployed</a> : null }

        </div>
    )
}



export default Project

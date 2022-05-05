// Imports
import * as React from 'react'
import Layout from '../components/layout'
import Project from '../components/project'
import {
  projectContainer,
} from '../styles/project.module.css'
import { StaticImage } from 'gatsby-plugin-image'

//prop variables for each project
const hulu = {
  title : 'Hulu 2.0 Clone',
  tags : ['Tailwind', 'React', 'APIs'],
  description : 'A clone of Hulu 2.0 built with React and Tailwind CSS.',
  github : 'https://github.com/ggottemo/hulu-2',
  deployed : 'https://hulu-2-pdeii248i-ggottemo.vercel.app/',
}

const etch_js = {
  title : 'Etch.js',
  tags : ['JavaScript'],
  description : 'A simple drawing application built with JavaScript from The Odin Project.',
  github : 'https://github.com/ggottemo/etch-js',
  deployed : 'https://etch-js-ggottemo.vercel.app/',
}

const python_scripts = {
  title : 'Python Scripts',
  tags : ['Python'],
  description : 'A collection of Python scripts I used to automate my day-to-day tasks.',
  github : 'https://github.com/ggottemo/python-repo',
}
//
const IndexPage = () => {
  return (
    
    <Layout pageTitle="About Me">
      <p>Hi there! I'm the proud creator of this WIP site, which I built with Gatsby.</p>
      {/* <StaticImage 
      alt="Night Sky"
      src="../images/blue_night.png"
      /> */}
      <h3>Projects</h3>
      <div id={projectContainer} >
        <Project {...hulu} />
        <Project {...etch_js} />
        <Project {...python_scripts} />
        </div>
    </Layout>
    
  )
}
// Export
export default IndexPage
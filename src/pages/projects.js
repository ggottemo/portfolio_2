//Imports
import * as React from 'react'
import Layout from '../components/layout'
import Project from '../components/project'

//prop variables
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
    description : 'A simple drawing application built with JavaScript.',
    github : 'https://github.com/ggottemo/etch-js',
    deployed : 'https://etch-js-ggottemo.vercel.app/',
}

const python_scripts = {
    title : 'Python Scripts',
    tags : ['Python'],
    description : 'A collection of Python scripts I used to automate my day-to-day tasks.',
    github : 'https://github.com/ggottemo/python-repo',
}



const ProjectsPage = () => {
  return (
    <Layout pageTitle="Projects">
      <p>This is the projects page</p>
        <Project {...hulu} />
        <Project {...etch_js} />
        <Project {...python_scripts} />
    </Layout>
  )
}

export default ProjectsPage
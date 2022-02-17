//Imports
import * as React from 'react'
import Layout from '../components/layout'
import Project from '../components/project'

//prop variables
const hulu = {
    title : 'Hulu 2.0 Clone',
    tags : ['Tailwind', 'React',],
    description : 'A clone of Hulu 2.0 built with React and Tailwind CSS.',
    github : 'https://github.com/ggottemo/hulu-2,',
    deployed : 'https://hulu-2-pdeii248i-ggottemo.vercel.app/',
}


const ProjectsPage = () => {
  return (
    <Layout pageTitle="Projects">
      <p>This is the projects page</p>
        <Project {...hulu} />
    </Layout>
  )
}

export default ProjectsPage
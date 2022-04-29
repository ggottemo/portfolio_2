// Imports
import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

//
const IndexPage = () => {
  return (
    
    <Layout pageTitle="About Me">
      <p>Hi there! I'm the proud creator of this WIP site, which I built with Gatsby.</p>
      {/* <StaticImage 
      alt="Night Sky"
      src="../images/blue_night.png"
      /> */}
    </Layout>
  )
}
// Export
export default IndexPage
// Imports
import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

//
const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>I'm making this by following the Gatsby Tutorial. </p>
      <StaticImage 
      alt="Night Sky"
      src="../images/blue_night.png"
      />
    </Layout>
  )
}
// Export
export default IndexPage
import * as React from 'react'
import Layout from '../components/layout'

const AboutPage = () => {
  return (
    <Layout pageTitle="About Me">
      <p>I'm Josh. I'm a pretty cool guy!</p>
    </Layout>
  )
}

export const Head = () => <title>About Me</title>

export default AboutPage
import React from 'react'
import Layout from '../components/layout'
import Link from 'gatsby-link'

const Demos = () => {
  const demos = [
    {
      title: 'netlify-illustration', //todo maybe pull the demo data from somewhere else
    },
  ]
  return (
    <Layout>
      <div className="h-full">
        <h1>Hey im the demo page</h1>
        <ul>
          {demos.map(demo => (
            <li key={demo.title}>
              <DemoLink title={demo.title} />
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  )
}

const DemoLink = ({ title }) => {
  return <Link to={`/demos/${title}`}>I'm a demo with {title}</Link>
}

export default Demos

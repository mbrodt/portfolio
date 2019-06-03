import React from 'react'
import Layout from '../components/layout'
import Link from 'gatsby-link'
import PageHeading from '../components/UI/PageHeading'

const Demos = () => {
  const demos = [
    {
      title: 'netlify-illustration', //todo maybe pull the demo data from somewhere else
    },
    {
      title: 'testimonial',
    },
  ]
  return (
    <Layout>
      <div className="h-full ml-4 lg:ml-0">
        <PageHeading>Hey im the demo page</PageHeading>
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

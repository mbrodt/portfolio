import React from 'react'
import Arrow from './arrow'
import SectionHeading from '../components/UI/SectionHeading'

const Projects = ({ projects }) => {
  return (
    <section
      data-aos="fade-up"
      data-aos-delay="300"
      id="projects"
      className="container text-center my-20"
    >
      <SectionHeading>Projects</SectionHeading>
      <div className="flex flex-wrap justify-center sm:m-8 md:m-0 xs:px-4 sm:px-0">
        {projects.map(project => (
          <Project key={project.node.title} project={project.node} />
        ))}
      </div>
    </section>
  )
}

const Project = ({ project }) => {
  return (
    <div
      className="bg-white rounded-lg flex p-2 sm:p-4 shadow-2xl m-4 md:max-w-xs "
      key={project}
    >
      <div className="mx-auto flex flex-col justify-between text-left m-4 px-2 md:px-8">
        <div className="flex justify-between items-baseline">
          <h3 className="mb-4 mr-2 text-lg sm:text-xl font-bold">
            {project.title}
          </h3>
          <Label labelText={project.label} />
        </div>
        <p className="text-gray-800 leading-normal mb-4">
          {project.description}
        </p>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={`${project.link}`}
          className="no-underline bg-indigo-500 text-white flex h-10 w-48 items-center justify-around hover:bg-indigo-600 w-full"
        >
          {' '}
          <p className="mb-0">{project.footerText}</p>
          <Arrow direction="right" />
        </a>
      </div>
    </div>
  )
}

const Label = ({ labelText }) => {
  const classes = [
    'text-xs',
    'px-3',
    'py-1',
    'rounded-full',
    'text-center',
    'font-bold',
  ]
  switch (labelText) {
    case 'Client':
      classes.push('bg-green-200 text-green-900')
      break
    case 'Personal':
      classes.push('bg-blue-200 text-blue-900')
      break
    default:
      break
  }
  return <p className={classes.join(' ')}>{labelText}</p>
}

export default Projects

import React from 'react'
import Arrow from '../assets/arrow.svg'

const Projects = ({ projects }) => {
  return (
    <section id="projects" className="container text-center my-20">
      <h2 className="mb-8">Projects</h2>
      <div className="flex flex-wrap justify-center sm:m-8 md:m-0">
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
      className="bg-white rounded-lg flex p-2 sm:p-4 shadow-lg m-4 md:max-w-xs"
      key={project}
    >
      <div className="mx-auto flex flex-col justify-between text-left m-4 px-2 md:px-8">
        <div className="flex justify-between items-baseline">
          <h3 className="mb-4 mr-2 text-lg sm:text-xl">{project.title}</h3>
          <Label labelText={project.label} />
        </div>
        <p className="text-grey-darkest leading-normal mb-4">
          {project.description}
        </p>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={`${project.link}`}
          className="no-underline bg-indigo text-white flex h-10 w-48 items-center justify-around visit-website hover:bg-indigo-dark"
        >
          {' '}
          <p className="mb-0">{project.footerText}</p>
          <img className="mb-0 arrow-anim" src={Arrow} alt="" />{' '}
        </a>
      </div>
    </div>
  )
}

const Label = ({ labelText }) => {
  const classes = [
    'text-xs',
    'px-4',
    'py-2',
    'rounded-full',
    'text-center',
    'font-bold',
  ]
  switch (labelText) {
    case 'Client':
      classes.push('bg-green-lightest text-green-darkest')
      break
    case 'Personal':
      classes.push('bg-blue-lighter text-blue-darker')
      break
    default:
      break
  }
  return <p className={classes.join(' ')}>{labelText}</p>
}

export default Projects

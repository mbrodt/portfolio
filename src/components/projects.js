import React from 'react'
import styled from 'styled-components'
import Arrow from '../assets/arrow.svg'

const Projects = ({ projects }) => {
  return (
    <section id="projects" className="container text-center my-20">
      <h2 className="mb-8">Projects</h2>
      <div className="grid">
        {projects.map(project => (
          <Project key={project.node.title} project={project.node} />
        ))}
      </div>
    </section>
  )
}

// import Test from '../assets/bc.svg'
const Project = ({ project }) => {
  return (
    <div
      className="bg-white rounded-lg flex p-2 sm:p-4 shadow-lg m-4"
      key={project}
    >
      {/* <img
        className="w-1/5"
        src={require(`../assets/${project.img}`)}
        alt="Illustration of the project"
      /> */}
      <div className="mx-auto flex flex-col justify-between text-left m-4 px-4 md:px-8">
        <h3 className="mb-4">{project.title}</h3>
        <p className="text-grey-darkest leading-normal mb-4">
          {project.description}
        </p>
        <a
          target="_blank"
          href={`${project.link}`}
          className="no-underline bg-indigo text-white flex h-10 w-48 items-center justify-around visit-website hover:bg-indigo-dark"
        >
          {' '}
          <p>{project.footerText}</p>
          <img className="mb-0 arrow-anim" src={Arrow} alt="" />{' '}
        </a>
      </div>
    </div>
  )
}

const ProjectText = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`

const ProjectTitle = styled.h3`
  font-size: 1.25rem;
  line-height: 1.2;
  font-weight: 500;
  /* margin-top: 1.5rem; */
`

const ProjectDescription = styled.p`
  flex: 1;
  margin: 1.5rem;
  padding: 0 1.5rem;
`

const FooterText = styled.p`
  color: white;
  margin-bottom: 0;
`

const CardFooter = styled.a`
  text-decoration: none;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 3rem;
  background: linear-gradient(
    97.46deg,
    #c4c4c4 0.11%,
    #5efce8 0.12%,
    #736efe 100.76%
  );
`

export default Projects

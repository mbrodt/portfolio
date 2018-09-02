import React from 'react'
import styled from 'styled-components'
import Arrow from '../assets/arrow.svg'

const Projects = ({ projects }) => {
  console.log('props', projects)
  return (
    <section
      id="projects"
      className="container"
      style={{ textAlign: 'center' }}
    >
      <h2>Projects</h2>
      <div className="line" />
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
  // console.log(project)
  return (
    <div className="project-card" key={project}>
      <img
        className="project-img"
        src={require(`../assets/${project.img}`)}
        alt="Should be image"
      />
      <div className="">
        <div>
          <ProjectTitle>{project.title}</ProjectTitle>
          <ProjectDescription>{project.description}</ProjectDescription>
          <CardFooter target="_blank" href={`${project.link}`}>
            {' '}
            <FooterText>{project.footerText}</FooterText>
            <img style={{ marginBottom: 0 }} src={Arrow} alt="" />{' '}
          </CardFooter>
        </div>
      </div>
    </div>
  )
}

const ProjectTitle = styled.h3`
  font-size: 1.25rem;
  line-height: 1.2;
  font-weight: 500;
  /* margin-top: 1.5rem; */
`

const ProjectDescription = styled.p`
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

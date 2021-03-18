import React from 'react'
import Title from './Title'
import Project from './Project'
import { Link } from 'gatsby'
const Projects = ({ projects, title, showLink }) => {
  return (
    <section className='section projects'>
      <Title title={title} />
      <div className='section-center projects-center'>
        {projects.map((project, index) => {
          return <Project key={project.id} index={index} {...project} />
        })}
      </div>
      {/* //as we are passing this 'showLink' as a props in the index.js Projects
      components then if we want to show the button then we will show the btn in
      the home page or else if we don't want that then we will simply remove
      that. */}
      {showLink && (
        <Link to='/projects' className='btn center-btn'>
          projects
        </Link>
      )}
    </section>
  )
}

export default Projects

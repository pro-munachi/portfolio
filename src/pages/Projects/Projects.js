import React from 'react'
import Contact from '../../components/Contact/Contact'
import ProjectTabs from '../../components/ProjectTab/ProjectTab'
import { ProjectStyle } from './style'

const Projects = () => {
  return (
    <ProjectStyle>
      <h1>
        <span>~/</span>projects
      </h1>

      <div className='first'>
        <h2>
          Ndewo!! <span>Below are my projects</span>
        </h2>
        <div>
          <ProjectTabs />
        </div>
      </div>

      <div style={{ marginTop: '15%' }}>
        <Contact />
      </div>
    </ProjectStyle>
  )
}

export default Projects

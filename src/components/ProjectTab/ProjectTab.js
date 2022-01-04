import * as React from 'react'

import { TabStyle } from './style'
import ProjectCards from '../Card/ProjectCards'
import PlayCard from '../Card/PlayCard'

export default function ProjectTabs() {
  const [value, setValue] = React.useState(false)

  return (
    <TabStyle>
      <div className='button'>
        <button
          onClick={() => setValue(false)}
          className={value === false ? 'active' : 'inactive'}
        >
          PROJECTS
        </button>
        <div className='emp' />
        <button
          onClick={() => setValue(true)}
          className={value === true ? 'active' : 'inactive'}
        >
          PLAYGROUND
        </button>
      </div>
      <hr />

      <div>
        {value === false ? (
          <div className='project'>
            <h3 style={{ textAlign: 'center', fontStyle: 'italic' }}>
              Click on image to reveal details
            </h3>
            <ProjectCards />
          </div>
        ) : (
          <div className='project'>
            <h3 style={{ textAlign: 'center', fontStyle: 'italic' }}>
              Click on image to reveal details
            </h3>
            <PlayCard />
          </div>
        )}
      </div>
    </TabStyle>
  )
}

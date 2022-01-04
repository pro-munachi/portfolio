import * as React from 'react'
import Box from '@mui/material/Box'

import { TabStyle } from './style'
import homeImg from '../../assets/images/home.png'
import hom from '../../assets/images/card1.PNG'
import { useLocation } from 'react-router-dom'
import Card from '../Card/Card'

const cards = [
  {
    id: 1,
    head: 'Joyride',
    body: '  Joyride is a web application for dispatch rides. where a usercreates an order and the order is dispatched by the dispatchers.',
    link: '/',
    img: homeImg,
  },
  {
    id: 2,
    head: 'Mcbee',
    body: '  Joyride is a web application for dispatch rides. where a usercreates an order and the order is dispatched by the dispatchers.',
    link: '/',
    img: hom,
  },
  {
    id: 3,
    head: 'Alien Bandit',
    body: '  Joyride is a web application for dispatch rides. where a usercreates an order and the order is dispatched by the dispatchers.',
    link: '/',
    img: homeImg,
  },
]

export default function ProjectTabs() {
  const [value, setValue] = React.useState(false)

  let location = useLocation()

  const navigate = (name) => {
    location.push(`/projects/${name}`)
    console.log('me')
  }

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
            <Card />
          </div>
        ) : (
          <div className='project'>
            <h3 style={{ textAlign: 'center', fontStyle: 'italic' }}>
              Click on image to reveal details
            </h3>
            <Card />
          </div>
        )}
      </div>
    </TabStyle>
  )
}

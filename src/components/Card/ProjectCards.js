import React from 'react'

import { CardStyle } from './styled'
import homeImg from '../../assets/images/home.png'
import hom from '../../assets/images/card1.PNG'
import { NavLink } from 'react-router-dom'
import cards from '../../assets/File/ProjectList'

const ProjectCards = () => {
  return (
    <CardStyle>
      <div className='card-container'>
        {cards.map((item) => (
          <div className='card' key={item.id}>
            <div className='card-content'>
              <h2>{item.head}</h2>
              <p>{item.body}</p>
              <NavLink className='btn' to={`/projects/${item.head}`}>
                <button>Show More</button>
              </NavLink>
            </div>
            <div className='card-img left'>
              <img className='' src={item.img} alt='' />
            </div>
            <div className='card-img right'>
              <img className='' src={item.img} alt='' />
            </div>
          </div>
        ))}
      </div>
    </CardStyle>
  )
}

export default ProjectCards

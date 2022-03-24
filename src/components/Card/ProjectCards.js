import React from 'react'

import { CardStyle } from './styled'
import { Link } from 'react-router-dom'
import cards from '../../assets/File/ProjectList'

const ProjectCards = () => {
  return (
    <CardStyle>
      <div className='card-container'>
        {cards.map((item) => (
          <div className='card-category-2' key={item.id}>
            <br />
            <div>
              <div className='img-card iCard-style3'>
                <div className='card-content'>
                  <div className='card-image'>
                    <img src={item.img} alt={item.head} />
                  </div>

                  <div className='card-text'>
                    <h3>{item.head}</h3>
                    <p>{item.body}</p>
                  </div>
                </div>

                <div className='card-link'>
                  <Link to={`/projects/${item.head}`} title='Read Full'>
                    <span>View More</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </CardStyle>
  )
}

export default ProjectCards

import React from 'react'

import { CardStyle } from './styled'
import homeImg from '../../assets/images/home.png'
import hom from '../../assets/images/card1.PNG'

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

const Card = () => {
  return (
    <CardStyle>
      <div className='card-container'>
        {cards.map((item) => (
          <div className='card' key={item.id}>
            <div className='card-content'>
              <h2>{item.head}</h2>
              <p>{item.body}</p>
              <button className='btn'>Show More</button>
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

export default Card

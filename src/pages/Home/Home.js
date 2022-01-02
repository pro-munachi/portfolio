import React from 'react'
import { HomeStyle } from './style'
import homeImg from '../../assets/images/home.png'

const Home = () => {
  return (
    <HomeStyle>
      <div className='top'>
        <div className='text'>
          <h2></h2>
        </div>
        <div className='img'>
          <img src={homeImg} alt='home-image' />
        </div>
      </div>
    </HomeStyle>
  )
}

export default Home

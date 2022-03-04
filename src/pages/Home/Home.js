import React from 'react'
import { HomeStyle } from './style'
import homepi from '../../assets/images/home.png'
import Card from '../../components/Card/Card'
import Contact from '../../components/Contact/Contact'
import UnstyledButtonCustom from '../../components/Button/Button'
import { NavLink } from 'react-router-dom'

const Home = () => {
  return (
    <HomeStyle id='home'>
      <h1 className='homa'>
        home <span>:=</span>
      </h1>
      <div className='top'>
        <div className='text'>
          <h2>
            Hola!! I am <span>Madu Stanley</span>
          </h2>
          <h1>A SOFTWARE DEVELOPER</h1>
        </div>
        <div className='img'>
          <img src={homepi} alt='home' />
        </div>
      </div>

      <div className='middle'>
        <h2>
          <span>let</span> projects <span>= [</span>
        </h2>

        <p>Click Image to reveal details</p>

        <div>
          <Card />
          <NavLink className='view' to='/projects'>
            <UnstyledButtonCustom name='View More' />
          </NavLink>
        </div>
        <h2>
          <span>]</span>
        </h2>
      </div>

      <div className='last'>
        <Contact />
      </div>
    </HomeStyle>
  )
}

export default Home

import React from 'react'
import { HomeStyle } from './style'
import homeImg from '../../assets/images/home.png'
import Card from '../../components/Card/Card'
import Contact from '../../components/Contact/Contact'

const Home = () => {
  return (
    <HomeStyle>
      <h1 className='homa'>
        <span>~/</span>Home
      </h1>
      <div className='top'>
        <div className='text'>
          <h2>
            Salut!! I am <span>Madu Stanley</span>
          </h2>
          <h1>A SOFTWARE DEVELOPER</h1>
        </div>
        <div className='img'>
          <img src={homeImg} alt='home-image' />
        </div>
      </div>

      <div className='middle'>
        <h2>
          <span>let</span> projects <span>= [</span>
        </h2>

        <p>Click Image to reveal details</p>

        <div>
          <Card />
          <div className='view'>
            <button>View More</button>
          </div>
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

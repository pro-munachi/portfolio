import React from 'react'

import { AboutStyle } from './style'
import aboutImg from '../../assets/images/about.png'
import ColorTabs from '../../components/Tabs/Tabs'
import Experience from '../../components/Experience/Experience'
import Contact from '../../components/Contact/Contact'
import UnstyledButtonCustom from '../../components/Button/Button'

const About = () => {
  return (
    <AboutStyle>
      <h1>
        <span>~/</span>about
      </h1>

      <div className='first'>
        <div className='img'>
          <img src={aboutImg} alt='munachi' />
        </div>
        <div className='text'>
          <h2>Salut!!</h2>
          <p>
            I am Madu Stanley Munachiso, A software developer from Nigeria. I
            started my career in tech due to my passion for tech, i have always
            been a great fan of tech since my childhood stage but it took me
            till 2018 to venture into it.
          </p>
          <p>
            I am a self taught MERN stack developer, i started my career in tech
            as a front end developer, i later advanced to use Reactjs in
            frontend development in 2019, i went on to learn Nextjs. i later
            made a switch to backend in the year 2020 by learning Express js. i
            am a graduate of the Federal University Of Technology Owerri
            (F.U.T.O).
          </p>
          <p>
            In my free time, i enjoy playing and watching football (soccer), i
            enjoy watching movies and tv series and japanese animes, most
            importantly, i am a fan of literally every genre of music.
          </p>

          <div className='view'>
            <a
              href='https://drive.google.com/file/d/1nce_I_94meos8kaZoRJJ62LtRjZKjIpC/view?usp=drivesdk'
              rel='noreferrer noopener'
              target='_blank'
            >
              <UnstyledButtonCustom name='View resume' />
            </a>
          </div>
        </div>
      </div>

      <div className='middle'>
        <h2>
          <span>let</span> myArsenal <span>= [</span>
        </h2>

        <div>
          <ColorTabs />
        </div>

        <h2>
          <span>]</span>
        </h2>
      </div>

      <div className='bottom'>
        <h2>
          <span>let</span> myExperience <span>= [</span>
        </h2>

        <div>
          <Experience />
        </div>

        <h2>
          <span>]</span>
        </h2>
      </div>

      <div className='last'>
        <Contact />
      </div>
    </AboutStyle>
  )
}

export default About

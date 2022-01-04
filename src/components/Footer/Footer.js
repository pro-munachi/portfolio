import React from 'react'
import { FooterStyle } from './style'

const Footer = () => {
  return (
    <FooterStyle>
      <div className='link'>
        <p>
          <a href='hjjj' rel='noreferrer noopener' target='_blank'>
            Email
          </a>
        </p>
        <p>
          <a
            href='https://github.com/pro-munachi'
            rel='noreferrer noopener'
            target='_blank'
          >
            Github
          </a>
        </p>
        <p>
          <a
            href='https://www.linkedin.com/in/munachiso'
            rel='noreferrer noopener'
            target='_blank'
          >
            LinkedIn
          </a>
        </p>
      </div>
      <div className='copyright'>
        <p> &copy; Munachiso 2022</p>
      </div>
    </FooterStyle>
  )
}

export default Footer
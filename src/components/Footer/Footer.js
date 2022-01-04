import React from 'react'
import { FooterStyle } from './style'

const Footer = () => {
  return (
    <FooterStyle>
      <div className='link'>
        <p>
          <a href='hjjj'>Email</a>
        </p>
        <p>
          <a href='hjjj'>Github</a>
        </p>
        <p>
          <a href='hjjj'>LinkedIn</a>
        </p>
      </div>
      <div className='copyright'>
        <p>c Munachiso 2022</p>
      </div>
    </FooterStyle>
  )
}

export default Footer

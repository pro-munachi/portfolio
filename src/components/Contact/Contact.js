import React from 'react'
import { ContactStyle } from './style'

const Contact = () => {
  return (
    <ContactStyle>
      <h2>
        <span>let</span> contact <span>= [</span>
      </h2>

      <h1>CONTACT ME!!!!</h1>
      <p>
        You have an awesome idea you want me to jump on? Feel free to contact
        me. However, if you have other request or question, I'm still up for it.
      </p>
      <div className='view'>
        <button>Shoot an email</button>
      </div>
      <h2>
        <span>]</span>
      </h2>
    </ContactStyle>
  )
}

export default Contact

import React from 'react'
import UnstyledButtonCustom from '../../components/Button/Button'

import { ContactStyle } from './style'

const ContactMe = () => {
  return (
    <ContactStyle>
      <h1>
        contact <span>:=</span>
      </h1>

      <h2 className='sannu'>
        Sannu!! <span>Do you have a crazy idea?</span>
      </h2>

      <div className='first'>
        <div className='left'>
          <h2>
            <span>let</span> contact <span>= [</span>
          </h2>
          <div className='top'>
            <h1>CONTACT ME!!!!</h1>
            <p style={{ fontSize: '16px' }}>
              You have an awesome idea you want me to jump on? Feel free to
              contact me. However, if you have other request or question, I'm
              still up for it.
            </p>
          </div>
          <div className='bottom'>
            <div className='view'>
              <a href='mailto:madustanley1@gmail.com'>
                <UnstyledButtonCustom name='Send an Email' />
              </a>
            </div>
          </div>

          <h2>
            <span>]</span>
          </h2>
        </div>
      </div>
    </ContactStyle>
  )
}

export default ContactMe

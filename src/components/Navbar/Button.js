import React from 'react'
import { useState } from 'react'
import { ButtonStyle } from './style'

function Button(props) {
  const [click, setClick] = useState(true)
  const clickButton = (value) => {
    props.onClick()
  }

  const trust = (value) => {
    setClick(!click)
    console.log('me')
  }

  return (
    <ButtonStyle
      onClick={clickButton}
      line1={props.line1}
      line2={props.line2}
      line3={props.line3}
    >
      <div className='line1' id='lin'></div>
      <div className='line2'></div>
      <div className='line3' id='linee'></div>
    </ButtonStyle>
  )
}

export default Button

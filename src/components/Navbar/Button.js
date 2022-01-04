import React from 'react'
import { useState } from 'react'
import { ButtonStyle } from './style'

function Button(props) {
  const [click, setClick] = useState(true)
  const clickButton = () => {
    props.onClick()
    setClick(!click)
  }

  return (
    <ButtonStyle
      onClick={clickButton}
      line1={props.line1}
      line2={props.line2}
      line3={props.line3}
    >
      <div className={click ? 'line1' : 'line1w'}></div>
      <div className='line2'></div>
      <div className={click ? 'line3' : 'line3w'}></div>
    </ButtonStyle>
  )
}

export default Button

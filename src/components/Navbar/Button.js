import React from 'react'
import { ButtonStyle } from './style'

function Button(props) {
  return (
    <ButtonStyle
      onClick={props.onClick}
      line1={props.line1}
      line2={props.line2}
      line3={props.line3}
    >
      <div className='line1'></div>
      <div className='line2'></div>
      <div className='line3'></div>
    </ButtonStyle>
  )
}

export default Button

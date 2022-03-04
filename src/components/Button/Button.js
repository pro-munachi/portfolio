import * as React from 'react'
import { CardStyle } from './style'
export default function UnstyledButtonCustom(props) {
  return (
    <CardStyle>
      <button className='btn-6'>
        <span className='span'>{props.name}</span>
      </button>
    </CardStyle>
  )
}

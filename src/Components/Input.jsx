import React from 'react'

const Input = (props) => {
  return (
    <input className='addInput' onChange={props.onChange} value={props.value} placeholder={props.placeholder} type="text" />
  )
}

export default Input
import React from 'react'

const Button = (props) => {
  return <button className={props.css}>
  {props.content}
  </button>
}

export default Button
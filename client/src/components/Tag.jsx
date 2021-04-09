import React from 'react'
import '../styles/App.css'

const Tag = (props) => {
  return <li className="stack__item">{props.stack ? props.stack : 'null'}</li>
}

export default Tag

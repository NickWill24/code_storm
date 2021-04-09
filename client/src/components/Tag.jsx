import React from 'react'

const Tag = (props) => {
  return <p>{props.stack ? props.stack : 'null'}</p>
}

export default Tag

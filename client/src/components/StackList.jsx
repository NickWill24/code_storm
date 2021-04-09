import React from 'react'
import { MERN, PERN, MEAN, MEVN, LAMP, FLASK_REACT } from './stack_types'

const StackList = (props) => {
  const stackOptions = [MERN, PERN, MEAN, MEVN, LAMP, FLASK_REACT]

  const renderStackOptions = () =>
    stackOptions.map((stack, idx) => (
      <div key={idx}>
        <label>{stack}</label>
        <input
          type="radio"
          name="stack"
          value={stack}
          onChange={(e) => props.handleChange(e)}
        />
      </div>
    ))

  return (
    <div>
      <div>
        <p>Select a stack:</p>
        {renderStackOptions()}
      </div>
    </div>
  )
}

export default StackList

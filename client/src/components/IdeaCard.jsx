import React from 'react'
import {
  MERN,
  PERN,
  MEAN,
  MEVN,
  LAMP,
  FLASK_REACT,
  _Python,
  _Django,
  _MongoDB,
  _Express,
  _React,
  _Node,
  _Angular,
  _Flask,
  _Linux,
  _Apache,
  _MySQL,
  _PHP,
  _Vue,
  _Postgres
} from './stack_types'
import Tag from './Tag'

const IdeaCard = (props) => {
  const { stack, title, description, handleClick, id, likes } = props

  const renderTags = () => {
    switch (stack) {
      case MERN:
        return (
          <ul>
            <Tag stack={_MongoDB} />
            <Tag stack={_Express} />
            <Tag stack={_React} />
            <Tag stack={_Node} />
          </ul>
        )
      case PERN:
        return (
          <ul>
            <Tag stack={_Postgres} />
            <Tag stack={_Express} />
            <Tag stack={_React} />
            <Tag stack={_Node} />
          </ul>
        )
      case MEAN:
        return (
          <ul>
            <Tag stack={_MongoDB} />
            <Tag stack={_Express} />
            <Tag stack={_Angular} />
            <Tag stack={_Node} />
          </ul>
        )
      case MEVN:
        return (
          <ul>
            <Tag stack={_MongoDB} />
            <Tag stack={_Express} />
            <Tag stack={_Vue} />
            <Tag stack={_Node} />
          </ul>
        )
      case LAMP:
        return (
          <ul>
            <Tag stack={_Linux} />
            <Tag stack={_Apache} />
            <Tag stack={_MySQL} />
            <Tag stack={_PHP} />
          </ul>
        )
      case FLASK_REACT:
        return (
          <ul>
            <Tag stack={_Flask} />
            <Tag stack={_React} />
          </ul>
        )
      default:
        return
    }
  }

  return (
    <div>
      {props ? (
        <div>
          <h3>{title}</h3>
          <p>{description}</p>
          <div>{renderTags()}</div>
          <p> {likes ? likes : 'no likes '}</p>
          <button onClick={() => handleClick(id)}>View Details</button>
        </div>
      ) : (
        <div>
          <p>No data here! Enjoy blankness.</p>
        </div>
      )}
    </div>
  )
}

export default IdeaCard

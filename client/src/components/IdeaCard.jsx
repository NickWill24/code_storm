import React from 'react'
import Tag from './Tag'

const IdeaCard = (props) => {
  const { stack, title, description, handleClick, id } = props

  const renderTags = () =>
    stack ? stack.map((tag, idx) => <Tag key={idx} tag={tag} />) : 'no tags'

  return (
    <div>
      {props ? (
        <div>
          <h4>IdeaCard</h4>
          <p>{title}</p>
          <p>{description}</p>
          <div>{renderTags()}</div>
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

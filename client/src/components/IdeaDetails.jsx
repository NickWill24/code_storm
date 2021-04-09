import React, { useEffect } from 'react'
import Tag from './Tag'
import { connect } from 'react-redux'
import { getIdea, removeIdea } from '../store/actions/IdeaActions'
import { NavLink } from 'react-router-dom'

const mapStateToProps = (state) => {
  return { ideaState: state.ideaState }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getIdea: (id) => dispatch(getIdea(id)),
    removeIdea: (id) => dispatch(removeIdea(id))
  }
}

const IdeaDetails = (props) => {
  const { stack, title, description, id } = props.ideaState.getIdea

  const renderTags = () =>
    stack ? stack.map((tag, idx) => <Tag key={idx} tag={tag} />) : 'no tags'

  const handleClick = (id) => {
    props.removeIdea(id)
  }
  useEffect(() => {
    props.getIdea(props.ideaState.selectIdea)
  }, [])

  return (
    <div>
      {props.ideaState.getIdea ? (
        <div>
          <h4>IdeaDetails</h4>
          <p>{title}</p>
          <p>{description}</p>
          <div>{renderTags()}</div>
          <NavLink to="/">
            <button onClick={() => handleClick(id)}>
              Delete This Idea Now
            </button>
          </NavLink>
        </div>
      ) : (
        <div>
          <p>No data here! Enjoy blankness.</p>
        </div>
      )}
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(IdeaDetails)

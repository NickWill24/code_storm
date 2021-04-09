import React from 'react'
import Tag from './Tag'
import { connect } from 'react-redux'
import { GetIdeas, SelectIdea } from '../store/actions'

const mapStateToProps = (state) => {
  return { ideaState: state.ideaState }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getIdeas: () => dispatch(GetIdeas()),
    deleteIdea: (id) => dispatch(SelectIdea(id))
  }
}

const IdeaDetails = (props) => {
  const { stack, title, description, id } = props.ideaState.getIdea

  const renderTags = () =>
    stack ? stack.map((tag, idx) => <Tag key={idx} tag={tag} />) : 'no tags'

  const handleClick = (id) => props.deleteIdea(id)

  return (
    <div>
      {props ? (
        <div>
          <h4>IdeaDetails</h4>
          <p>{title}</p>
          <p>{description}</p>
          <div>{renderTags()}</div>
          <button onClick={(e) => handleClick(e, id)}>
            Delete This Idea Now
          </button>
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

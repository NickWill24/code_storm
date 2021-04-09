import React from 'react'
import IdeaCard from './IdeaCard'
import { connect } from 'react-redux'
import { GetIdeas, SelectIdea, LikeIdea } from '../store/actions'

const mapStateToProps = (state) => {
  return { ideaState: state.ideaState }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getIdeas: () => dispatch(GetIdeas()),
    selectIdea: (id) => dispatch(SelectIdea(id)),
    incrementLikeCount: (id) => dispatch(LikeIdea(id))
  }
}

const IdeaList = (props) => {
  const { ideas } = props.ideaState

  const targetIdea = (id) => {
    // SET SELECTED IDEA IN STATE
    props.selectIdea(id)
    // REDIRECT TO IDEA DETAILS PAGE
    props.history.push(`/idea/${id}`)
  }

  const likeIdea = (id) => {
    // INCREMENT LIKE COUNT
    props.incrementLikeCount(id)
  }

  const renderIdeas = () => {
    return ideas
      ? ideas.map((idea, idx) => (
          <div onClick={() => likeIdea(idea.id)}>
            <IdeaCard
              key={idx}
              title={idea.title}
              description={idea.description}
              stack={idea.stack}
              handleClick={targetIdea}
            />
          </div>
        ))
      : '...no ideas yet!'
  }
  // ADD USEFFECT
  return (
    <div>
      <h3>IdeaList</h3>
      {ideas ? renderIdeas() : 'No ideas today!'}
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(IdeaList)

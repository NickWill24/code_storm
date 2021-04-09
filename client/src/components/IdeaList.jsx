import React from 'react'
import IdeaCard from './IdeaCard'
import { connect } from 'react-redux'
import { GetIdeas, SelectIdea } from '../store/actions'
// AXIOS CALL FOR ALL IDEAS

const mapStateToProps = (state) => {
  return { ideaState: state.ideaState }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getIdeas: () => dispatch(GetIdeas()),
    selectIdea: (id) => dispatch(SelectIdea(id))
  }
}

const IdeaList = (props) => {
  const { ideas } = props.ideaState

  const handleClick = (e, id) => {
    // SET SELECTED IDEA IN STATE
    props.selectIdea(id)
    // REDIRECT TO IDEA DETAILS PAGE
    props.history.push(`/idea/${id}`)
  }

  const renderIdeas = () => {
    return ideas
      ? ideas.map((idea, idx) => (
          <IdeaCard
            key={idx}
            title={idea.title}
            description={idea.description}
            stack={idea.stack}
            handleClick={handleClick}
          />
        ))
      : '...no ideas yet!'
  }

  return (
    <div>
      <h3>IdeaList</h3>
      {ideas ? renderIdeas() : 'No ideas today!'}
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(IdeaList)

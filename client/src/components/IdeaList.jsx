import React from 'react'
import IdeaCard from './IdeaCard'
import { connect } from 'react-redux'
import { GetIdeas } from '../store/actions/GetIdeas'

const mapStateToProps = (state) => {
  return { ideaState: state.ideaState }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getIdeas: () => dispatch(GetIdeas())
  }
}

const IdeaList = (props) => {
  const { ideas } = props.ideaState

  const renderIdeas = () => {
    return ideas
      ? ideas.map((idea) => <IdeaCard title={idea.title} />)
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

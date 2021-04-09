import React, { useEffect } from 'react'
import IdeaCard from './IdeaCard'
import { connect } from 'react-redux'
import {
  getIdeas,
  selectIdea
  // LikeIdea
} from '../store/actions/IdeaActions'

const mapStateToProps = (state) => {
  return { ideaState: state.ideaState }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getIdeas: () => dispatch(getIdeas()),
    selectIdea: (id) => dispatch(selectIdea(id))
    // incrementLikeCount: (id) => dispatch(LikeIdea(id))
  }
}

const IdeaList = (props) => {
  const { ideas, getIdeas } = props.ideaState

  useEffect(() => {
    props.getIdeas()
  }, [props.getIdeas])

  const targetIdea = (id) => {
    console.log('click', id)
    // SET SELECTED IDEA IN STATE
    props.selectIdea(id)
    // REDIRECT TO IDEA DETAILS PAGE
    props.history.push(`/idea/${id}`)
  }

  const likeIdea = (id) => {
    // INCREMENT LIKE COUNT
    // props.incrementLikeCount(id)
  }

  const renderIdeas = () => {
    return ideas.length > 0 ? (
      ideas.map((idea, idx) => (
        <div onClick={() => likeIdea(idea.id)} key={idx}>
          <IdeaCard
            title={idea.title}
            description={idea.description}
            stack={idea.stacks}
            id={idea.id}
            handleClick={targetIdea}
          />
        </div>
      ))
    ) : (
      <p>...no ideas yet!</p>
    )
  }

  return (
    <div>
      <h3>IdeaList</h3>
      {renderIdeas()}
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(IdeaList)
